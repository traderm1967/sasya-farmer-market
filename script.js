const OWNER_WHATSAPP_NUMBER = "919876543210";

// 1. Master Products Catalog (Relative paths normalized)
const defaultProducts = [
    { id: 101, name: "Fresh Tomatoes", category: "vegetables", price: 40, costPrice: 25, unit: "kg", image: "images/tomato.jpg", organic: true, stock: 15, isPublished: true },
    { id: 102, name: "Organic Mangoes", category: "fruits", price: 120, costPrice: 80, unit: "kg", image: "images/mango.jpg", organic: true, stock: 0, isPublished: true },
    { id: 103, name: "Premium Rice 5kg", category: "grains", price: 350, costPrice: 280, unit: "pack", image: "images/rice.jpg", organic: false, stock: 10, isPublished: true },
    { id: 104, name: "Toor Dal (Kandi Pappu)", category: "pulses", price: 140, costPrice: 110, unit: "kg", image: "images/toordal.jpg", organic: false, stock: 8, isPublished: true },
    { id: 105, name: "Green Gram (Pesalu)", category: "pulses", price: 120, costPrice: 90, unit: "kg", image: "images/greengram.jpg", organic: true, stock: 20, isPublished: true },
    { id: 106, name: "Fresh Banana", category: "fruits", price: 60, costPrice: 40, unit: "dozen", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&auto=format&fit=crop", organic: true, stock: 12, isPublished: true },
    { id: 107, name: "Red Apples", category: "fruits", price: 180, costPrice: 130, unit: "kg", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&auto=format&fit=crop", organic: false, stock: 5, isPublished: true }
];

let products = [];
let cart = [];
let wishlist = [];
let orderHistory = [];

try {
    cart = JSON.parse(localStorage.getItem('sasya_cart_items')) || [];
    wishlist = JSON.parse(localStorage.getItem('sasya_wishlist')) || [];
    orderHistory = JSON.parse(localStorage.getItem('sasya_order_history')) || [];
} catch(e) {
    cart = []; wishlist = []; orderHistory = [];
}

function initProducts() {
    try {
        let savedData = localStorage.getItem('sasya_all_products');
        let parsed = savedData ? JSON.parse(savedData) : null;

        if (Array.isArray(parsed) && parsed.length > 0) {
            products = parsed;
        } else {
            products = JSON.parse(JSON.stringify(defaultProducts));
            localStorage.setItem('sasya_all_products', JSON.stringify(products));
        }
    } catch(e) {
        products = JSON.parse(JSON.stringify(defaultProducts));
    }
}

// Fixed GitHub Pages Relative Image Resolution
function getValidImage(imgSrc) {
    if (imgSrc && typeof imgSrc === 'string' && imgSrc.trim() !== '') {
        let path = imgSrc.trim();
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        if (path.startsWith('./')) {
            path = path.substring(2);
        }
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        return path;
    }
    return 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop';
}

function getCurrentPageCategory() {
    let path = window.location.pathname.toLowerCase();
    if (path.includes('fruits')) return 'fruits';
    if (path.includes('vegetables')) return 'vegetables';
    if (path.includes('grains')) return 'grains';
    if (path.includes('pulses')) return 'pulses';
    return 'all';
}

function refreshCurrentPageGrid() {
    let category = getCurrentPageCategory();
    renderCategoryPageProducts(category);
}

// 2. Render Products Grid
function renderCategoryPageProducts(categoryName, customList = null) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    initProducts();

    let targetCategory = (categoryName || '').toLowerCase().trim();
    let filteredList = customList;

    if (!filteredList) {
        filteredList = products.filter(p => {
            let pCat = (p.category || '').toLowerCase().trim();
            let isPub = p.isPublished !== false;
            
            if (targetCategory === 'all' || targetCategory === '') return isPub;
            return pCat === targetCategory && isPub;
        });
    }

    grid.innerHTML = '';

    if (!filteredList || filteredList.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 30px; color: #dc2626; font-weight: bold; width:100%;">ఈ కేటగిరీలో ప్రొడక్ట్స్ ఏవీ అందుబాటులో లేవు.</p>`;
        return;
    }

    let menuHTML = `<div class="product-menu-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; width: 100%;">`;
    filteredList.forEach(p => {
        const cartItem = cart.find(item => item.id == p.id);
        const qty = cartItem ? cartItem.quantity : 0;
        const imgSrc = getValidImage(p.image);
        const isSaved = wishlist.includes(p.id) ? '❤️' : '🤍';
        const isOutOfStock = p.stock !== undefined && p.stock <= 0;

        menuHTML += `
            <div class="product-card" style="background: white; border: 1px solid #86efac; border-radius: 10px; padding: 12px; text-align: center; position:relative; ${isOutOfStock ? 'opacity:0.75;' : ''}">
                <button onclick="toggleWishlist(${p.id}, event)" style="position:absolute; top:8px; right:8px; border:none; background:none; font-size:18px; cursor:pointer;" title="Save for later">${isSaved}</button>
                <img src="${imgSrc}" alt="${p.name}" onclick="openQuickView(${p.id})" style="width: 100px; height: 100px; object-fit: contain; cursor:pointer;" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop';">
                <h4 onclick="openQuickView(${p.id})" style="margin: 8px 0 4px 0; font-size: 14px; color: #14532d; cursor:pointer;">${p.name}</h4>
                <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: bold; color: #166534;">₹${p.price} / ${p.unit || 'kg'}</p>
                <div class="menu-item-action">
                    ${isOutOfStock ? `
                        <button disabled style="background: #9ca3af; color: white; border: none; padding: 5px 12px; border-radius: 4px; cursor: not-allowed; font-size: 12px; font-weight: bold;">🚫 Out of Stock</button>
                    ` : qty > 0 ? `
                        <div class="qty-btn-container" style="display: flex; justify-content: center; align-items: center; gap: 8px;">
                            <button class="qty-btn" onclick="updateQuantity(${p.id}, -1)" style="padding: 2px 8px; cursor: pointer;">-</button>
                            <span class="qty-count" style="font-weight: bold;">${qty}</span>
                            <button class="qty-btn" onclick="updateQuantity(${p.id}, 1)" style="padding: 2px 8px; cursor: pointer;">+</button>
                        </div>
                    ` : `
                        <button class="btn menu-add-btn" onclick="addToCart(${p.id})" style="background: #2d6a4f; color: white; border: none; padding: 5px 15px; border-radius: 4px; cursor: pointer;">+ Add</button>
                    `}
                </div>
            </div>
        `;
    });
    menuHTML += `</div>`;
    grid.innerHTML = menuHTML;
}

// Wishlist Functionality
function toggleWishlist(id, event) {
    if (event) event.stopPropagation();
    let index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(id);
    }
    localStorage.setItem('sasya_wishlist', JSON.stringify(wishlist));
    refreshCurrentPageGrid();
}

// Quick View Functionality
function openQuickView(id) {
    let p = products.find(prod => prod.id == id);
    if (!p) return;
    alert(`${p.name}\nధర: ₹${p.price} / ${p.unit || 'kg'}\nఆర్గానిక్: ${p.organic ? 'అవును' : 'కాదు'}\nస్టాక్: ${p.stock}`);
}

// Search Functionality
function searchProducts() {
    let input = document.getElementById('search-input');
    if (!input) return;
    let query = input.value.toLowerCase().trim();
    let category = getCurrentPageCategory();

    initProducts();
    let list = products.filter(p => {
        let matchesCategory = (category === 'all' || (p.category && p.category.toLowerCase().includes(category)));
        let matchesQuery = p.name.toLowerCase().includes(query);
        return matchesCategory && matchesQuery && (p.isPublished !== false);
    });
    renderCategoryPageProducts(category, list);
}

// Filter and Sort Functionality
function applyFilterAndSort() {
    let sortSelect = document.getElementById('sort-select');
    let organicFilter = document.getElementById('organic-filter');
    let category = getCurrentPageCategory();

    initProducts();
    let list = products.filter(p => {
        let matchesCategory = (category === 'all' || (p.category && p.category.toLowerCase().includes(category)));
        let isPub = p.isPublished !== false;
        let isOrganic = organicFilter ? organicFilter.checked : false;
        if (isOrganic && !p.organic) return false;
        return matchesCategory && isPub;
    });

    if (sortSelect) {
        let val = sortSelect.value;
        if (val === 'low-to-high') list.sort((a, b) => a.price - b.price);
        else if (val === 'high-to-low') list.sort((a, b) => b.price - a.price);
        else if (val === 'a-to-z') list.sort((a, b) => a.name.localeCompare(b.name));
        else if (val === 'z-to-a') list.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderCategoryPageProducts(category, list);
}

// 3. Cart Logic with Stock Management
function addToCart(id) {
    initProducts();
    const product = products.find(p => p.id == id);
    if (!product) return;

    if (product.stock !== undefined && product.stock <= 0) {
        alert("ఈ ప్రొడక్ట్ స్టాక్‌లో లేదు (Out of Stock)!");
        return;
    }

    let existing = cart.find(i => i.id == id);
    if (existing) {
        if (product.stock !== undefined && existing.quantity >= product.stock) {
            alert(`గరిష్ట స్టాక్ పరిమితి: ${product.stock}`);
            return;
        }
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    refreshCurrentPageGrid();
    openCart();
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id == id);
    const product = products.find(p => p.id == id);
    if (!item) return;

    if (change > 0 && product && product.stock !== undefined && item.quantity >= product.stock) {
        alert(`గరిష్ట స్టాక్ చేరింది! (Max: ${product.stock})`);
        return;
    }

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id != id);
    }

    saveCart();
    updateCartUI();
    refreshCurrentPageGrid();
}

function saveCart() {
    try {
        localStorage.setItem('sasya_cart_items', JSON.stringify(cart));
    } catch(e) {}
}

function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountElement) cartCountElement.innerText = totalItems;

    if (!container) return;
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888; margin-top:20px;">మీ కార్ట్ ఖాళీగా ఉంది.</p>';
    } else {
        cart.forEach(item => {
            container.innerHTML += `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid #eee;">
                    <div>
                        <h4 style="margin:0; font-size:14px; color:#2d6a4f;">${item.name}</h4>
                        <p style="margin:2px 0 0 0; font-size:12px; color:#666;">₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</p>
                    </div>
                    <div style="display:flex; gap:5px; align-items:center;">
                        <button onclick="updateQuantity(${item.id}, -1)" style="padding:2px 8px; cursor:pointer;">-</button>
                        <span style="font-size:13px; font-weight:bold;">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" style="padding:2px 8px; cursor:pointer;">+</button>
                    </div>
                </div>
            `;
        });
    }

    injectDeliveryAndCheckout();
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function openCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
}

function clearCartCompletely() {
    cart = [];
    saveCart();
    updateCartUI();
    refreshCurrentPageGrid();
}

// 4. Free Delivery Bar & Checkout Options Injection
function injectDeliveryAndCheckout() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartFooter = cartSidebar ? cartSidebar.querySelector('.cart-footer') : null;
    if (!cartSidebar) return;

    let barContainer = document.getElementById('free-delivery-container');
    if (!barContainer) {
        barContainer = document.createElement('div');
        barContainer.id = 'free-delivery-container';
        const cartHeader = cartSidebar.querySelector('.cart-header');
        if (cartHeader) {
            cartHeader.after(barContainer);
        } else {
            cartSidebar.prepend(barContainer);
        }
    }

    const freeThreshold = 500;
    const currentTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (currentTotal === 0) {
        barContainer.innerHTML = `<p style="margin:0; font-size:12px; color:#047857; text-align:center; padding:8px; background:#ecfdf5; border-bottom:1px solid #a7f3d0;">🚚 ₹${freeThreshold} పైన ఆర్డర్ చేస్తే <b>FREE Delivery!</b></p>`;
    } else if (currentTotal >= freeThreshold) {
        barContainer.innerHTML = `<p style="margin:0; font-size:12px; color:#15803d; font-weight:bold; text-align:center; padding:8px; background:#ecfdf5; border-bottom:1px solid #a7f3d0;">🎉 మీకు ఫ్రీ డెలివరీ లభించింది!</p>`;
    } else {
        const remaining = freeThreshold - currentTotal;
        const progressPercent = Math.min((currentTotal / freeThreshold) * 100, 100);
        barContainer.innerHTML = `
            <div style="background:#ecfdf5; padding:8px 12px; border-bottom:1px solid #a7f3d0; text-align:center;">
                <p style="margin:0 0 4px 0; font-size:12px; color:#047857;">ఇంకా <b>₹${remaining}</b> కొంటే <b>FREE Delivery!</b></p>
                <div style="background:#cbd5e1; height:6px; border-radius:3px; overflow:hidden;">
                    <div style="background:#10b981; width:${progressPercent}%; height:100%;"></div>
                </div>
            </div>
        `;
    }

    let deliveryBox = document.getElementById('custom-delivery-box');
    if (!deliveryBox) {
        deliveryBox = document.createElement('div');
        deliveryBox.id = 'custom-delivery-box';
        deliveryBox.style.cssText = "padding: 12px 15px; background: #f0fdf4; border-top: 1px solid #bbf7d0;";
        deliveryBox.innerHTML = `
            <h4 style="margin: 0 0 6px 0; font-size: 13px; color: #14532d;">🚚 Delivery Option:</h4>
            <div style="display: flex; gap: 15px; font-size: 12px; font-weight: bold; margin-bottom: 8px;">
                <label><input type="radio" name="delivery-type" value="Home Delivery" checked> 🚚 Home Delivery</label>
                <label><input type="radio" name="delivery-type" value="Store Pickup"> 🏪 Store Pickup</label>
            </div>
            <input type="text" id="cust-name" placeholder="మీ పేరు *" style="width:100%; padding:6px; margin-bottom:4px; border:1px solid #86efac; border-radius:4px; font-size:12px; box-sizing:border-box;">
            <input type="text" id="cust-address" placeholder="అడ్రస్ *" style="width:100%; padding:6px; margin-bottom:4px; border:1px solid #86efac; border-radius:4px; font-size:12px; box-sizing:border-box;">
            <input type="tel" id="cust-phone" placeholder="ఫోన్ నంబర్ *" style="width:100%; padding:6px; border:1px solid #86efac; border-radius:4px; font-size:12px; box-sizing:border-box;">
        `;
        if (cartFooter) {
            cartSidebar.insertBefore(deliveryBox, cartFooter);
        } else {
            cartSidebar.appendChild(deliveryBox);
        }
    }

    if (cartFooter) {
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartFooter.innerHTML = `
            <div style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:10px; color:#14532d; font-size:15px;">
                <span>Total Amount:</span>
                <span>₹${totalAmount}</span>
            </div>
            <button style="background:#2d6a4f; color:#fff; border:none; width:100%; padding:10px; border-radius:5px; font-weight:bold; cursor:pointer; margin-bottom:6px;" onclick="placeDirectOrder()">🛍️ Place Order Direct</button>
            <button style="background:#25d366; color:#fff; border:none; width:100%; padding:10px; border-radius:5px; font-weight:bold; cursor:pointer; margin-bottom:6px;" onclick="orderViaWhatsApp()">💬 Order via WhatsApp</button>
        `;
    }
}

// 5. Save Order to History & Admin Sales Report
function saveOrderToHistory(customerData) {
    let newOrder = {
        id: "ORD" + Math.floor(100000 + Math.random() * 900000),
        customerName: customerData.name || "Customer",
        date: new Date().toLocaleDateString('en-GB'),
        timestamp: new Date().toLocaleString(),
        customer: customerData,
        items: [...cart],
        totalAmount: cart.reduce((sum, i) => sum + (i.price * i.quantity), 0),
        status: "Pending ⏳"
    };

    let adminOrders = JSON.parse(localStorage.getItem('sasya_orders')) || [];
    adminOrders.push(newOrder);
    localStorage.setItem('sasya_orders', JSON.stringify(adminOrders));

    orderHistory.unshift(newOrder);
    localStorage.setItem('sasya_order_history', JSON.stringify(orderHistory));

    cart.forEach(cartItem => {
        let prod = products.find(p => p.id == cartItem.id);
        if (prod && prod.stock !== undefined) {
            prod.stock = Math.max(0, prod.stock - cartItem.quantity);
        }
    });
    localStorage.setItem('sasya_all_products', JSON.stringify(products));
}

function placeDirectOrder() {
    let name = document.getElementById('cust-name') ? document.getElementById('cust-name').value.trim() : '';
    let address = document.getElementById('cust-address') ? document.getElementById('cust-address').value.trim() : '';
    let phone = document.getElementById('cust-phone') ? document.getElementById('cust-phone').value.trim() : '';

    if (cart.length === 0) { alert("మీ కార్ట్ ఖాళీగా ఉంది!"); return; }
    if (!name || !address || !phone) { alert("దయచేసి పేరు, అడ్రస్ మరియు ఫోన్ నంబర్ ఇవ్వండి!"); return; }

    saveOrderToHistory({ name, address, phone });
    alert("✅ మీ ఆర్డర్ విజయవంతంగా నమోదైంది!");
    clearCartCompletely();
}

function orderViaWhatsApp() {
    let name = document.getElementById('cust-name') ? document.getElementById('cust-name').value.trim() : '';
    let address = document.getElementById('cust-address') ? document.getElementById('cust-address').value.trim() : '';
    let phone = document.getElementById('cust-phone') ? document.getElementById('cust-phone').value.trim() : '';
    let deliveryType = document.querySelector('input[name="delivery-type"]:checked') ? document.querySelector('input[name="delivery-type"]:checked').value : 'Home Delivery';

    if (cart.length === 0) { alert("మీ కార్ట్ ఖాళీగా ఉంది!"); return; }
    if (!name || !address || !phone) { alert("దయచేసి పేరు, అడ్రస్ మరియు ఫోన్ నంబర్ ఇవ్వండి!"); return; }

    saveOrderToHistory({ name, address, phone });

    let message = `*New Order - Sasya Farmer Market*%0A`;
    message += `*Name:* ${name}%0A*Phone:* ${phone}%0A*Address:* ${address}%0A*Delivery Type:* ${deliveryType}%0A%0A*Items:*%0A`;

    let total = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `- ${item.name} (${item.quantity} x ₹${item.price}) = ₹${itemTotal}%0A`;
    });
    message += `%0A*Total Amount:* ₹${total}`;

    window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${message}`, '_blank');
    clearCartCompletely();
}

// Helper: Clear cache & reload completely
function resetAllAppCache() {
    localStorage.removeItem('sasya_all_products');
    localStorage.removeItem('sasya_cart_items');
    location.reload();
}

// 6. Init execution on Page Load
document.addEventListener("DOMContentLoaded", function () {
    initProducts();
    updateCartUI();
    refreshCurrentPageGrid();
});

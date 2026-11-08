const OWNER_WHATSAPP_NUMBER = "918977881224";

// 1. Master Products Catalog (All 42 Products Fixed)
const defaultProducts = [
    // 🥦 VEGETABLES
    { id: 101, name: "Tomato", category: "vegetables", price: 40, costPrice: 30, unit: "kg", image: "images/tomato.jpg", organic: true, stock: 15, isPublished: true },
    { id: 102, name: "Potato", category: "vegetables", price: 40, costPrice: 30, unit: "kg", image: "images/potato.jpg", organic: false, stock: 20, isPublished: true },
    { id: 103, name: "Onion", category: "vegetables", price: 35, costPrice: 25, unit: "kg", image: "images/onion.jpg", organic: false, stock: 25, isPublished: true },
    { id: 104, name: "Brinjal", category: "vegetables", price: 30, costPrice: 20, unit: "kg", image: "images/brinjal.jpg", organic: true, stock: 10, isPublished: true },
    { id: 105, name: "Broccoli", category: "vegetables", price: 80, costPrice: 60, unit: "kg", image: "images/broccoli.jpg", organic: true, stock: 8, isPublished: true },
    { id: 106, name: "Cabbage", category: "vegetables", price: 30, costPrice: 20, unit: "kg", image: "images/cabbage.jpg", organic: false, stock: 15, isPublished: true },
    { id: 107, name: "Carrot", category: "vegetables", price: 60, costPrice: 45, unit: "kg", image: "images/carrot.jpg", organic: true, stock: 12, isPublished: true },
    { id: 108, name: "Corn", category: "vegetables", price: 30, costPrice: 20, unit: "kg", image: "images/corn.jpg", organic: false, stock: 18, isPublished: true },
    { id: 109, name: "Cucumber", category: "vegetables", price: 35, costPrice: 25, unit: "kg", image: "images/cucumber.jpg", organic: true, stock: 10, isPublished: true },
    { id: 110, name: "Green Chilli", category: "vegetables", price: 50, costPrice: 35, unit: "kg", image: "images/green-chilli.jpg", organic: true, stock: 10, isPublished: true },
    { id: 111, name: "Green Peas", category: "vegetables", price: 90, costPrice: 70, unit: "kg", image: "images/green-peas.jpg", organic: true, stock: 10, isPublished: true },

    // 🍎 FRUITS
    { id: 201, name: "Apple", category: "fruits", price: 180, costPrice: 140, unit: "kg", image: "images/apple.jpg", organic: true, stock: 10, isPublished: true },
    { id: 202, name: "Banana", category: "fruits", price: 50, costPrice: 35, unit: "dozen", image: "images/banana.jpg", organic: false, stock: 20, isPublished: true },
    { id: 203, name: "Dragon Fruit", category: "fruits", price: 150, costPrice: 110, unit: "kg", image: "images/dragan-fruit.jpg", organic: true, stock: 8, isPublished: true },
    { id: 204, name: "Guava", category: "fruits", price: 70, costPrice: 50, unit: "kg", image: "images/guava.jpg", organic: true, stock: 15, isPublished: true },
    { id: 205, name: "Mango", category: "fruits", price: 120, costPrice: 90, unit: "kg", image: "images/mango.jpg", organic: true, stock: 12, isPublished: true },
    { id: 206, name: "Orange", category: "fruits", price: 80, costPrice: 60, unit: "kg", image: "images/orange.jpg", organic: false, stock: 15, isPublished: true },
    { id: 207, name: "Papaya", category: "fruits", price: 50, costPrice: 35, unit: "kg", image: "images/papaya.jpg", organic: true, stock: 10, isPublished: true },
    { id: 208, name: "Pear", category: "fruits", price: 140, costPrice: 100, unit: "kg", image: "images/pear.jpg", organic: true, stock: 8, isPublished: true },
    { id: 209, name: "Plum", category: "fruits", price: 160, costPrice: 120, unit: "kg", image: "images/plum.jpg", organic: true, stock: 6, isPublished: true },
    { id: 210, name: "Strawberry", category: "fruits", price: 200, costPrice: 150, unit: "box", image: "images/strawberry.jpg", organic: true, stock: 5, isPublished: true },
    { id: 211, name: "Watermelon", category: "fruits", price: 40, costPrice: 25, unit: "kg", image: "images/watermelon.jpg", organic: false, stock: 10, isPublished: true },

    // 🌾 GRAINS & MILLETS
    { id: 301, name: "Barley", category: "grains", price: 65, costPrice: 45, unit: "kg", image: "images/barley.jpg", organic: true, stock: 20, isPublished: true },
    { id: 302, name: "Brown Rice", category: "grains", price: 90, costPrice: 70, unit: "kg", image: "images/brown-rice.jpg", organic: true, stock: 25, isPublished: true },
    { id: 303, name: "Golden Rice", category: "grains", price: 80, costPrice: 60, unit: "kg", image: "images/golden-rice.jpg", organic: false, stock: 30, isPublished: true },
    { id: 304, name: "Little Millet", category: "grains", price: 110, costPrice: 85, unit: "kg", image: "images/little-millet.jpg", organic: true, stock: 15, isPublished: true },
    { id: 305, name: "Oats", category: "grains", price: 120, costPrice: 90, unit: "kg", image: "images/oats.jpg", organic: true, stock: 15, isPublished: true },
    { id: 306, name: "Ragi", category: "grains", price: 55, costPrice: 40, unit: "kg", image: "images/ragi.jpg", organic: true, stock: 20, isPublished: true },
    { id: 307, name: "Suji (Semolina)", category: "grains", price: 45, costPrice: 32, unit: "kg", image: "images/suji.jpg", organic: false, stock: 25, isPublished: true },
    { id: 308, name: "Wheat", category: "grains", price: 40, costPrice: 28, unit: "kg", image: "images/wheat.jpg", organic: false, stock: 40, isPublished: true },

    // 🫘 PULSES & DALS
    { id: 401, name: "Chana Dal", category: "pulses", price: 95, costPrice: 75, unit: "kg", image: "images/chana-dal.jpg", organic: false, stock: 20, isPublished: true },
    { id: 402, name: "Kulthi Dal (Horse Gram)", category: "pulses", price: 100, costPrice: 80, unit: "kg", image: "images/kulthi-dal.jpg", organic: true, stock: 12, isPublished: true },
    { id: 403, name: "Lobia (Black-eyed Peas)", category: "pulses", price: 110, costPrice: 85, unit: "kg", image: "images/lobia.jpg", organic: true, stock: 15, isPublished: true },
    { id: 404, name: "Masoor Dal", category: "pulses", price: 90, costPrice: 70, unit: "kg", image: "images/masoor-dal.jpg", organic: false, stock: 20, isPublished: true },
    { id: 405, name: "Mung Bean (Pesalu)", category: "pulses", price: 120, costPrice: 95, unit: "kg", image: "images/mung-bean.jpg", organic: true, stock: 18, isPublished: true },
    { id: 406, name: "Rajma", category: "pulses", price: 140, costPrice: 110, unit: "kg", image: "images/rajma.jpg", organic: true, stock: 10, isPublished: true },
    { id: 407, name: "Tuvar Dal (Kandi Pappu)", category: "pulses", price: 150, costPrice: 120, unit: "kg", image: "images/tuvar-dal.jpg", organic: false, stock: 25, isPublished: true }
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

        if (Array.isArray(parsed) && parsed.length >= defaultProducts.length) {
            products = parsed;
        } else {
            products = [...defaultProducts];
            localStorage.setItem('sasya_all_products', JSON.stringify(products));
        }
    } catch(e) {
        products = [...defaultProducts];
    }
}

function getValidImage(imgSrc) {
    if (imgSrc && typeof imgSrc === 'string' && imgSrc.trim() !== '') {
        return imgSrc.trim();
    }
    return 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop';
}

// 2. Render Products Grid
function renderCategoryPageProducts(categoryName, customList = null) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    initProducts();
    let targetCategory = (categoryName || '').toLowerCase().trim();

    if (targetCategory === 'home') {
        grid.innerHTML = '';
        return;
    }

    let filteredList = customList;

    if (!filteredList) {
        filteredList = products.filter(p => {
            let pCat = (p.category || '').toLowerCase().trim();
            let isPub = p.isPublished !== false;
            
            if (targetCategory === 'all') return isPub;
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

// Search Functionality
function searchProducts() {
    let input = document.getElementById('search-input');
    if (!input) return;
    let query = input.value.toLowerCase().trim();
    let category = getCurrentPageCategory();

    initProducts();
    let list = products.filter(p => {
        let matchesCategory = (category === 'all' || category === 'home' || (p.category && p.category.toLowerCase().includes(category)));
        let matchesQuery = p.name.toLowerCase().includes(query);
        return matchesCategory && matchesQuery && (p.isPublished !== false);
    });
    renderCategoryPageProducts(category === 'home' ? 'all' : category, list);
}

// Filter and Sort Functionality
function applyFilterAndSort() {
    let sortSelect = document.getElementById('sort-select');
    let organicFilter = document.getElementById('organic-filter');
    let category = getCurrentPageCategory();

    initProducts();
    let list = products.filter(p => {
        let matchesCategory = (category === 'all' || category === 'home' || (p.category && p.category.toLowerCase().includes(category)));
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

    renderCategoryPageProducts(category === 'home' ? 'all' : category, list);
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
}

function saveCart() {
    localStorage.setItem('sasya_cart_items', JSON.stringify(cart));
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
            <button style="background:#0284c7; color:#fff; border:none; width:100%; padding:10px; border-radius:5px; font-weight:bold; cursor:pointer; margin-bottom:6px;" onclick="downloadPDFBill()">📄 Print / Download PDF Bill</button>
            <button style="background:#6b7280; color:#fff; border:none; width:100%; padding:8px; border-radius:5px; font-size:12px; font-weight:bold; cursor:pointer;" onclick="openOrderHistoryModal()">📜 My Past Orders</button>
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
    message += `%0A*Total Amount: ₹${total}*`;

    clearCartCompletely();
    window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

function downloadPDFBill() {
    let name = document.getElementById('cust-name') ? document.getElementById('cust-name').value.trim() : 'Customer';
    let address = document.getElementById('cust-address') ? document.getElementById('cust-address').value.trim() : '-';
    let phone = document.getElementById('cust-phone') ? document.getElementById('cust-phone').value.trim() : '-';
    
    if (cart.length === 0) { alert("మీ కార్ట్ ఖాళీగా ఉంది!"); return; }

    saveOrderToHistory({ name, address, phone });

    let billWindow = window.open('', '_blank');
    let total = 0;
    let itemsHtml = '';
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsHtml += `<tr><td style="padding:8px; border-bottom:1px solid #ddd;">${item.name}</td><td style="padding:8px; border-bottom:1px solid #ddd; text-align:center;">${item.quantity}</td><td style="padding:8px; border-bottom:1px solid #ddd; text-align:right;">₹${item.price}</td><td style="padding:8px; border-bottom:1px solid #ddd; text-align:right;">₹${itemTotal}</td></tr>`;
    });

    billWindow.document.write(`
        <html><head><title>Sasya Bill</title></head>
        <body style="font-family:Arial; padding:20px; max-width:600px; margin:auto;">
            <h2 style="color:#2d6a4f; text-align:center;">🌱 Sasya Farmer Market</h2><hr>
            <p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p><p><b>Address:</b> ${address}</p><hr>
            <table style="width:100%; border-collapse:collapse; margin-top:10px;">
                <tr style="background:#2d6a4f; color:white;">
                    <th style="padding:8px; text-align:left;">Item</th><th style="padding:8px; text-align:center;">Qty</th><th style="padding:8px; text-align:right;">Price</th><th style="padding:8px; text-align:right;">Total</th>
                </tr>${itemsHtml}
            </table>
            <h3 style="text-align:right; color:#14532d;">Grand Total: ₹${total}</h3><hr>
            <p style="text-align:center; font-size:12px; color:#666;">Thank you for shopping with Sasya Farmer Market!</p>
            <script>window.print();</script>
        </body></html>
    `);
    billWindow.document.close();
    clearCartCompletely();
}

// 6. Order History Modal UI
function openOrderHistoryModal() {
    let modal = document.getElementById('order-history-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'order-history-modal';
        modal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; z-index:99999; padding:15px;";
        document.body.appendChild(modal);
    }

    try {
        orderHistory = JSON.parse(localStorage.getItem('sasya_order_history')) || [];
    } catch(e) { orderHistory = []; }

    let historyHtml = '';
    if (orderHistory.length === 0) {
        historyHtml = '<p style="color:#888; text-align:center;">మీరు ఇంకా ఏ ఆర్డర్‌లు చేయలేదు.</p>';
    } else {
        orderHistory.forEach(ord => {
            let itemsText = ord.items.map(i => `${i.name} (x${i.quantity})`).join(', ');
            let currentStatus = ord.status || "Pending ⏳";
            
            let statusStyle = "background: #fef3c7; color: #d97706;";
            if (currentStatus.includes("Out for Delivery")) {
                statusStyle = "background: #e0f2fe; color: #0284c7;";
            } else if (currentStatus.includes("Delivered")) {
                statusStyle = "background: #dcfce7; color: #166534;";
            }

            historyHtml += `
                <div style="border:1px solid #cbd5e1; border-radius:8px; padding:12px; margin-bottom:12px; text-align:left; background:#f8fafc;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="font-weight:bold; color:#1e293b;">ID: ${ord.id}</span>
                        <span style="font-size:11px; font-weight:bold; padding:3px 8px; border-radius:12px; ${statusStyle}">${currentStatus}</span>
                    </div>
                    <p style="margin:2px 0; font-size:11px; color:#64748b;">📅 ${ord.timestamp || ord.date}</p>
                    <p style="margin:6px 0; font-size:13px; color:#334155;"><b>Items:</b> ${itemsText}</p>
                    <div style="text-align:right; font-weight:bold; color:#166534; font-size:14px; margin-top:4px;">
                        Total: ₹${ord.totalAmount}
                    </div>
                </div>
            `;
        });
    }

    modal.innerHTML = `
        <div style="background:white; border-radius:12px; max-width:420px; width:100%; max-height:80vh; overflow-y:auto; padding:20px; position:relative;">
            <button onclick="closeOrderHistoryModal()" style="position:absolute; top:10px; right:15px; border:none; background:none; font-size:20px; cursor:pointer;">&times;</button>
            <h3 style="margin-top:0; color:#14532d;">📜 My Order History & Status</h3>
            <hr style="border:0; border-top:1px solid #eee; margin-bottom:15px;">
            ${historyHtml}
        </div>
    `;
    modal.style.display = 'flex';
}

function closeOrderHistoryModal() {
    const modal = document.getElementById('order-history-modal');
    if (modal) modal.style.display = 'none';
}

function clearCartCompletely() {
    cart = [];
    localStorage.removeItem('sasya_cart_items');
    updateCartUI();
    refreshCurrentPageGrid();
    closeCart();
}

function openQuickView(productId) {
    initProducts();
    const product = products.find(p => p.id == productId);
    if (!product) return;

    let modal = document.getElementById('quick-view-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quick-view-modal';
        modal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; z-index:9999; padding:15px;";
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div style="background:white; border-radius:12px; max-width:350px; width:100%; padding:20px; text-align:center; position:relative;">
            <button onclick="closeQuickView()" style="position:absolute; top:10px; right:15px; border:none; background:none; font-size:20px; cursor:pointer;">&times;</button>
            <img src="${getValidImage(product.image)}" style="width:120px; height:120px; object-fit:contain; margin-bottom:10px;" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop';">
            <h3 style="margin:8px 0; color:#14532d;">${product.name}</h3>
            <p style="font-weight:bold; color:#166534; font-size:16px;">₹${product.price} / ${product.unit || 'kg'}</p>
            <button onclick="addToCart(${product.id}); closeQuickView();" style="background:#2d6a4f; color:white; border:none; width:100%; padding:8px; border-radius:6px; cursor:pointer;">🛒 Add to Cart</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) modal.style.display = 'none';
}

function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        alert("❌ Wishlist నుండి తొలగించబడింది.");
    } else {
        wishlist.push(productId);
        alert("❤️ Wishlist లో సేవ్ చేయబడింది!");
    }
    
    localStorage.setItem('sasya_wishlist', JSON.stringify(wishlist));
    refreshCurrentPageGrid();
}

function getCurrentPageCategory() {
    let path = window.location.pathname.toLowerCase();
    
    if (path.includes('veg')) return 'vegetables';
    if (path.includes('fruit')) return 'fruits';
    if (path.includes('grain')) return 'grains';
    if (path.includes('pulse')) return 'pulses';
    
    return 'home';
}

function refreshCurrentPageGrid() {
    let category = getCurrentPageCategory();
    renderCategoryPageProducts(category);
}

let dealIntervalId = null;

function renderFlashSaleAndOffers() {
    let discounts = {};
    try { discounts = JSON.parse(localStorage.getItem('sasya_active_discounts')) || {}; } catch(e) { discounts = {}; }

    let dealContainer = document.getElementById('deal-product-container');
    let offersWrapper = document.getElementById('offers-wrapper');
    initProducts();

    let discountKeys = Object.keys(discounts);
    let activeDeals = [];
    let activeOffers = [];

    if (discountKeys.length > 0) {
        discountKeys.forEach(id => {
            let p = products.find(prod => prod.id == id);
            if (p) {
                let item = discounts[id];
                if (item.isDealOfDay) activeDeals.push({ product: p, offerPrice: item.offerPrice, tag: item.tag || 'OFFER' });
                activeOffers.push({ product: p, offerPrice: item.offerPrice, tag: item.tag || 'OFFER' });
            }
        });
    } else {
        products.slice(0, 4).forEach(p => {
            let offerPrice = Math.round(p.price * 0.9);
            activeDeals.push({ product: p, offerPrice: offerPrice, tag: '10% OFF' });
            activeOffers.push({ product: p, offerPrice: offerPrice, tag: 'SPECIAL' });
        });
    }

    if (dealContainer) {
        if (activeDeals.length > 0) {
            let dealSlidesHTML = activeDeals.map(item => {
                let p = item.product;
                let imgSrc = getValidImage(p.image);
                return `
                    <div class="deal-card-slide" onclick="openQuickView(${p.id})" style="cursor:pointer; display:none; align-items:center; gap:10px; background:rgba(255,255,255,0.12); padding:4px 12px; border-radius:8px; border:1px solid rgba(255,255,255,0.25); width:fit-content; max-width:320px; box-sizing:border-box;">
                        <img src="${imgSrc}" alt="${p.name}" class="deal-img" style="width:50px; height:50px; object-fit:contain;">
                        <div class="deal-details">
                            <h3 style="margin:0; font-size:13px; color:white;">${p.name} <span class="deal-tag" style="background:#ee5253; padding:1px 4px; border-radius:3px; font-size:10px;">${item.tag}</span></h3>
                            <p class="deal-price-line" style="margin:2px 0 0 0; font-size:12px; color:white;">
                                <strong>₹${item.offerPrice}</strong> / ${p.unit || 'kg'} 
                                <span class="original-price" style="text-decoration:line-through; opacity:0.7;">₹${p.price}</span>
                            </p>
                        </div>
                    </div>
                `;
            }).join('');

            dealContainer.innerHTML = dealSlidesHTML;
            let slides = dealContainer.querySelectorAll('.deal-card-slide');
            let currentSlide = 0;
            if (slides.length > 0) slides[0].style.display = 'flex';
            if (dealIntervalId) clearInterval(dealIntervalId);
            if (slides.length > 1) {
                dealIntervalId = setInterval(() => {
                    slides[currentSlide].style.display = 'none';
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].style.display = 'flex';
                }, 3000);
            }
        } else {
            dealContainer.innerHTML = '<p style="color:#e2e8f0; font-size:12px; margin:0;">డీల్స్ ఏవీ లేవు.</p>';
        }
    }
    
    if (offersWrapper) {
        if (activeOffers.length > 0) {
            let offersHTML = activeOffers.map(item => {
                let p = item.product;
                let imgSrc = getValidImage(p.image);
                return `
                    <div class="offer-card" onclick="openQuickView(${p.id})" style="cursor:pointer; background:white; border:1px solid #86efac; border-radius:8px; padding:8px; display:inline-block; margin-right:10px; width:140px; text-align:center;">
                        <img src="${imgSrc}" alt="${p.name}" class="offer-img" style="width:70px; height:70px; object-fit:contain;">
                        <div class="offer-details" style="margin-top:5px;">
                            <span class="offer-badge" style="background:#ff9f43; color:white; font-size:9px; padding:1px 4px; border-radius:3px;">${item.tag}</span>
                            <h4 style="margin:4px 0 2px 0; font-size:12px; color:#14532d;">${p.name}</h4>
                            <p class="offer-price-line" style="margin:0; font-size:11px; color:#166534;">
                                <strong>₹${item.offerPrice}</strong>/${p.unit || 'kg'} 
                                <span class="original-price" style="text-decoration:line-through; color:#888;">₹${p.price}</span>
                            </p>
                        </div>
                    </div>
                `;
            }).join('');
            offersWrapper.innerHTML = offersHTML; 
        } else {
            offersWrapper.innerHTML = '<p style="color:#666; font-size:13px; padding:10px;">ప్రస్తుతం ప్రత్యేక ఆఫర్లు ఏవీ లేవు.</p>';
        }
    }
}

function startFlashTimer() {
    function updateTimerDisplay() {
        let savedEndTime = localStorage.getItem('sasya_flash_endtime');
        let endTime = Number(savedEndTime);

        if (!savedEndTime || isNaN(endTime) || endTime <= 0) {
            endTime = new Date().getTime() + (4 * 60 * 60 * 1000);
            localStorage.setItem('sasya_flash_endtime', endTime.toString());
        }

        let now = new Date().getTime();
        let distance = endTime - now;

        if (distance <= 0) {
            endTime = new Date().getTime() + (4 * 60 * 60 * 1000);
            localStorage.setItem('sasya_flash_endtime', endTime.toString());
            distance = endTime - now;
        }

        let hours = Math.floor(distance / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let hElem = document.getElementById('timer-hours');
        let mElem = document.getElementById('timer-mins');
        let sElem = document.getElementById('timer-secs');

        if (hElem) hElem.innerText = String(hours).padStart(2, '0');
        if (mElem) mElem.innerText = String(minutes).padStart(2, '0');
        if (sElem) sElem.innerText = String(seconds).padStart(2, '0');
    }

    updateTimerDisplay();
    setInterval(updateTimerDisplay, 1000);
}

function renderAnnouncementBar() {
    let saved = JSON.parse(localStorage.getItem('sasya_announcement'));
    let bar = document.getElementById('top-announcement-bar');
    let textSpan = document.getElementById('announcement-text-content');

    if (bar && textSpan) {
        if (saved && saved.active && saved.text) {
            textSpan.innerText = saved.text;
            let targetPage = "index.html";

            if (saved.link && saved.link !== "undefined" && saved.link.trim() !== "") {
                targetPage = saved.link;
            } else {
                let textLower = saved.text.toLowerCase();
                if (textLower.includes('fruit') || textLower.includes('mango') || textLower.includes('banana') || textLower.includes('apple') || textLower.includes('పండ్లు')) {
                    targetPage = "fruits.html";
                } else if (textLower.includes('veg') || textLower.includes('tomato') || textLower.includes('potato') || textLower.includes('కూరగాయలు')) {
                    targetPage = "vegetables.html";
                } else if (textLower.includes('grain') || textLower.includes('rice') || textLower.includes('wheat') || textLower.includes('corn') || textLower.includes('మొక్కజొన్న') || textLower.includes('ధాన్యాలు')) {
                    targetPage = "grains.html";
                } else if (textLower.includes('pulse') || textLower.includes('dal') || textLower.includes('pappu') || textLower.includes('gram') || textLower.includes('పెసలు')) {
                    targetPage = "pulses.html";
                }
            }

            bar.setAttribute('href', targetPage);
            bar.style.display = 'block';
        } else {
            bar.style.display = 'none';
        }
    }
}

function openCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('open');
}

function closeCart() {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.classList.remove('open');
    const overlay = document.getElementById('cart-overlay');
    if (overlay) overlay.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('sasya_all_products'); // Force refresh cached local storage
    initProducts();
    updateCartUI();
    renderFlashSaleAndOffers();
    startFlashTimer();
    renderAnnouncementBar();
    refreshCurrentPageGrid();
});

function goToAdminPortal() {
    let password = prompt("Admin పాస్‌వర్డ్ ఎంటర్ చేయండి:");
    
    if (password === "1234") {
        // '_blank' ద్వారా కొత్త ట్యాబ్‌లో అడ్మిన్ పేజీ ఓపెన్ అవుతుంది
        window.open("admin.html", "_blank");
    } else if (password !== null) {
        alert("❌ తప్పు పాస్‌వర్డ్!");
    }
}

// ఆఫర్ ప్రొడక్ట్‌లను చూపించే ఫంక్షన్
function displaySpecialOffers() {
    const container = document.getElementById("offers-product-grid");
    if (!container) return;

    // isOffer: true ఉన్న ప్రొడక్ట్‌లను మాత్రమే ఫిల్టర్ చేయడం
    const offerItems = products.filter(item => item.isOffer === true);

    if (offerItems.length === 0) {
        container.innerHTML = "<p style='color: #666;'>ప్రస్తుతం ఏ ఆఫర్‌లు లేవు.</p>";
        return;
    }

    container.innerHTML = offerItems.map(item => `
        <div class="product-card" style="border: 1px solid #fecaca; position: relative; background: white; padding: 15px; border-radius: 8px;">
            <span style="position: absolute; top: 10px; left: 10px; background: #dc2626; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">
                ${item.discount || '15% OFF'}
            </span>
            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px;">
            <h3 style="font-size: 16px; margin: 10px 0 5px 0;">${item.name}</h3>
            <div style="margin-bottom: 10px;">
                <span style="font-size: 16px; font-weight: bold; color: #166534;">₹${item.price}</span>
                ${item.originalPrice ? `<span style="text-decoration: line-through; color: #9ca3af; font-size: 13px; margin-left: 5px;">₹${item.originalPrice}</span>` : ''}
            </div>
            <button onclick="addToCart(${item.id})" class="btn" style="width: 100%; background: #dc2626; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer;">
                🛒 Add to Cart
            </button>
        </div>
    `).join("");
}

// పేజీ లోడ్ కాగానే ఆఫర్లు కనిపించేలా చేయడం
document.addEventListener("DOMContentLoaded", () => {
    displaySpecialOffers();
});

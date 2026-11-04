const OWNER_WHATSAPP_NUMBER = "918977881224";

const defaultProducts = [
    { id: 101, name: "Tomato", category: "vegetables", price: 40, costPrice: 30, unit: "kg", image: "images/tomato.jpg", organic: true, stock: 15, isPublished: true },
    { id: 102, name: "Potato", category: "vegetables", price: 40, costPrice: 30, unit: "kg", image: "images/potato.jpg", organic: false, stock: 20, isPublished: true },
    { id: 103, name: "Onion", category: "vegetables", price: 35, costPrice: 25, unit: "kg", image: "images/onion.jpg", organic: false, stock: 25, isPublished: true },
    { id: 104, name: "Toor Dal (Kandi Pappu)", category: "pulses", price: 140, costPrice: 110, unit: "kg", image: "images/toordal.jpg", organic: false, stock: 8, isPublished: true },
    { id: 105, name: "Green Gram (Pesalu)", category: "pulses", price: 120, costPrice: 90, unit: "kg", image: "images/greengram.jpg", organic: true, stock: 20, isPublished: true },
    { id: 106, name: "Papaya", category: "fruits", price: 60, costPrice: 45, unit: "kg", image: "images/papaya.jpg", organic: true, stock: 20, isPublished: true },
    { id: 107, name: "Fresh Banana", category: "fruits", price: 60, costPrice: 40, unit: "dozen", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&auto=format&fit=crop", organic: true, stock: 12, isPublished: true },
    { id: 108, name: "Red Apples", category: "fruits", price: 180, costPrice: 130, unit: "kg", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&auto=format&fit=crop", organic: false, stock: 5, isPublished: true }
];

let products = [];
let cart = [];
let wishlist = [];

try {
    cart = JSON.parse(localStorage.getItem('sasya_cart_items')) || [];
    wishlist = JSON.parse(localStorage.getItem('sasya_wishlist')) || [];
} catch(e) {
    cart = []; wishlist = [];
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

// 🟢 Image fallback & Property handler (image & images రెండింటినీ సపోర్ట్ చేస్తుంది)
function getValidImage(imgSrc) {
    if (imgSrc && typeof imgSrc === 'string' && imgSrc.trim() !== '') {
        let clean = imgSrc.trim();
        if (clean.startsWith('http://') || clean.startsWith('https://')) return clean;
        if (clean.startsWith('./')) clean = clean.substring(2);
        if (clean.startsWith('/')) clean = clean.substring(1);
        return clean;
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
    renderCategoryPageProducts(getCurrentPageCategory());
}

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
        // 🟢 Check both p.image and p.images
        const imgSrc = getValidImage(p.image || p.images);
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

function toggleWishlist(id, event) {
    if (event) event.stopPropagation();
    let index = wishlist.indexOf(id);
    if (index > -1) wishlist.splice(index, 1);
    else wishlist.push(id);
    localStorage.setItem('sasya_wishlist', JSON.stringify(wishlist));
    refreshCurrentPageGrid();
}

function openQuickView(id) {
    let p = products.find(prod => prod.id == id);
    if (!p) return;
    alert(`${p.name}\nధర: ₹${p.price} / ${p.unit || 'kg'}\nఆర్గానిక్: ${p.organic ? 'అవును' : 'కాదు'}\nస్టాక్: ${p.stock}`);
}

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

function addToCart(id) {
    initProducts();
    const product = products.find(p => p.id == id);
    if (!product) return;
    if (product.stock !== undefined && product.stock <= 0) {
        alert("ఈ ప్రొడక్ట్ స్టాక్‌లో లేదు!");
        return;
    }
    let existing = cart.find(i => i.id == id);
    if (existing) {
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
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id != id);
    }
    saveCart();
    updateCartUI();
    refreshCurrentPageGrid();
}

function saveCart() {
    try { localStorage.setItem('sasya_cart_items', JSON.stringify(cart)); } catch(e) {}
}

function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const totalPriceEl = document.getElementById('cart-total-price');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCountElement) cartCountElement.innerText = totalItems;
    if (totalPriceEl) totalPriceEl.innerText = `₹${totalAmount}`;

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

document.addEventListener("DOMContentLoaded", function () {
    initProducts();
    updateCartUI();
    refreshCurrentPageGrid();
});

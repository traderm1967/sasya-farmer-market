const OWNER_WHATSAPP_NUMBER = "918977881224";

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

try {
    cart = JSON.parse(localStorage.getItem('sasya_cart_items')) || [];
    wishlist = JSON.parse(localStorage.getItem('sasya_wishlist')) || [];
} catch(e) {
    cart = []; wishlist = [];
}

// 🟢 సరికొత్త ప్రొడక్ట్ డేటాను ప్రతిసారి లోడ్ చేసే ఫంక్షన్
function initProducts() {
    products = JSON.parse(JSON.stringify(defaultProducts));
}

// 🟢 ఇమేజ్ పాత్ సరిదిద్దే ఫంక్షన్
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

// 🟢 1. URL ని పర్ఫెక్ట్‌గా కేటగిరీకి మ్యాచ్ చేసే ఫంక్షన్
function getCurrentPageCategory() {
    let path = window.location.pathname.toLowerCase();
    
    if (path.includes('fruit')) return 'fruits';
    if (path.includes('veg')) return 'vegetables';
    if (path.includes('grain')) return 'grains';
    if (path.includes('pulse') || path.includes('dal')) return 'pulses';
    
    return 'home'; // index.html కి 'home'
}

// 🟢 2. పేజీ ఓపెన్ కాగానే స్వయంచాలకంగా లోడ్ అయ్యేలా:
document.addEventListener("DOMContentLoaded", function () {
    localStorage.removeItem('sasya_all_products'); // బ్రౌజర్ క్యాచే రీసెట్
    initProducts();
    updateCartUI();
    
    let currentCat = getCurrentPageCategory();
    renderCategoryPageProducts(currentCat);
});

function renderCategoryPageProducts(categoryName, customList = null) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    initProducts();
    let targetCategory = (categoryName || '').toLowerCase().trim();

    // 🟢 హోమ్‌పేజీ (home) లో ప్రొడక్ట్ గ్రిడ్ ఏమీ కనిపించకూడదు కాబట్టి grid ని ఖాళీ చేసి ఆపేస్తున్నాం
    if (targetCategory === 'home') {
        grid.innerHTML = '';
        return;
    }

    let filteredList = customList;

    if (!filteredList) {
        if (targetCategory === 'all' || targetCategory === '') {
            filteredList = products.filter(p => p.isPublished !== false);
        } else {
            filteredList = products.filter(p => {
                let pCat = (p.category || '').toLowerCase().trim();
                let isPub = p.isPublished !== false;
                return pCat === targetCategory && isPub;
            });
        }
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
    localStorage.removeItem('sasya_all_products');
    initProducts();
    updateCartUI();
    
    let currentCat = getCurrentPageCategory();
    if (currentCat !== 'home') {
        renderCategoryPageProducts(currentCat);
    } else {
        // 🟢 హోమ్‌పేజీలో కేవలం Special Offers & Deal of the Day మాత్రమే డిస్‌ప్లే అవుతాయి
        renderHomePageOffers();
    }
});

// 🟢 హోమ్‌పేజీ కోసం స్పెషల్ ఆఫర్స్ ఫంక్షన్
function renderHomePageOffers() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    // లిస్ట్ లోని మొదటి 4 ఆఫర్ ప్రొడక్ట్స్‌ని ఎంచుకుంటున్నాం
    const offerProducts = products.filter(p => p.isPublished !== false).slice(0, 4);

    let html = `
        <div style="width: 100%; margin-top: 20px;">
            <div style="background: linear-gradient(135deg, #ff9f43, #ee5253); padding: 12px 20px; border-radius: 8px; color: white; display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0; font-size: 18px;">🔥 Deal of the Day & Special Offers</h3>
                <span style="font-size: 12px; background: rgba(255,255,255,0.3); padding: 4px 8px; border-radius: 4px; font-weight: bold;">Limited Time</span>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px;">
    `;

    offerProducts.forEach(p => {
        const cartItem = cart.find(item => item.id == p.id);
        const qty = cartItem ? cartItem.quantity : 0;
        const imgSrc = getValidImage(p.image || p.images);
        const isSaved = wishlist.includes(p.id) ? '❤️' : '🤍';

        html += `
            <div class="product-card" style="background: white; border: 2px solid #ff9f43; border-radius: 10px; padding: 12px; text-align: center; position:relative;">
                <span style="position:absolute; top:8px; left:8px; background:#ee5253; color:white; font-size:10px; padding:2px 6px; border-radius:4px; font-weight:bold;">OFFER</span>
                <button onclick="toggleWishlist(${p.id}, event)" style="position:absolute; top:8px; right:8px; border:none; background:none; font-size:18px; cursor:pointer;">${isSaved}</button>
                <img src="${imgSrc}" alt="${p.name}" onclick="openQuickView(${p.id})" style="width: 100px; height: 100px; object-fit: contain; cursor:pointer;" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop';">
                <h4 onclick="openQuickView(${p.id})" style="margin: 8px 0 4px 0; font-size: 14px; color: #14532d; cursor:pointer;">${p.name}</h4>
                <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: bold; color: #166534;">₹${p.price} / ${p.unit || 'kg'}</p>
                <div class="menu-item-action">
                    ${qty > 0 ? `
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

    html += `</div></div>`;
    grid.innerHTML = html;
}

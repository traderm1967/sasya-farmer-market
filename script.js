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
    return '

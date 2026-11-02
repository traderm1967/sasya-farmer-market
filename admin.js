// ప్రారంభ ఉత్పత్తుల జాబితా / Default Products List
let defaultProducts = [
    { id: 101, name: "Fresh Tomatoes / తాజా టమాటాలు", category: "vegetables", price: 40, unit: "kg", image: "image/tomato.jpg", isPublished: true },
    { id: 102, name: "Organic Mangoes / ఆర్గానిక్ మామిడిపండ్లు", category: "fruits", price: 120, unit: "kg", image: "image/mango.jpg", isPublished: true },
    { id: 103, name: "Premium Rice 5kg / ప్రీమియం బియ్యం 5కి", category: "grains", price: 350, unit: "pack", image: "image/rice.jpg", isPublished: true }
];

// అడ్మిన్ మరియు మెయిన్ స్టోర్‌తో కనెక్ట్ కావడానికి 'sasya_all_products' వాడాలి
let products = JSON.parse(localStorage.getItem('sasya_all_products')) || defaultProducts;

function renderAdminProducts() {
    const list = document.getElementById('admin-product-list');
    if (!list) return;

    list.innerHTML = '';

    if (products.length === 0) {
        list.innerHTML = '<tr><td colspan="5" style="text-align:center;">No products available. Add a new product above. / ప్రొడక్ట్స్ ఏవీ అందుబాటులో లేవు.</td></tr>';
        return;
    }

    products.forEach(p => {
        const imgSrc = p.image ? p.image : 'https://via.placeholder.com/50';

        list.innerHTML += `
            <tr>
                <td><img src="${imgSrc}" width="40" height="40" style="object-fit:cover; border-radius:4px;" onerror="this.src='https://via.placeholder.com/40'"></td>
                <td><b>${p.name}</b></td>
                <td>${p.category}</td>
                <td>₹${p.price} / ${p.unit}</td>
                <td><button class="delete-btn" onclick="deleteProduct(${p.id})" style="background:#dc2626; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Delete / తొలగించు</button></td>
            </tr>
        `;
    });
}

function handleAddProduct(event) {
    event.preventDefault();

    const nameVal = document.getElementById('prod-name').value.trim();
    const priceVal = document.getElementById('prod-price').value;
    const unitVal = document.getElementById('prod-unit').value.trim();

    if (!nameVal || !priceVal || !unitVal) {
        alert("Please fill in all required fields! / దయచేసి అన్ని వివరాలను పూరించండి!");
        return;
    }

    const newProd = {
        id: Date.now(),
        name: nameVal,
        category: document.getElementById('prod-category').value,
        price: Number(priceVal),
        unit: unitVal,
        image: document.getElementById('prod-image').value.trim() || 'https://via.placeholder.com/150',
        isPublished: true
    };

    products.push(newProd);
    saveAndRefresh();
    document.getElementById('add-product-form').reset();
    alert('✅ Product Added Successfully! / ప్రొడక్ట్ విజయవంతంగా జోడించబడింది!');
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product? / ఈ ప్రొడక్ట్‌ను డిలీట్ చేయాలనుకుంటున్నారా?')) {
        products = products.filter(p => p.id !== id);
        saveAndRefresh();
    }
}

function saveAndRefresh() {
    // మెయిన్ వెబ్‌సైట్ మరియు అడ్మిన్ ప్యానెల్ రెండింటికీ వర్తించేలా సేవ్ చేయడం
    localStorage.setItem('sasya_all_products', JSON.stringify(products));
    renderAdminProducts();
}

document.addEventListener('DOMContentLoaded', () => {
    renderAdminProducts();
});
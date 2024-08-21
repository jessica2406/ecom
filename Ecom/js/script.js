// Mock product data
const products = [
    { id: 1, name: 'Product 1', description: 'Description of product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of product 2', price: 150 },
];

// Display products on dashboard
const productList = document.getElementById('product-list');
if (productList) {
    products.forEach(product => {
        productList.innerHTML += `<div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <a href="product.html?id=${product.id}">View Product</a>
        </div>`;
    });
}

// Handle add to cart
function addToCart() {
    alert('Product added to cart!');
}

// Handle checkout
function checkout() {
    window.location.href = 'checkout.html';
}

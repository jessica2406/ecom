// Placeholder for admin-specific functions

// Mock data for orders and customers
const orders = [
    { id: 1, customer: 'John Doe', total: 200, status: 'Shipped' },
    { id: 2, customer: 'Jane Doe', total: 150, status: 'Pending' },
];

const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// Display orders
const ordersList = document.getElementById('orders-list');
if (ordersList) {
    orders.forEach(order => {
        ordersList.innerHTML += `<div>
            <h3>Order ID: ${order.id}</h3>
            <p>Customer: ${order.customer}</p>
            <p>Total: $${order.total}</p>
            <p>Status: ${order.status}</p>
        </div>`;
    });
}

// Display customers
const customersList = document.getElementById('customers-list');
if (customersList) {
    customers.forEach(customer => {
        customersList.innerHTML += `<div>
            <h3>${customer.name}</h3>
            <p>Email: ${customer.email}</p>
        </div>`;
    });
}

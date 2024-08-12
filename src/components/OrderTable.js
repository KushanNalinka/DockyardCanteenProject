import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [orders, setOrders] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentOrder, setCurrentOrder] = useState({
        orderId: '',
        serviceNumber: '',
        serviceUserName: '',
        totalAmount: 0,
    });
    const [currentItem, setCurrentItem] = useState({
        itemId: null,
        productId: '',
        productName: '',
        quantity: 0,
    });

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5255/api/Orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const fetchOrderItems = async (orderId) => {
        try {
            const response = await axios.get(`http://localhost:5255/api/Orders/${orderId}/items`);
            setOrderItems(response.data);
        } catch (error) {
            console.error('Error fetching order items:', error);
        }
    };

    const handleDelete = async (orderId) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            try {
                await axios.delete(`http://localhost:5255/api/Orders/${orderId}`);
                setOrders(orders.filter(order => order.orderId !== orderId));
                setOrderItems([]); // Clear order items when order is deleted
            } catch (error) {
                console.error('Error deleting order:', error);
            }
        }
    };

    const handleStatusChange = async (orderId, status) => {
        try {
            await axios.put(`http://localhost:5255/api/Orders/updateStatus/${orderId}`, { status });
            fetchOrders();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleEditClick = (order) => {
        setCurrentOrder(order);
        setIsEditing(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setCurrentOrder(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditSubmit = async () => {
        try {
            await axios.put(`http://localhost:5255/api/Orders/updateDetails/${currentOrder.orderId}`, {
                serviceNumber: currentOrder.serviceNumber,
                serviceUserName: currentOrder.serviceUserName,
                totalAmount: parseFloat(currentOrder.totalAmount)
            });
            setIsEditing(false);
            fetchOrders();
        } catch (error) {
            console.error('Error updating order:', error);
        }
    };

    const handleItemEditClick = (item) => {
        setCurrentItem(item);
    };

    const handleItemEditChange = (e) => {
        const { name, value } = e.target;
        setCurrentItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleItemEditSubmit = async () => {
        try {
            await axios.put(`http://localhost:5255/api/Orders/updateItem/${currentItem.itemId}`, {
                productId: currentItem.productId,
                name: currentItem.productName,
                quantity: parseInt(currentItem.quantity)
            });
            fetchOrderItems(currentOrder.orderId);
            setCurrentItem({ itemId: null, productId: '', productName: '', quantity: 0 });
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleItemDelete = async (itemId) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await axios.delete(`http://localhost:5255/api/Orders/deleteItem/${itemId}`);
                fetchOrderItems(currentOrder.orderId);
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    const handleOrderClick = (orderId) => {
        fetchOrderItems(orderId);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <table className="min-w-full bg-white border border-gray-300 mb-4">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Order ID</th>
                        <th className="py-2 px-4 border-b">Service Number</th>
                        <th className="py-2 px-4 border-b">Service UserName</th>
                        <th className="py-2 px-4 border-b">Order Date</th>
                        <th className="py-2 px-4 border-b">Total Amount</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId} onClick={() => handleOrderClick(order.orderId)} className="cursor-pointer hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{order.orderId}</td>
                            <td className="py-2 px-4 border-b">{order.serviceNumber}</td>
                            <td className="py-2 px-4 border-b">{order.serviceUserName}</td>
                            <td className="py-2 px-4 border-b">{new Date(order.orderedDate).toLocaleString()}</td>
                            <td className="py-2 px-4 border-b">{order.totalAmount.toFixed(2)}</td>
                            <td className="py-2 px-4 border-b">
                                <select
                                    value={order.status}
                                    onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                                    className="border border-gray-300 rounded p-1"
                                >
                                    <option value="Not Yet Approved">Not Yet Approved</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleEditClick(order)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(order.orderId)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {orderItems.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold mb-4">Order Items</h2>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Order ID</th>
                                <th className="py-2 px-4 border-b">Product ID</th>
                                <th className="py-2 px-4 border-b">Product Name</th>
                                <th className="py-2 px-4 border-b">Quantity</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item) => (
                                <tr key={item.itemId}>
                                    <td className="py-2 px-4 border-b">{item.orderId}</td>
                                    <td className="py-2 px-4 border-b">{item.productId}</td>
                                    <td className="py-2 px-4 border-b">{item.productName}</td>
                                    <td className="py-2 px-4 border-b">{item.quantity}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => handleItemEditClick(item)}
                                            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleItemDelete(item.itemId)}
                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {isEditing && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Order</h2>
                        <input
                            type="text"
                            name="serviceNumber"
                            value={currentOrder.serviceNumber}
                            onChange={handleEditChange}
                            placeholder="Service Number"
                            className="border border-gray-300 rounded p-2 mb-2 w-full"
                        />
                        <input
                            type="text"
                            name="serviceUserName"
                            value={currentOrder.serviceUserName}
                            onChange={handleEditChange}
                            placeholder="Service UserName"
                            className="border border-gray-300 rounded p-2 mb-2 w-full"
                        />
                        <input
                            type="number"
                            name="totalAmount"
                            value={currentOrder.totalAmount}
                            onChange={handleEditChange}
                            placeholder="Total Amount"
                            className="border border-gray-300 rounded p-2 mb-2 w-full"
                        />
                        <button
                            onClick={handleEditSubmit}
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {currentItem.itemId !== null && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
                        <input
                            type="text"
                            name="productId"
                            value={currentItem.productId}
                            onChange={handleItemEditChange}
                            placeholder="Product ID"
                            className="border border-gray-300 rounded p-2 mb-2 w-full"
                        />
                        <input
                            type="text"
                            name="productName"
                            value={currentItem.productName}
                            onChange={handleItemEditChange}
                            placeholder="Product Name"
                            className="border border-gray-300 rounded p-2 mb-2 w-full"
                        />
                        <input
                            type="number"
                            name="quantity"
                            value={currentItem.quantity}
                            onChange={handleItemEditChange}
                            placeholder="Quantity"
                            className="border border-gray-300 rounded p-2 mb-2 w-full"
                        />
                        <button
                            onClick={handleItemEditSubmit}
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setCurrentItem({ itemId: null, productId: '', productName: '', quantity: 0 })}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;



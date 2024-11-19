

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import Navbar from '../components/AccountNavbar';

function App() {
    const [orders, setOrders] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [isOrderItemsModalOpen, setIsOrderItemsModalOpen] = useState(false);
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
    const [searchQuery, setSearchQuery] = useState(''); // Added state for search query

    useEffect(() => {
        fetchOrders();
    }, [searchQuery]); // Fetch orders whenever searchQuery changes

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5255/api/Orders');
            const filteredOrders = response.data.filter(order => {
                return (
                    order.serviceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    order.serviceUserName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    new Date(order.orderedDate).toLocaleDateString().includes(searchQuery) ||
                    order.orderId.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
            setOrders(filteredOrders);
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
                setOrderItems([]);
                setIsOrderItemsModalOpen(false);
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

    const handleOrderClick = (order) => {
        fetchOrderItems(order.orderId);
        setCurrentOrder(order);
        setIsOrderItemsModalOpen(true);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="container mx-auto p-4">
            <Navbar/>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>

          
            <div className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by Service Number, User Name, Order Date, or Order ID"
                    className="border border-gray-300 rounded p-2 w-full"
                />
            </div>

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
                        <th className="py-2 px-4 border-b">View Items</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId}>
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
                            <td className="py-2 px-4 border-b text-center">
                                <button
                                    onClick={() => handleOrderClick(order)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <FaEye size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOrderItemsModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-4/5 max-w-4xl">
                        <h2 className="text-xl font-bold mb-4">Order Items for {currentOrder.orderId}</h2>
                        <table className="min-w-full bg-white border border-gray-300 mb-4">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Item ID</th>
                                    <th className="py-2 px-4 border-b">Product ID</th>
                                    <th className="py-2 px-4 border-b">Product Name</th>
                                    <th className="py-2 px-4 border-b">Quantity</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderItems.map((item) => (
                                    <tr key={item.itemId}>
                                        <td className="py-2 px-4 border-b">{item.itemId}</td>
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
                        <button
                            onClick={() => setIsOrderItemsModalOpen(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {isEditing && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-4/5 max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Order</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="serviceNumber" className="block text-sm font-medium mb-2">
                                    Service Number
                                </label>
                                <input
                                    type="text"
                                    id="serviceNumber"
                                    name="serviceNumber"
                                    value={currentOrder.serviceNumber}
                                    onChange={handleEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="serviceUserName" className="block text-sm font-medium mb-2">
                                    Service User Name
                                </label>
                                <input
                                    type="text"
                                    id="serviceUserName"
                                    name="serviceUserName"
                                    value={currentOrder.serviceUserName}
                                    onChange={handleEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="totalAmount" className="block text-sm font-medium mb-2">
                                    Total Amount
                                </label>
                                <input
                                    type="number"
                                    id="totalAmount"
                                    name="totalAmount"
                                    value={currentOrder.totalAmount}
                                    onChange={handleEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleEditSubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {currentItem.itemId && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-4/5 max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="productId" className="block text-sm font-medium mb-2">
                                    Product ID
                                </label>
                                <input
                                    type="text"
                                    id="productId"
                                    name="productId"
                                    value={currentItem.productId}
                                    onChange={handleItemEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="productName" className="block text-sm font-medium mb-2">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    value={currentItem.productName}
                                    onChange={handleItemEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={currentItem.quantity}
                                    onChange={handleItemEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleItemEditSubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => setCurrentItem({ itemId: null, productId: '', productName: '', quantity: 0 })}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
*/
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEye } from 'react-icons/fa';
// import Navbar from '../components/AccountNavbar';

// function App() {
//     const [orders, setOrders] = useState([]);
//     const [orderItems, setOrderItems] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [isOrderItemsModalOpen, setIsOrderItemsModalOpen] = useState(false);
//     const [currentOrder, setCurrentOrder] = useState({
//         orderId: '',
//         serviceNumber: '',
//         serviceUserName: '',
//         totalAmount: 0,
//     });
//     const [currentItem, setCurrentItem] = useState({
//         itemId: null,
//         productId: '',
//         productName: '',
//         quantity: 0,
//     });
//     const [searchQuery, setSearchQuery] = useState('');

//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(15);

//     useEffect(() => {
//         fetchOrders();
//     }, [searchQuery]); // Fetch orders whenever searchQuery changes

//     const fetchOrders = async () => {
//         try {
//             const response = await axios.get('http://localhost:5255/api/Orders');
//             const filteredOrders = response.data.filter(order => {
//                 return (
//                     order.serviceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     order.serviceUserName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     new Date(order.orderedDate).toLocaleDateString().includes(searchQuery) ||
//                     order.orderId.toLowerCase().includes(searchQuery.toLowerCase())
//                 );
//             });
//             setOrders(filteredOrders);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };

//     const fetchOrderItems = async (orderId) => {
//         try {
//             const response = await axios.get(`http://localhost:5255/api/Orders/${orderId}/items`);
//             setOrderItems(response.data);
//         } catch (error) {
//             console.error('Error fetching order items:', error);
//         }
//     };

//     const handleDelete = async (orderId) => {
//         if (window.confirm('Are you sure you want to delete this order?')) {
//             try {
//                 await axios.delete(`http://localhost:5255/api/Orders/${orderId}`);
//                 setOrders(orders.filter(order => order.orderId !== orderId));
//                 setOrderItems([]);
//                 setIsOrderItemsModalOpen(false);
//             } catch (error) {
//                 console.error('Error deleting order:', error);
//             }
//         }
//     };

//     const handleStatusChange = async (orderId, status) => {
//         try {
//             await axios.put(`http://localhost:5255/api/Orders/updateStatus/${orderId}`, { status });
//             fetchOrders();
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }
//     };

//     const handleEditClick = (order) => {
//         setCurrentOrder(order);
//         setIsEditing(true);
//     };

//     const handleEditChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentOrder(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleEditSubmit = async () => {
//         try {
//             await axios.put(`http://localhost:5255/api/Orders/updateDetails/${currentOrder.orderId}`, {
//                 serviceNumber: currentOrder.serviceNumber,
//                 serviceUserName: currentOrder.serviceUserName,
//                 totalAmount: parseFloat(currentOrder.totalAmount)
//             });
//             setIsEditing(false);
//             fetchOrders();
//         } catch (error) {
//             console.error('Error updating order:', error);
//         }
//     };

//     const handleItemEditClick = (item) => {
//         setCurrentItem(item);
//     };

//     const handleItemEditChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentItem(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleItemEditSubmit = async () => {
//         try {
//             await axios.put(`http://localhost:5255/api/Orders/updateItem/${currentItem.itemId}`, {
//                 productId: currentItem.productId,
//                 name: currentItem.productName,
//                 quantity: parseInt(currentItem.quantity)
//             });
//             fetchOrderItems(currentOrder.orderId);
//             setCurrentItem({ itemId: null, productId: '', productName: '', quantity: 0 });
//         } catch (error) {
//             console.error('Error updating item:', error);
//         }
//     };

//     const handleItemDelete = async (itemId) => {
//         if (window.confirm('Are you sure you want to delete this item?')) {
//             try {
//                 await axios.delete(`http://localhost:5255/api/Orders/deleteItem/${itemId}`);
//                 fetchOrderItems(currentOrder.orderId);
//             } catch (error) {
//                 console.error('Error deleting item:', error);
//             }
//         }
//     };

//     const handleOrderClick = (order) => {
//         fetchOrderItems(order.orderId);
//         setCurrentOrder(order);
//         setIsOrderItemsModalOpen(true);
//     };

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     // Pagination logic
//     const indexOfLastOrder = currentPage * itemsPerPage;
//     const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
//     const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
//     const totalPages = Math.ceil(orders.length / itemsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <>
//         <Navbar/>
//         <div className="container mx-auto p-4">
            
//         <h1 className="text-2xl font-bold mt-20  bg-blue-100 text-blue-600 py-2 px-4 rounded shadow-md">
//             Orders To Be Deducted From Company Employees
//         </h1>

//         <div className="mt-2 mb-3 relative">
//             <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 placeholder="Search by Service Number, User Name, Order Date, or Order ID"
//                 className="border border-gray-300 rounded-full py-2 px-4 w-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//             >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM22 22l-4.35-4.35"
//                 />
//             </svg>
//             </div>

//             <table className="min-w-full bg-gray-300 border border-gray-600 mb-4">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border-b">Order ID</th>
//                         <th className="py-2 px-4 border-b">Service Number</th>
//                         <th className="py-2 px-4 border-b">Service UserName</th>
//                         <th className="py-2 px-4 border-b">Order Date</th>
//                         <th className="py-2 px-4 border-b">Total Amount</th>
//                         <th className="py-2 px-4 border-b">Status</th>
//                         <th className="py-2 px-4 border-b">Actions</th>
//                         <th className="py-2 px-4 border-b">View Items</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentOrders.map((order) => (
//                         <tr key={order.orderId}>
//                             <td className="py-2 px-4 border-b">{order.orderId}</td>
//                             <td className="py-2 px-4 border-b">{order.serviceNumber}</td>
//                             <td className="py-2 px-4 border-b">{order.serviceUserName}</td>
//                             <td className="py-2 px-4 border-b">{new Date(order.orderedDate).toLocaleString()}</td>
//                             <td className="py-2 px-4 border-b">{order.totalAmount.toFixed(2)}</td>
//                             <td className="py-2 px-4 border-b">
//                                 <select
//                                     value={order.status}
//                                     onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
//                                     className="border border-gray-300 rounded p-1"
//                                 >
//                                     <option value="Not Yet Approved">Not Yet Approved</option>
//                                     <option value="Approved">Approved</option>
//                                     <option value="Pending">Pending</option>
                                    
//                                 </select>
//                             </td>
//                             <td className="py-2 px-4 border-b">
//                                 <button
//                                     onClick={() => handleEditClick(order)}
//                                     className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
//                                 >
//                                     Edit
//                                 </button>
//                                 <button
//                                     onClick={() => handleDelete(order.orderId)}
//                                     className="bg-red-500 text-white px-2 py-1 rounded"
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                             <td className="py-2 px-4 border-b text-center">
//                                 <button
//                                     onClick={() => handleOrderClick(order)}
//                                     className="text-blue-500 hover:text-blue-700"
//                                 >
//                                     <FaEye />
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Pagination controls */}
//             <div className="flex justify-between items-center mt-4">
//                 <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className="bg-gray-500 text-white px-4 py-2 rounded"
//                 >
//                     Previous
//                 </button>
//                 <span>Page {currentPage} of {totalPages}</span>
//                 <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className="bg-gray-500 text-white px-4 py-2 rounded"
//                 >
//                     Next
//                 </button>
//             </div>

//             {/* Order Items Modal */}
//             {isOrderItemsModalOpen && (
//                  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//                  <div className="bg-white p-6 rounded shadow-lg w-4/5 max-w-4xl">
//                      <h2 className="text-xl font-bold mb-4">Order Items for {currentOrder.orderId}</h2>
//                      <table className="min-w-full bg-white border border-gray-300 mb-4">
//                         <thead>
//                                 <tr>
//                                     <th className="py-2 px-4 border-b">Item ID</th>
//                                     <th className="py-2 px-4 border-b">Product ID</th>
//                                     <th className="py-2 px-4 border-b">Product Name</th>
//                                     <th className="py-2 px-4 border-b">Quantity</th>
//                                     <th className="py-2 px-4 border-b">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {orderItems.map((item) => (
//                                     <tr key={item.itemId}>
//                                         <td className="py-2 px-4 border-b">{item.itemId}</td>
//                                         <td className="py-2 px-4 border-b">{item.productId}</td>
//                                         <td className="py-2 px-4 border-b">{item.productName}</td>
//                                         <td className="py-2 px-4 border-b">{item.quantity}</td>
//                                         <td className="py-2 px-4 border-b">
//                                             <button
//                                                 onClick={() => handleItemEditClick(item)}
//                                                 className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
//                                             >
//                                                 Edit
//                                             </button>
//                                             <button
//                                                 onClick={() => handleItemDelete(item.itemId)}
//                                                 className="bg-red-500 text-white px-2 py-1 rounded"
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <button
//                             onClick={() => setIsOrderItemsModalOpen(false)}
//                             className="bg-gray-500 text-white px-4 py-2 rounded"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* Edit Order Modal */}
//             {isEditing && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
//                         <h2 className="text-xl font-bold mb-4">Edit Order</h2>
//                         <form onSubmit={handleEditSubmit}>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-1">Service Number:</label>
//                                 <input
//                                     type="text"
//                                     name="serviceNumber"
//                                     value={currentOrder.serviceNumber}
//                                     onChange={handleEditChange}
//                                     className="border border-gray-300 rounded p-2 w-full"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-1">Service UserName:</label>
//                                 <input
//                                     type="text"
//                                     name="serviceUserName"
//                                     value={currentOrder.serviceUserName}
//                                     onChange={handleEditChange}
//                                     className="border border-gray-300 rounded p-2 w-full"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-1">Total Amount:</label>
//                                 <input
//                                     type="number"
//                                     name="totalAmount"
//                                     value={currentOrder.totalAmount}
//                                     onChange={handleEditChange}
//                                     className="border border-gray-300 rounded p-2 w-full"
//                                     step="0.01"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex justify-end">
//                                 <button
//                                     type="submit"
//                                     className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//                                 >
//                                     Save
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() => setIsEditing(false)}
//                                     className="bg-gray-500 text-white px-4 py-2 rounded"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* Edit Item Modal */}
//             {currentItem.itemId && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
//                         <h2 className="text-xl font-bold mb-4">Edit Item</h2>
//                         <form onSubmit={handleItemEditSubmit}>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-1">Product ID:</label>
//                                 <input
//                                     type="text"
//                                     name="productId"
//                                     value={currentItem.productId}
//                                     onChange={handleItemEditChange}
//                                     className="border border-gray-300 rounded p-2 w-full"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-1">Product Name:</label>
//                                 <input
//                                     type="text"
//                                     name="productName"
//                                     value={currentItem.productName}
//                                     onChange={handleItemEditChange}
//                                     className="border border-gray-300 rounded p-2 w-full"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-1">Quantity:</label>
//                                 <input
//                                     type="number"
//                                     name="quantity"
//                                     value={currentItem.quantity}
//                                     onChange={handleItemEditChange}
//                                     className="border border-gray-300 rounded p-2 w-full"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex justify-end">
//                                 <button
//                                     type="submit"
//                                     className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//                                 >
//                                     Save
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() => setCurrentItem({ itemId: null, productId: '', productName: '', quantity: 0 })}
//                                     className="bg-gray-500 text-white px-4 py-2 rounded"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//         </>
//     );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import Navbar from '../components/AccountNavbar';

function App() {
    const [orders, setOrders] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [isOrderItemsModalOpen, setIsOrderItemsModalOpen] = useState(false);
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
    const [searchQuery, setSearchQuery] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        fetchOrders();
    }, [searchQuery]); // Fetch orders whenever searchQuery changes

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5255/api/Orders');
            const filteredOrders = response.data.filter(order => {
                return (
                    order.serviceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    order.serviceUserName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    new Date(order.orderedDate).toLocaleDateString().includes(searchQuery) ||
                    order.orderId.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
            setOrders(filteredOrders);
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
                setOrderItems([]);
                setIsOrderItemsModalOpen(false);
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

    const handleOrderClick = (order) => {
        fetchOrderItems(order.orderId);
        setCurrentOrder(order);
        setIsOrderItemsModalOpen(true);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Pagination logic
    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const totalPages = Math.ceil(orders.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
        <Navbar/>
        <div className="container mx-auto p-4">
            
        <h1 className="text-2xl font-bold mt-20  bg-blue-100 text-blue-600 py-2 px-4 rounded shadow-md">
            Orders To Be Deducted From Company Employees
        </h1>

        <div className="mt-2 mb-3 relative">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by Service Number, User Name, Order Date, or Order ID"
                className="border border-gray-300 rounded-full py-2 px-4 w-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM22 22l-4.35-4.35"
                />
            </svg>
            </div>

            <table className="min-w-full bg-gray-300 border border-gray-600 mb-4">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Order ID</th>
                        <th className="py-2 px-4 border-b">Service Number</th>
                        <th className="py-2 px-4 border-b">Service UserName</th>
                        <th className="py-2 px-4 border-b">Order Date</th>
                        <th className="py-2 px-4 border-b">Total Amount</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                        <th className="py-2 px-4 border-b">View Items</th>
                    </tr>
                </thead>
                <tbody>
                    {currentOrders.map((order) => (
                        <tr key={order.orderId}>
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
                                    <option value="Pending">Pending</option>
                                    
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
                            <td className="py-2 px-4 border-b text-center">
                                <button
                                    onClick={() => handleOrderClick(order)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <FaEye />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination controls */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>

            {/* Order Items Modal */}
            {isOrderItemsModalOpen && (
                 <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                 <div className="bg-white p-6 rounded shadow-lg w-4/5 max-w-4xl">
                     <h2 className="text-xl font-bold mb-4">Order Items for {currentOrder.orderId}</h2>
                     <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Item ID</th>
                                    <th className="py-2 px-4 border-b">Product ID</th>
                                    <th className="py-2 px-4 border-b">Product Name</th>
                                    <th className="py-2 px-4 border-b">Quantity</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderItems.map((item) => (
                                    <tr key={item.itemId}>
                                        <td className="py-2 px-4 border-b">{item.itemId}</td>
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
                        <button
                            onClick={() => setIsOrderItemsModalOpen(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Edit Order Modal */}
            {isEditing && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                        <h2 className="text-xl font-bold mb-4">Edit Order</h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Service Number:</label>
                                <input
                                    type="text"
                                    name="serviceNumber"
                                    value={currentOrder.serviceNumber}
                                    onChange={handleEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Service UserName:</label>
                                <input
                                    type="text"
                                    name="serviceUserName"
                                    value={currentOrder.serviceUserName}
                                    onChange={handleEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Total Amount:</label>
                                <input
                                    type="number"
                                    name="totalAmount"
                                    value={currentOrder.totalAmount}
                                    onChange={handleEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    step="0.01"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Item Modal */}
            {currentItem.itemId && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
                        <form onSubmit={handleItemEditSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Product ID:</label>
                                <input
                                    type="text"
                                    name="productId"
                                    value={currentItem.productId}
                                    onChange={handleItemEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Product Name:</label>
                                <input
                                    type="text"
                                    name="productName"
                                    value={currentItem.productName}
                                    onChange={handleItemEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Quantity:</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={currentItem.quantity}
                                    onChange={handleItemEditChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCurrentItem({ itemId: null, productId: '', productName: '', quantity: 0 })}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default App;

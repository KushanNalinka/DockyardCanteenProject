/*import React, { useState, useEffect, Fragment } from 'react';
import imageProduct1 from '../assets/images/1.png';
import imageProduct2 from '../assets/images/2.png';
import imageProduct3 from '../assets/images/3.png';

const Products = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
        meal: '',
        category: '',
        description: '',
        slug: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    const productdata = [
        {
            id: 1,
            name: 'Hertfoid Upholstered Chair',
            price: 101,
            image: imageProduct1,
            meal: ['Breakfast', 'Lunch', 'Dinner'],
            category: 'Pizza',
            description: 'Mollit anim consectetur adipisicing ',
            slug: 'hertfoid-uphols'
        },
        {
            id: 2,
            name: 'Abingdon Upholstered Chair Swivel',
            price: 151,
            image: imageProduct2,
            meal: ['Breakfast', 'Lunch', 'Dinner'],
            category: 'Fruits',
            description: 'Mollit anim consectetur adipisicing ',
            slug: 'bingdon-pholstere'
        },
        {
            id: 3,
            name: 'Jeses Minimore Modern Style Etta',
            price: 181,
            image: imageProduct3,
            meal: ['Breakfast', 'Lunch', 'Dinner'],
            category: 'Vegie',
            description: 'Mollit anim consectetur adipisicing aute ',
            slug: 'jeses-minimore-'
        }
    ];

    useEffect(() => {
        setData(productdata);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setData(data.map(item => (item.id === form.id ? form : item)));
            setIsEditing(false);
        } else {
            setForm({ ...form, id: data.length + 1 });
            setData([...data, { ...form, id: data.length + 1, meal: form.meal.split(', '), image: form.image || imageProduct1 }]);
        }
        setForm({
            id: '',
            name: '',
            price: '',
            image: '',
            meal: '',
            category: '',
            description: '',
            slug: ''
        });
    };

    const handleEdit = (item) => {
        setForm(item);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setData(data.filter(item => item.id !== id));
        }
    };

    return (
        <Fragment>
            <div className="overflow-x-auto mb-6">
                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="mb-1">Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="price" className="mb-1">Price</label>
                        <input type="number" name="price" value={form.price} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="image" className="mb-1">Image URL</label>
                        <input type="text" name="image" value={form.image} onChange={handleInputChange} className="px-3 py-2 border rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="meal" className="mb-1">Meal</label>
                        <input type="text" name="meal" value={form.meal} onChange={handleInputChange} className="px-3 py-2 border rounded" placeholder="Breakfast, Lunch, Dinner" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="category" className="mb-1">Category</label>
                        <input type="text" name="category" value={form.category} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className="mb-1">Description</label>
                        <textarea name="description" value={form.description} onChange={handleInputChange} className="px-3 py-2 border rounded" required></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="slug" className="mb-1">Slug</label>
                        <input type="text" name="slug" value={form.slug} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">{isEditing ? 'Update' : 'Add'} Product</button>
                </form>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data && data.length > 0 ? 
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.meal.join(', ')}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <img src={item.image} alt={item.name} className="h-10 w-10 object-cover rounded-full" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.slug}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleEdit(item)}>Edit</button>
                                        <button className="ml-4 text-red-600 hover:text-red-900" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                            : 
                            <tr>
                                <td colSpan="10" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Loading...</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default Products;*/
/*import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import imageProduct1 from '../assets/images/1.png';

const Products = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
        meal: '',
        category: '',
        description: '',
        slug: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    const apiBaseUrl = 'http://localhost:5255/api/Product';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(apiBaseUrl);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            ...form,
            meal: form.meal.split(',').map(item => item.trim()) // Ensure meal is an array
        };
        if (isEditing) {
            try {
                await axios.put(`${apiBaseUrl}/${form.id}`, formData);
                setData(data.map(item => (item.id === form.id ? formData : item)));
                setIsEditing(false);
            } catch (error) {
                console.error('Error updating product:', error);
            }
        } else {
            try {
                const response = await axios.post(apiBaseUrl, { ...formData, image: form.image || imageProduct1 });
                setData([...data, response.data]);
            } catch (error) {
                console.error('Error adding product:', error);
            }
        }
        resetForm();
    };

    const handleEdit = (item) => {
        setForm(item);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`${apiBaseUrl}/${id}`);
                setData(data.filter(item => item.id !== id));
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    const resetForm = () => {
        setForm({
            id: '',
            name: '',
            price: '',
            image: '',
            meal: '',
            category: '',
            description: '',
            slug: ''
        });
    };

    return (
        <Fragment>
            <div className="overflow-x-auto mb-6">
                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="mb-1">Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="price" className="mb-1">Price</label>
                        <input type="number" name="price" value={form.price} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="image" className="mb-1">Image URL</label>
                        <input type="text" name="image" value={form.image} onChange={handleInputChange} className="px-3 py-2 border rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="meal" className="mb-1">Meal</label>
                        <input type="text" name="meal" value={form.meal} onChange={handleInputChange} className="px-3 py-2 border rounded" placeholder="Breakfast, Lunch, Dinner" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="category" className="mb-1">Category</label>
                        <input type="text" name="category" value={form.category} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className="mb-1">Description</label>
                        <textarea name="description" value={form.description} onChange={handleInputChange} className="px-3 py-2 border rounded" required></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="slug" className="mb-1">Slug</label>
                        <input type="text" name="slug" value={form.slug} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">{isEditing ? 'Update' : 'Add'} Product</button>
                </form>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data && data.length > 0 ? 
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Array.isArray(item.meal) ? item.meal.join(', ') : item.meal}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <img src={item.image} alt={item.name} className="h-10 w-10 object-cover rounded-full" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.slug}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleEdit(item)}>Edit</button>
                                        <button className="ml-4 text-red-600 hover:text-red-900" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                            : 
                            <tr>
                                <td colSpan="10" className="px-6 py-4 text-center text-sm text-gray-500">No products found</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default Products;*/
/*import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import imageProduct1 from '../assets/images/1.png';

const Products = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
        meal: '',
        category: '',
        description: '',
        slug: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    
    const apiBaseUrl = 'http://localhost:5255/api/Product';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(apiBaseUrl);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            ...form,
            meal: form.meal.split(',').map(item => item.trim()) // Ensure meal is an array
        };
        try {
            if (isEditing) {
                await axios.put(`${apiBaseUrl}/${form.id}`, formData);
                setData(data.map(item => (item.id === form.id ? formData : item)));
                setMessage('Product updated successfully!');
            } else {
                const response = await axios.post(apiBaseUrl, { ...formData, image: form.image || imageProduct1 });
                setData([...data, response.data]);
                setMessage('Product added successfully!');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while processing your request.');
        }
        resetForm();
        setShowModal(false);
    };

    const handleEdit = (item) => {
        setForm(item);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`${apiBaseUrl}/${id}`);
                setData(data.filter(item => item.id !== id));
                setMessage('Product deleted successfully!');
            } catch (error) {
                console.error('Error deleting product:', error);
                setMessage('An error occurred while deleting the product.');
            }
        }
    };

    const resetForm = () => {
        setForm({
            id: '',
            name: '',
            price: '',
            image: '',
            meal: '',
            category: '',
            description: '',
            slug: ''
        });
        setIsEditing(false);
    };

    return (
        <Fragment>
            <div className="overflow-x-auto mb-6">
                <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-green-500 text-white rounded">Add Product</button>
                <table className="min-w-full divide-y divide-gray-200 mt-6">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data && data.length > 0 ? 
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Array.isArray(item.meal) ? item.meal.join(', ') : item.meal}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.slug}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                                        <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))
                        : (
                            <tr>
                                <td colSpan="10" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-1/2">
                        <h2 className="text-lg font-bold mb-4">{isEditing ? 'Edit Product' : 'Add Product'}</h2>
                        {message && <p className="mb-4 text-green-600">{message}</p>}
                        <form onSubmit={handleSubmit}>
                            {isEditing && (
                                <div className="flex flex-col mb-4">
                                    <label htmlFor="id" className="mb-1">ID</label>
                                    <input type="text" name="id" value={form.id} className="px-3 py-2 border rounded" disabled />
                                </div>
                            )}
                            <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="mb-1">Name</label>
                                <input type="text" name="name" value={form.name} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="price" className="mb-1">Price</label>
                                <input type="number" name="price" value={form.price} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="image" className="mb-1">Image URL</label>
                                <input type="text" name="image" value={form.image} onChange={handleInputChange} className="px-3 py-2 border rounded" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="meal" className="mb-1">Meal</label>
                                <input type="text" name="meal" value={form.meal} onChange={handleInputChange} className="px-3 py-2 border rounded" placeholder="Breakfast, Lunch, Dinner" required />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="category" className="mb-1">Category</label>
                                <input type="text" name="category" value={form.category} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="description" className="mb-1">Description</label>
                                <textarea name="description" value={form.description} onChange={handleInputChange} className="px-3 py-2 border rounded" required></textarea>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="slug" className="mb-1">Slug</label>
                                <input type="text" name="slug" value={form.slug} onChange={handleInputChange} className="px-3 py-2 border rounded" required />
                            </div>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">{isEditing ? 'Update' : 'Add'} Product</button>
                            <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded ml-2">Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Products;*/
/*import axios from 'axios';
import { useEffect, useState } from 'react';

function Product() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState('');
  const [slug, setSlug] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [products, setProducts] = useState([]);

  const baseUri = 'http://localhost:5255/api/Product';

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(baseUri);
      setProducts(result.data);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post(baseUri, {
        id: id, // Include id for proper handling
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        category: category,
        meal: meal,
        slug: slug,
        imageUrl: imageUrl
      });
      alert('Product Registration Successful');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Registration Failed');
      console.error('Error saving product:', err);
    }
  }

  async function editProduct(product) {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setDescription(product.description);
    setCategory(product.category);
    setMeal(product.meal);
    setSlug(product.slug);
    setImageUrl(product.imageUrl);
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(`${baseUri}/${productId}`);
      alert('Product deleted successfully');
      Load();
    } catch (err) {
      alert('Product deletion failed');
      console.error('Error deleting product:', err);
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(`${baseUri}/${id}`, {
        id: id, // Include id for proper handling
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        category: category,
        meal: meal,
        slug: slug,
        imageUrl: imageUrl
      });
      alert('Product Updated Successfully');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Update Failed');
      console.error('Error updating product:', err);
    }
  }

  function resetForm() {
    setId('');
    setName('');
    setPrice(0);
    setQuantity(0);
    setDescription('');
    setCategory('');
    setMeal('');
    setSlug('');
    setImageUrl('');
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Meal</label>
            <input
              type="text"
              className="form-control"
              id="meal"
              value={meal}
              onChange={(event) => setMeal(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>Register</button>
            <button className="btn btn-warning mt-4" onClick={update}>Update</button>
          </div>
        </form>
      </div>
      <br />
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Meal</th>
            <th scope="col">Slug</th>
            <th scope="col">Image URL</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.meal}</td>
              <td>{product.slug}</td>
              <td>{product.imageUrl}</td>
              <td>
                <button type="button" className="btn btn-warning" onClick={() => editProduct(product)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;*/
/*import axios from 'axios';
import { useEffect, useState } from 'react';

function Product() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState('');
  const [slug, setSlug] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [products, setProducts] = useState([]);

  const baseUri = 'http://localhost:5255/api/Product';

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(baseUri);
      setProducts(result.data);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post(baseUri, {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        category: category,
        meal: meal,
        slug: slug,
        imageUrl: imageUrl
      });
      alert('Product Registration Successful');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Registration Failed');
      console.error('Error saving product:', err);
    }
  }

  async function editProduct(product) {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setDescription(product.description);
    setCategory(product.category);
    setMeal(product.meal);
    setSlug(product.slug);
    setImageUrl(product.imageUrl);
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(`${baseUri}/${productId}`);
      alert('Product deleted successfully');
      Load();
    } catch (err) {
      alert('Product deletion failed');
      console.error('Error deleting product:', err);
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(`${baseUri}/${id}`, {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        category: category,
        meal: meal,
        slug: slug,
        imageUrl: imageUrl
      });
      alert('Product Updated Successfully');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Update Failed');
      console.error('Error updating product:', err);
    }
  }

  function resetForm() {
    setId('');
    setName('');
    setPrice(0);
    setQuantity(0);
    setDescription('');
    setCategory('');
    setMeal('');
    setSlug('');
    setImageUrl('');
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Meal</label>
            <input
              type="text"
              className="form-control"
              id="meal"
              value={meal}
              onChange={(event) => setMeal(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>Register</button>
            <button className="btn btn-warning mt-4" onClick={update}>Update</button>
          </div>
        </form>
      </div>
      <br />
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Meal</th>
            <th scope="col">Slug</th>
            <th scope="col">Image URL</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.meal}</td>
              <td>{product.slug}</td>
              <td>{product.imageUrl}</td>
              <td>
                <button type="button" className="btn btn-warning" onClick={() => editProduct(product)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;*/
// finalized
/*import axios from 'axios';
import { useEffect, useState } from 'react';

function Product() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState('');
  const [slug, setSlug] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const baseUri = 'http://localhost:5255/api/Product';

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(baseUri);
      setProducts(result.data);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post(baseUri, {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        category: category,
        meal: meal,
        slug: slug,
        imageUrl: imageUrl
      });
      alert('Product Registration Successful');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Registration Failed');
      console.error('Error saving product:', err);
    }
  }

  async function editProduct(product) {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setDescription(product.description);
    setCategory(product.category);
    setMeal(product.meal);
    setSlug(product.slug);
    setImageUrl(product.imageUrl);
    setIsEditing(true);
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(`${baseUri}/${productId}`);
      alert('Product deleted successfully');
      Load();
    } catch (err) {
      alert('Product deletion failed');
      console.error('Error deleting product:', err);
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(`${baseUri}/${id}`, {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        category: category,
        meal: meal,
        slug: slug,
        imageUrl: imageUrl
      });
      alert('Product Updated Successfully');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Update Failed');
      console.error('Error updating product:', err);
    }
  }

  function resetForm() {
    setId('');
    setName('');
    setPrice(0);
    setQuantity(0);
    setDescription('');
    setCategory('');
    setMeal('');
    setSlug('');
    setImageUrl('');
    setIsEditing(false);
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              disabled={isEditing}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Meal</label>
            <input
              type="text"
              className="form-control"
              id="meal"
              value={meal}
              onChange={(event) => setMeal(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save} disabled={isEditing}>Register</button>
            <button className="btn btn-warning mt-4" onClick={update} disabled={!isEditing}>Update</button>
          </div>
        </form>
      </div>
      <br />
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Meal</th>
            <th scope="col">Slug</th>
            <th scope="col">Image URL</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.meal}</td>
              <td>{product.slug}</td>
              <td>{product.imageUrl}</td>
              <td>
                <button type="button" className="btn btn-warning" onClick={() => editProduct(product)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
*/
//image url use seen


/*import axios from 'axios';
import { useEffect, useState } from 'react';

function Product() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState('');
  const [slug, setSlug] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const baseUri = 'http://localhost:5255/api/Product';

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(baseUri);
      setProducts(result.data);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('meal', meal);
      formData.append('slug', slug);
      if (imageFile) {
        formData.append('imageFile', imageFile);
      }
  
      console.log('Sending data:', formData);
  
      const response = await axios.post(baseUri, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Response:', response);
  
      alert('Product Registration Successful');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Registration Failed');
      console.error('Error saving product:', err.response ? err.response.data : err);
    }
  }
  

  async function update(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('meal', meal);
      formData.append('slug', slug);
      if (imageFile) {
        formData.append('imageFile', imageFile);
      }

      await axios.put(`${baseUri}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product Updated Successfully');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Update Failed');
      console.error('Error updating product:', err);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${baseUri}/${id}`);
      alert('Product Deleted Successfully');
      Load(); // Refresh the product list
    } catch (err) {
      alert('Product Deletion Failed');
      console.error('Error deleting product:', err);
    }
  }

  function editProduct(product) {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setDescription(product.description);
    setCategory(product.category);
    setMeal(product.meal);
    setSlug(product.slug);
    setImageFile(null); // Assuming you want to reset the image file
    setIsEditing(true);
  }

  function resetForm() {
    setId('');
    setName('');
    setPrice(0);
    setQuantity(0);
    setDescription('');
    setCategory('');
    setMeal('');
    setSlug('');
    setImageFile(null);
    setIsEditing(false);
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div className="container mt-4">
        <form>
          
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              disabled={isEditing}
              required
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Meal</label>
            <input
              type="text"
              className="form-control"
              id="meal"
              value={meal}
              onChange={(event) => setMeal(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              id="imageFile"
              onChange={(event) => setImageFile(event.target.files[0])}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save} disabled={isEditing}>
              Register
            </button>
            <button className="btn btn-warning mt-4" onClick={update} disabled={!isEditing}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br />
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Meal</th>
            <th scope="col">Slug</th>
            <th scope="col">Image URL</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.meal}</td>
              <td>{product.slug}</td>
              <td>
                <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
*/
//work with uploaded images
/*import axios from 'axios';
import { useEffect, useState } from 'react';

function Product() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState('');
  const [slug, setSlug] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const baseUri = 'http://localhost:5255/api/Product';

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(baseUri);
      setProducts(result.data);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('meal', meal);
      formData.append('slug', slug);
      if (imageFile) {
        formData.append('imageFile', imageFile);
      }

      const response = await axios.post(baseUri, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImageUrl(response.data.imageUrl);
      alert('Product Registration Successful');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Registration Failed');
      console.error('Error saving product:', err.response ? err.response.data : err);
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('meal', meal);
      formData.append('slug', slug);
      if (imageFile) {
        formData.append('imageFile', imageFile);
      } else {
        formData.append('imageUrl', imageUrl);
      }

      await axios.put(`${baseUri}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product Updated Successfully');
      resetForm();
      Load();
    } catch (err) {
      alert('Product Update Failed');
      console.error('Error updating product:', err);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${baseUri}/${id}`);
      alert('Product Deleted Successfully');
      Load(); // Refresh the product list
    } catch (err) {
      alert('Product Deletion Failed');
      console.error('Error deleting product:', err);
    }
  }

  function editProduct(product) {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setDescription(product.description);
    setCategory(product.category);
    setMeal(product.meal);
    setSlug(product.slug);
    setImageUrl(product.imageUrl);
    setImageFile(null); // Reset the image file
    setIsEditing(true);
  }

  function resetForm() {
    setId('');
    setName('');
    setPrice(0);
    setQuantity(0);
    setDescription('');
    setCategory('');
    setMeal('');
    setSlug('');
    setImageFile(null);
    setImageUrl('');
    setIsEditing(false);
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              disabled={isEditing}
              required
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Meal</label>
            <input
              type="text"
              className="form-control"
              id="meal"
              value={meal}
              onChange={(event) => setMeal(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              id="imageFile"
              onChange={(event) => setImageFile(event.target.files[0])}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save} disabled={isEditing}>
              Register
            </button>
            <button className="btn btn-warning mt-4" onClick={update} disabled={!isEditing}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br />
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Meal</th>
            <th scope="col">Slug</th>
            <th scope="col">Image</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.meal}</td>
              <td>{product.slug}</td>
              <td>
                {product.imageUrl && (
                  <img src={`http://localhost:5255/${product.imageUrl}`} alt={product.name} style={{ width: '100px' }} />
                )}
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;*/
// this is work fine for image upload in to the server and get url thing
import axios from 'axios';
import { useEffect, useState } from 'react';

function Product() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState('');
  const [slug, setSlug] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const baseUri = 'http://localhost:5255/api/Product';

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(baseUri);
      setProducts(result.data);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      // Ensure all fields are populated correctly
      if (!name || !price || !quantity || !category || !slug) {
        alert('Please fill in all required fields.');
        return;
      }

      const formData = new FormData();
      formData.append('id', id);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('meal', meal);
      formData.append('slug', slug);

      // Check if an image file is provided for a new product
      if (imageFile) {
        formData.append('imageFile', imageFile);
      } else {
        alert('Please upload an image.');
        return;
      }

      const response = await axios.post(baseUri, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImageUrl(response.data.imageUrl);
      alert('Product Registration Successful');
      resetForm();
      Load();
    } catch (err) {
      if (err.response) {
        console.error('Error saving product:', err.response.data);
        alert(`Error: ${err.response.data.title || 'Product Registration Failed'}`);
      } else {
        console.error('Error saving product:', err);
        alert('Product Registration Failed');
      }
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('meal', meal);
      formData.append('slug', slug);

      if (imageFile) {
        // If a new image is being uploaded
        formData.append('imageFile', imageFile);
      } else if (imageUrl) {
        // Use existing image URL if updating without a new image
        formData.append('imageUrl', imageUrl);
      } else {
        // Validation error if neither file nor URL is provided
        alert('Please upload an image or provide an existing image URL.');
        return;
      }

      await axios.put(`${baseUri}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Product Updated Successfully');
      resetForm();
      Load();
    } catch (err) {
      if (err.response) {
        console.error('Error updating product:', err.response.data);
        alert(`Error: ${err.response.data.title || 'Product Update Failed'}`);
      } else {
        console.error('Error updating product:', err);
        alert('Product Update Failed');
      }
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${baseUri}/${id}`);
      alert('Product Deleted Successfully');
      Load(); // Refresh the product list
    } catch (err) {
      alert('Product Deletion Failed');
      console.error('Error deleting product:', err);
    }
  }

  function editProduct(product) {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setDescription(product.description);
    setCategory(product.category);
    setMeal(product.meal);
    setSlug(product.slug);
    setImageUrl(product.imageUrl);
    setImageFile(null); // Reset the image file
    setIsEditing(true);
  }

  function resetForm() {
    setId('');
    setName('');
    setPrice(0);
    setQuantity(0);
    setDescription('');
    setCategory('');
    setMeal('');
    setSlug('');
    setImageFile(null);
    setImageUrl('');
    setIsEditing(false);
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              required
              disabled={isEditing}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Meal</label>
            <input
              type="text"
              className="form-control"
              id="meal"
              value={meal}
              onChange={(event) => setMeal(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              id="imageFile"
              onChange={(event) => setImageFile(event.target.files[0])}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save} disabled={isEditing}>
              Register
            </button>
            <button className="btn btn-warning mt-4" onClick={update} disabled={!isEditing}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br />
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Meal</th>
            <th scope="col">Slug</th>
            <th scope="col">Image</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.meal}</td>
              <td>{product.slug}</td>
              <td>
                {product.imageUrl && (
                  <img src={`http://localhost:5255/${product.imageUrl}`} alt={product.name} style={{ width: '100px' }} />
                )}
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Product() {
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState(0);
//   const [quantity, setQuantity] = useState(0);
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [meal, setMeal] = useState('');
//   const [slug, setSlug] = useState('');
//   const [imageFile, setImageFile] = useState(null); // Keep the file object
//   const [products, setProducts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);

//   const baseUri = 'http://localhost:5255/api/Product';

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const result = await axios.get(baseUri);
//       setProducts(result.data);
//     } catch (err) {
//       console.error('Error loading products:', err);
//     }
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setImageFile(file);
//   };

//   const resetForm = () => {
//     setId('');
//     setName('');
//     setPrice(0);
//     setQuantity(0);
//     setDescription('');
//     setCategory('');
//     setMeal('');
//     setSlug('');
//     setImageFile(null);
//     setIsEditing(false);
//   };

//  /* const saveProduct = async (event) => {
//     event.preventDefault();
//     try {
//       if (!name || !price || !quantity || !category || !slug || !imageFile) {
//         alert('Please fill in all required fields and upload an image.');
//         return;
//       }

//       // Create a FormData object to send data as multipart/form-data
//       const formData = new FormData();
//       formData.append('Id', id);
//       formData.append('Name', name);
//       formData.append('Price', price);
//       formData.append('Quantity', quantity);
//       formData.append('Description', description);
//       formData.append('Category', category);
//       formData.append('Meal', meal);
//       formData.append('Slug', slug);
//       formData.append('ImageFile', imageFile);

//       // Send the request with formData
//       const response = await axios.post(baseUri, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('Product Registration Successful');
//       resetForm();
//       loadProducts();
//     } catch (err) {
//       if (err.response) {
//         console.error('Error saving product:', err.response.data);
//         alert(`Error: ${err.response.data.title || 'Product Registration Failed'}`);
//       } else {
//         console.error('Error saving product:', err);
//         alert('Product Registration Failed');
//       }
//     }
//   };*/
//   const saveProduct = async (event) => {
//     event.preventDefault();
//     try {
//         if (!name || !price || !quantity || !category || !slug || !imageFile) {
//             alert('Please fill in all required fields and upload an image.');
//             return;
//         }

//         // Create FormData object
//         const formData = new FormData();
//         formData.append('Id', id);
//         formData.append('Name', name);
//         formData.append('Price', price);
//         formData.append('Quantity', quantity);
//         formData.append('Description', description);
//         formData.append('Category', category);
//         formData.append('Meal', meal);
//         formData.append('Slug', slug);
//         formData.append('ImageFile', imageFile); // This should match your backend's expected name

//         // Send request
//         const response = await axios.post(baseUri, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         alert('Product Registration Successful');
//         resetForm();
//         loadProducts();
//     } catch (err) {
//         if (err.response) {
//             console.error('Error saving product:', err.response.data);
//             alert(`Error: ${err.response.data.title || 'Product Registration Failed'}`);
//         } else {
//             console.error('Error saving product:', err);
//             alert('Product Registration Failed');
//         }
//     }
// };


//   const updateProduct = async (event) => {
//     event.preventDefault();
//     try {
//       if (!name || !price || !quantity || !category || !slug) {
//         alert('Please fill in all required fields.');
//         return;
//       }

//       // Create a FormData object to update data
//       const formData = new FormData();
//       formData.append('Id', id);
//       formData.append('Name', name);
//       formData.append('Price', price);
//       formData.append('Quantity', quantity);
//       formData.append('Description', description);
//       formData.append('Category', category);
//       formData.append('Meal', meal);
//       formData.append('Slug', slug);

//       // Check if there's a new image file
//       if (imageFile) {
//         formData.append('ImageFile', imageFile);
//       }

//       await axios.put(`${baseUri}/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('Product Updated Successfully');
//       resetForm();
//       loadProducts();
//     } catch (err) {
//       if (err.response) {
//         console.error('Error updating product:', err.response.data);
//         alert(`Error: ${err.response.data.title || 'Product Update Failed'}`);
//       } else {
//         console.error('Error updating product:', err);
//         alert('Product Update Failed');
//       }
//     }
//   };

//   const deleteProduct = async (productId) => {
//     try {
//       await axios.delete(`${baseUri}/${productId}`);
//       alert('Product Deleted Successfully');
//       loadProducts(); // Refresh the product list
//     } catch (err) {
//       alert('Product Deletion Failed');
//       console.error('Error deleting product:', err);
//     }
//   };

//   const editProduct = (product) => {
//     setId(product.id);
//     setName(product.name);
//     setPrice(product.price);
//     setQuantity(product.quantity);
//     setDescription(product.description);
//     setCategory(product.category);
//     setMeal(product.meal);
//     setSlug(product.slug);
//     setIsEditing(true);
//   };

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <div className="container mt-4">
//         <form>
//           <div className="form-group">
//             <label>ID</label>
//             <input
//               type="text"
//               className="form-control"
//               id="id"
//               value={id}
//               onChange={(event) => setId(event.target.value)}
//               required
//               disabled={isEditing}
//             />
//           </div>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Price</label>
//             <input
//               type="number"
//               className="form-control"
//               id="price"
//               value={price}
//               onChange={(event) => setPrice(Number(event.target.value))}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Quantity</label>
//             <input
//               type="number"
//               className="form-control"
//               id="quantity"
//               value={quantity}
//               onChange={(event) => setQuantity(Number(event.target.value))}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Description</label>
//             <input
//               type="text"
//               className="form-control"
//               id="description"
//               value={description}
//               onChange={(event) => setDescription(event.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Category</label>
//             <input
//               type="text"
//               className="form-control"
//               id="category"
//               value={category}
//               onChange={(event) => setCategory(event.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Meal</label>
//             <input
//               type="text"
//               className="form-control"
//               id="meal"
//               value={meal}
//               onChange={(event) => setMeal(event.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Slug</label>
//             <input
//               type="text"
//               className="form-control"
//               id="slug"
//               value={slug}
//               onChange={(event) => setSlug(event.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Image</label>
//             <input
//               type="file"
//               className="form-control"
//               id="imageFile"
//               onChange={handleImageChange}
//               required={!isEditing} // Required only when not editing
//             />
//           </div>
//           <div>
//             <button className="btn btn-primary mt-4" onClick={saveProduct} disabled={isEditing}>
//               Register
//             </button>
//             <button className="btn btn-warning mt-4" onClick={updateProduct} disabled={!isEditing}>
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//       <br />
//       <table className="table table-dark" align="center">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Name</th>
//             <th scope="col">Price</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Description</th>
//             <th scope="col">Category</th>
//             <th scope="col">Meal</th>
//             <th scope="col">Slug</th>
//             <th scope="col">Image</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>{product.quantity}</td>
//               <td>{product.description}</td>
//               <td>{product.category}</td>
//               <td>{product.meal}</td>
//               <td>{product.slug}</td>
//               <td>
//                 {product.imageData && (
//                   <img
//                     src={`data:image/jpeg;base64,${product.imageData}`}
//                     alt={product.name}
//                     style={{ width: '100px', height: '100px' }}
//                   />
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => editProduct(product)} className="btn btn-warning">
//                   Edit
//                 </button>
//                 <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Product;

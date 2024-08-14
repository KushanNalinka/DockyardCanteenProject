/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Food from './Food';

const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [currentFood, setCurrentFood] = useState(null);

    useEffect(() => {
        fetchFoods();
    }, []);

    const apiUrl = 'http://localhost:5255/api/Foods';

    const fetchFoods = () => {
        axios.get(apiUrl)
            .then(res => setFoodList(res.data))
            .catch(err => console.error(err));
    };

    const createFood = (formData) => {
        axios.post(`${apiUrl}`, formData)
            .then(() => {
                fetchFoods();
                setCurrentFood(null);
            })
            .catch(err => {
                console.error('Error creating food:', err.response ? err.response.data : err.message);
            });
    };

    const updateFood = (id, formData) => {
        axios.put(`${apiUrl}/${id}`, formData)
            .then(() => {
                fetchFoods();
                setCurrentFood(null);
            })
            .catch(err => {
                console.error('Error creating food:', err.response ? err.response.data : err.message);
            });
    };

    const deleteFood = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            axios.delete(`${apiUrl}/${id}`)
                .then(() => fetchFoods())
                .catch(err => console.error(err));
        }
    };

    const handleFormSubmit = (formData, resetForm) => {
        if (currentFood) {
            updateFood(currentFood.id, formData);
        } else {
            createFood(formData);
        }
        resetForm();
    };

    const handleEdit = (food) => {
        setCurrentFood(food);
    };

    const handleDelete = (id) => {
        deleteFood(id);
    };

    const displayFoodTable = () => (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Meal</th>
                    <th>Slug</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {foodList.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.price}</td>
                        <td>{food.quantity}</td>
                        <td>{food.description}</td>
                        <td>{food.category}</td>
                        <td>{food.meal}</td>
                        <td>{food.slug}</td>
                        <td><img src={food.imageSrc} alt="food" width="50" /></td>
                        <td>
                            <button onClick={() => handleEdit(food)}>Edit</button>
                            <button onClick={() => handleDelete(food.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="container">
            <Food addOrEdit={handleFormSubmit} food={currentFood} />
            {displayFoodTable()}
        </div>
    );
};

export default FoodList;*/
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Food from './Food';

const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [currentFood, setCurrentFood] = useState(null);

    useEffect(() => {
        fetchFoods();
    }, []);

    const apiUrl = 'http://localhost:5255/api/Foods';

    const fetchFoods = () => {
        axios.get(apiUrl)
            .then(res => setFoodList(res.data))
            .catch(err => console.error(err));
    };

    const createFood = (formData) => {
        axios.post(`${apiUrl}`, formData)
            .then(() => {
                fetchFoods();
                setCurrentFood(null);
            })
            .catch(err => {
                console.error('Error creating food:', err.response ? err.response.data : err.message);
            });
    };

    const updateFood = (id, formData) => {
        axios.put(`${apiUrl}/${id}`, formData)
            .then(() => {
                fetchFoods();
                setCurrentFood(null);
            })
            .catch(err => {
                console.error('Error creating food:', err.response ? err.response.data : err.message);
            });
    };

    const deleteFood = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            axios.delete(`${apiUrl}/${id}`)
                .then(() => fetchFoods())
                .catch(err => console.error(err));
        }
    };

    const handleFormSubmit = (formData, resetForm) => {
        if (currentFood) {
            updateFood(currentFood.id, formData);
        } else {
            createFood(formData);
        }
        resetForm();
    };

    const handleEdit = (food) => {
        setCurrentFood(food);
    };

    const handleDelete = (id) => {
        deleteFood(id);
    };

    const displayFoodTable = () => (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Meal</th>
                    <th>Slug</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {foodList.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.price}</td>
                        <td>{food.quantity}</td>
                        <td>{food.description}</td>
                        <td>{food.category}</td>
                        <td>{food.meal}</td>
                        <td>{food.slug}</td>
                        <td><img src={food.imageSrc} alt="food" width="50" /></td>
                        <td>
                            <button onClick={() => handleEdit(food)}>Edit</button>
                            <button onClick={() => handleDelete(food.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="container">
            <Food addOrEdit={handleFormSubmit} food={currentFood} />
            {displayFoodTable()}
        </div>
    );
};

export default FoodList;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Food from './Food';
import { FaPlus } from 'react-icons/fa'; // Import Plus Icon from react-icons
import Navbar from './FoodNavBar'; // Import the Navbar component

const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [currentFood, setCurrentFood] = useState(null);
    const [showForm, setShowForm] = useState(false); // State to handle form visibility

    useEffect(() => {
        fetchFoods();
    }, []);

    const apiUrl = 'http://localhost:5255/api/Foods';

    const fetchFoods = () => {
        axios.get(apiUrl)
            .then(res => setFoodList(res.data))
            .catch(err => console.error(err));
    };

    const createFood = (formData) => {
        axios.post(apiUrl, formData)
            .then(() => {
                fetchFoods();
                setCurrentFood(null);
                setShowForm(false);
            })
            .catch(err => {
                console.error('Error creating food:', err.response ? err.response.data : err.message);
            });
    };

    const updateFood = (id, formData) => {
        axios.put(`${apiUrl}/${id}`, formData)
            .then(() => {
                fetchFoods();
                setCurrentFood(null);
                setShowForm(false);
            })
            .catch(err => {
                console.error('Error updating food:', err.response ? err.response.data : err.message);
            });
    };

    const deleteFood = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            axios.delete(`${apiUrl}/${id}`)
                .then(() => fetchFoods())
                .catch(err => console.error(err));
        }
    };

    const handleFormSubmit = (formData, resetForm) => {
        if (currentFood) {
            updateFood(currentFood.id, formData);
        } else {
            createFood(formData);
        }
        resetForm();
    };

    const handleEdit = (food) => {
        setCurrentFood(food);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        deleteFood(id);
    };

    const handleAddNew = () => {
        setCurrentFood(null);
        setShowForm(true);
    };

    const displayFoodTable = () => (
        <table className="min-w-full bg-light-blue shadow-lg rounded-lg overflow-hidden mt-5">
            <thead className="bg-yellow-500 text-blue-500">
                <tr>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Price</th>
                    <th className="py-3 px-6 text-left">Quantity</th>
                    <th className="py-3 px-6 text-left">Description</th>
                    <th className="py-3 px-6 text-left">Category</th>
                    <th className="py-3 px-6 text-left">Meal</th>
                    <th className="py-3 px-6 text-left">Slug</th>
                    <th className="py-3 px-6 text-left">Image</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody className="text-blue-500">
                {foodList.map(food => (
                    <tr key={food.id} className="hover:bg-ash">
                        <td className="py-3 px-6">{food.name}</td>
                        <td className="py-3 px-6">{food.price}</td>
                        <td className="py-3 px-6">{food.quantity}</td>
                        <td className="py-3 px-6">{food.description}</td>
                        <td className="py-3 px-6">{food.category}</td>
                        <td className="py-3 px-6">{food.meal}</td>
                        <td className="py-3 px-6">{food.slug}</td>
                        <td className="py-3 px-6">
                            <img src={food.imageSrc} alt="food" className="w-24 h-24 rounded-lg object-cover" />
                        </td>
                        <td className="py-3 px-6 text-center">
                            <button onClick={() => handleEdit(food)} className="bg-yellow-500 text-white py-1 px-3 rounded mr-2 hover:bg-yellow-600">Edit</button>
                            <button onClick={() => handleDelete(food.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="container mx-auto px-4 bg-light-blue min-h-screen">
            <Navbar />
            <div className="flex justify-end mb-5">
                <button onClick={handleAddNew} className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
                    <FaPlus size={30} />
                </button>
            </div>
            {showForm && (
                <Food
                    addOrEdit={handleFormSubmit}
                    food={currentFood}
                    closeForm={() => setShowForm(false)}
                />
            )}
            {displayFoodTable()}
        </div>
    );
};

export default FoodList;

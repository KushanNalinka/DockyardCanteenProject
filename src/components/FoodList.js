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
import React, { useState, useEffect } from 'react';
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


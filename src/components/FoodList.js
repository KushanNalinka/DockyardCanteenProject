
/*import React, { useState, useEffect } from 'react';
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
            <thead className="bg-gray-300 text-blue-500">
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
        <>
          <Navbar />
        <div className="container mx-auto px-4 bg-light-blue mt-24 min-h-screen relative">
          
            {showForm && (
                <Food
                    addOrEdit={handleFormSubmit}
                    food={currentFood}
                    closeForm={() => setShowForm(false)}
                />
            )}
            {displayFoodTable()}
            <button 
                onClick={handleAddNew} 
                className="bg-blue-500 text-white p-8 rounded-full shadow-lg hover:bg-blue-700 fixed bottom-5 right-5"
            >
                <FaPlus size={30} />
            </button>
        </div>
        </>
    );
};

export default FoodList;*/
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Food from './Food';
// import { FaPlus } from 'react-icons/fa'; // Import Plus Icon from react-icons
// import Navbar from './FoodNavBar'; // Import the Navbar component

// const FoodList = () => {
//     const [foodList, setFoodList] = useState([]);
//     const [currentFood, setCurrentFood] = useState(null);
//     const [showForm, setShowForm] = useState(false); // State to handle form visibility
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 4; // Maximum 5 records per page

//     useEffect(() => {
//         fetchFoods();
//     }, []);

//     const apiUrl = 'http://localhost:5255/api/Foods';

//     const fetchFoods = () => {
//         axios.get(apiUrl)
//             .then(res => setFoodList(res.data))
//             .catch(err => console.error(err));
//     };

//     const createFood = (formData) => {
//         axios.post(apiUrl, formData)
//             .then(() => {
//                 fetchFoods();
//                 setCurrentFood(null);
//                 setShowForm(false);
//             })
//             .catch(err => {
//                 console.error('Error creating food:', err.response ? err.response.data : err.message);
//             });
//     };

//     const updateFood = (id, formData) => {
//         axios.put(`${apiUrl}/${id}`, formData)
//             .then(() => {
//                 fetchFoods();
//                 setCurrentFood(null);
//                 setShowForm(false);
//             })
//             .catch(err => {
//                 console.error('Error updating food:', err.response ? err.response.data : err.message);
//             });
//     };

//     const deleteFood = (id) => {
//         if (window.confirm('Are you sure you want to delete this item?')) {
//             axios.delete(`${apiUrl}/${id}`)
//                 .then(() => fetchFoods())
//                 .catch(err => console.error(err));
//         }
//     };

//     const handleFormSubmit = (formData, resetForm) => {
//         if (currentFood) {
//             updateFood(currentFood.id, formData);
//         } else {
//             createFood(formData);
//         }
//         resetForm();
//     };

//     const handleEdit = (food) => {
//         setCurrentFood(food);
//         setShowForm(true);
//     };

//     const handleDelete = (id) => {
//         deleteFood(id);
//     };

//     const handleAddNew = () => {
//         setCurrentFood(null);
//         setShowForm(true);
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = foodList.slice(indexOfFirstItem, indexOfLastItem);

//     const displayFoodTable = () => (
//         <table className="min-w-full bg-light-blue shadow-lg rounded-lg overflow-hidden mt-5">
//             <thead className="bg-gray-300 text-blue-500">
//                 <tr>
//                     <th className="py-3 px-6 text-left">Name</th>
//                     <th className="py-3 px-6 text-left">Price</th>
//                     <th className="py-3 px-6 text-left">Quantity</th>
//                     <th className="py-3 px-6 text-left">Description</th>
//                     <th className="py-3 px-6 text-left">Category</th>
//                     <th className="py-3 px-6 text-left">Meal</th>
//                     <th className="py-3 px-6 text-left">Slug</th>
//                     <th className="py-3 px-6 text-left">Image</th>
//                     <th className="py-3 px-6 text-center">Actions</th>
//                 </tr>
//             </thead>
//             <tbody className="text-blue-500">
//                 {currentItems.map(food => (
//                     <tr key={food.id} className="hover:bg-ash">
//                         <td className="py-3 px-6">{food.name}</td>
//                         <td className="py-3 px-6">{food.price}</td>
//                         <td className="py-3 px-6">{food.quantity}</td>
//                         <td className="py-3 px-6">{food.description}</td>
//                         <td className="py-3 px-6">{food.category}</td>
//                         <td className="py-3 px-6">{food.meal}</td>
//                         <td className="py-3 px-6">{food.slug}</td>
//                         <td className="py-3 px-6">
//                             <img src={food.imageSrc} alt="food" className="w-24 h-24 rounded-lg object-cover" />
//                         </td>
//                         <td className="py-3 px-6 text-center">
//                             <button onClick={() => handleEdit(food)} className="bg-yellow-500 text-white py-1 px-3 rounded mr-2 hover:bg-yellow-600">Edit</button>
//                             <button onClick={() => handleDelete(food.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Delete</button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );

//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(foodList.length / itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     const renderPageNumbers = () => (
//         <div className="flex justify-center mt-4">
//             {pageNumbers.map(number => (
//                 <button
//                     key={number}
//                     onClick={() => setCurrentPage(number)}
//                     className={`mx-1 px-3 py-1 rounded-full ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-blue-500'} hover:bg-blue-700`}
//                 >
//                     {number}
//                 </button>
//             ))}
//         </div>
//     );

//     return (
//         <>
//           <Navbar />
//         <div className="container mx-auto px-4 bg-light-blue mt-24 min-h-screen relative">
//             {showForm && (
//                 <Food
//                     addOrEdit={handleFormSubmit}
//                     food={currentFood}
//                     closeForm={() => setShowForm(false)}
//                 />
//             )}
//             {displayFoodTable()}
//             {renderPageNumbers()}
//             <button 
//                 onClick={handleAddNew} 
//                 className="bg-blue-500 text-white p-8 rounded-full shadow-lg hover:bg-blue-700 fixed bottom-5 right-5"
//             >
//                 <FaPlus size={30} />
//             </button>
//         </div>
//         </>
//     );
// };

// export default FoodList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Food from './Food';
import { FaPlus,FaSearch  } from 'react-icons/fa'; // Import Plus and Search Icons from react-icons
import Navbar from './FoodNavBar'; // Import the Navbar component
import Modal from './Modal'; // Import the Modal component

const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [currentFood, setCurrentFood] = useState(null);
    const [showForm, setShowForm] = useState(false); // State to handle form visibility
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Maximum 5 records per page
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

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

    const filteredFoodList = foodList.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //const currentItems = foodList.slice(indexOfFirstItem, indexOfLastItem);
    const currentItems = filteredFoodList.slice(indexOfFirstItem, indexOfLastItem);
    // Filter foodList based on searchQuery
    
    const displayFoodTable = () => (
        <table className="min-w-full bg-light-blue shadow-lg rounded-lg overflow-hidden mt-5">
            <thead className="bg-gray-300 text-blue-500">
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
                {currentItems.map(food => (
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

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(foodList.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = () => (
        <div className="flex justify-center mt-4">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`mx-1 px-3 py-1 rounded-full ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-blue-500'} hover:bg-blue-700`}
                >
                    {number}
                </button>
            ))}
        </div>
    );

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 bg-light-blue mt-24 min-h-screen relative">
                {showForm && (
                    <Modal showModal={showForm} closeModal={() => setShowForm(false)}>
                        <Food
                            addOrEdit={handleFormSubmit}
                            food={currentFood}
                            closeForm={() => setShowForm(false)}
                        />
                    </Modal>
                )}
                <div className="mb-4 flex items-center justify-center">
                    {/* Search Bar with Icon */}
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by name..."
                            className="w-full p-3 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-500" size={20} />
                    </div>
                </div>
                {displayFoodTable()}
                {renderPageNumbers()}
                <button 
                    onClick={handleAddNew} 
                    className="bg-blue-500 text-white p-8 rounded-full shadow-lg hover:bg-blue-700 fixed bottom-5 right-5"
                >
                    <FaPlus size={30} />
                </button>
            </div>
        </>
    );
};

export default FoodList;


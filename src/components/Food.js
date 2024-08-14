
// import React, { useState, useEffect } from 'react';

// const defaultImageSrc = '/img/food.jpeg';

// const initialFieldValues = {
//     id: '', // ID will be entered by the user
//     name: '',
//     price: '',
//     quantity: '',
//     description: '',
//     category: '',
//     meal: '',
//     slug: '',
//     imageName: '',
//     imageSrc: defaultImageSrc,
//     imageFile: null,
// };

// export default function Food({ addOrEdit, food = null }) {
//     const [values, setValues] = useState(initialFieldValues);
//     const [errors, setErrors] = useState({});

//     useEffect(() => {
//         if (food) {
//             setValues({
//                 ...food,
//                 imageSrc: food.imageSrc || defaultImageSrc,
//                 imageFile: null,
//             });
//         } else {
//             setValues(initialFieldValues);
//         }
//     }, [food]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value,
//         });
//     };

//     const showPreview = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             let imageFile = e.target.files[0];
//             const reader = new FileReader();
//             reader.onload = (x) => {
//                 setValues({
//                     ...values,
//                     imageFile,
//                     imageSrc: x.target.result,
//                     imageName: imageFile.name,
//                 });
//             };
//             reader.readAsDataURL(imageFile);
//         } else {
//             setValues({
//                 ...values,
//                 imageFile: null,
//                 imageSrc: defaultImageSrc,
//                 imageName: '',
//             });
//         }
//     };

//     const validate = () => {
//         let temp = {};
//         temp.id = values.id !== '' ? true : false; // Add validation for ID
//         temp.name = values.name !== '' ? true : false;
//         temp.price = values.price !== '' ? true : false;
//         temp.quantity = values.quantity !== '' ? true : false;
//         temp.imageSrc = values.imageSrc !== defaultImageSrc ? true : false;
//         setErrors(temp);
//         return Object.values(temp).every((x) => x === true);
//     };

//     const resetForm = () => {
//         setValues(initialFieldValues);
//         document.getElementById('image-uploader').value = null;
//         setErrors({});
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             const formData = new FormData();
//             formData.append('id', values.id); // Include id from user input
//             formData.append('name', values.name);
//             formData.append('price', values.price);
//             formData.append('quantity', values.quantity);
//             formData.append('description', values.description);
//             formData.append('category', values.category);
//             formData.append('meal', values.meal);
//             formData.append('slug', values.slug);
//             formData.append('imageName', values.imageName);
//             formData.append('imageSrc', values.imageSrc);

//             if (values.imageFile) {
//                 formData.append('imageFile', values.imageFile);
//             }

//             addOrEdit(formData, resetForm);
//         }
//     };

//     const applyErrorClass = (field) =>
//         field in errors && errors[field] === false ? ' invalid-field' : '';

//     return (
//         <>
//             <div className="container text-center">
//                 <p className="lead">Add or Edit Food</p>
//             </div>
//             <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
//                 <div className="card">
//                     <img src={values.imageSrc} className="card-img-top" alt="food" />
//                     <div className="card-body">
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className={`form-control${applyErrorClass('id')}`}
//                                 name="id"
//                                 value={values.id}
//                                 onChange={handleInputChange}
//                                 placeholder="Id (input by user)"
//                             />
//                             {errors.id === false && <small className="text-danger">ID is required</small>}
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className={`form-control${applyErrorClass('name')}`}
//                                 name="name"
//                                 value={values.name}
//                                 onChange={handleInputChange}
//                                 placeholder="Name"
//                             />
//                             {errors.name === false && <small className="text-danger">Name is required</small>}
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className={`form-control${applyErrorClass('price')}`}
//                                 name="price"
//                                 value={values.price}
//                                 onChange={handleInputChange}
//                                 placeholder="Price"
//                             />
//                             {errors.price === false && <small className="text-danger">Price is required</small>}
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="number"
//                                 className={`form-control${applyErrorClass('quantity')}`}
//                                 name="quantity"
//                                 value={values.quantity}
//                                 onChange={handleInputChange}
//                                 placeholder="Quantity"
//                             />
//                             {errors.quantity === false && <small className="text-danger">Quantity is required</small>}
//                         </div>
//                         <div className="form-group">
//                             <textarea
//                                 className={`form-control${applyErrorClass('description')}`}
//                                 name="description"
//                                 value={values.description}
//                                 onChange={handleInputChange}
//                                 placeholder="Description"
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className={`form-control${applyErrorClass('category')}`}
//                                 name="category"
//                                 value={values.category}
//                                 onChange={handleInputChange}
//                                 placeholder="Category"
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className={`form-control${applyErrorClass('meal')}`}
//                                 name="meal"
//                                 value={values.meal}
//                                 onChange={handleInputChange}
//                                 placeholder="Meal"
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className={`form-control${applyErrorClass('slug')}`}
//                                 name="slug"
//                                 value={values.slug}
//                                 onChange={handleInputChange}
//                                 placeholder="Slug"
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 className={'form-control-file' + applyErrorClass('imageSrc')}
//                                 id="image-uploader"
//                                 onChange={showPreview}
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Submit</button>
//                         <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// }

// Correct code with ID auto generation

/*import React, { useState, useEffect } from 'react';

const defaultImageSrc = '/img/food.jpeg';

const initialFieldValues = {
    id: '', // ID will be auto-generated
    name: '',
    price: '',
    quantity: '',
    description: '',
    category: '',
    meal: '',
    slug: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null,
};

// Function to generate a random ID

const generateRandomId = () => {
    // Generate a random number between 0 and 9999999, then pad with leading zeros to ensure 7 digits
    const randomNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return 'FD0' + randomNumber; // Combine with prefix to create a 10-character ID
};

export default function Food({ addOrEdit, food = null }) {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (food) {
            setValues({
                ...food,
                imageSrc: food.imageSrc || defaultImageSrc,
                imageFile: null,
            });
        } else {
            setValues({
                ...initialFieldValues,
                id: generateRandomId(), // Set a new random ID when creating a new food item
            });
        }
    }, [food]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const showPreview = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result,
                    imageName: imageFile.name,
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc,
                imageName: '',
            });
        }
    };

    const validate = () => {
        let temp = {};
        temp.name = values.name !== '' ? true : false;
        temp.price = values.price !== '' ? true : false;
        temp.quantity = values.quantity !== '' ? true : false;
        temp.imageSrc = values.imageSrc !== defaultImageSrc ? true : false;
        setErrors(temp);
        return Object.values(temp).every((x) => x === true);
    };

    const resetForm = () => {
        setValues({
            ...initialFieldValues,
            id: generateRandomId(), // Reset with a new random ID
        });
        document.getElementById('image-uploader').value = null;
        setErrors({});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append('id', values.id); // Include auto-generated ID
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('quantity', values.quantity);
            formData.append('description', values.description);
            formData.append('category', values.category);
            formData.append('meal', values.meal);
            formData.append('slug', values.slug);
            formData.append('imageName', values.imageName);
            formData.append('imageSrc', values.imageSrc);

            if (values.imageFile) {
                formData.append('imageFile', values.imageFile);
            }

            addOrEdit(formData, resetForm);
        }
    };

    const applyErrorClass = (field) =>
        field in errors && errors[field] === false ? ' invalid-field' : '';

    return (
        <>
            <div className="container text-center">
                <p className="lead">Add or Edit Food</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <img src={values.imageSrc} className="card-img-top" alt="food" />
                    <div className="card-body">
                       
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('name')}`}
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                            />
                            {errors.name === false && <small className="text-danger">Name is required</small>}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('price')}`}
                                name="price"
                                value={values.price}
                                onChange={handleInputChange}
                                placeholder="Price"
                            />
                            {errors.price === false && <small className="text-danger">Price is required</small>}
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className={`form-control${applyErrorClass('quantity')}`}
                                name="quantity"
                                value={values.quantity}
                                onChange={handleInputChange}
                                placeholder="Quantity"
                            />
                            {errors.quantity === false && <small className="text-danger">Quantity is required</small>}
                        </div>
                        <div className="form-group">
                            <textarea
                                className={`form-control${applyErrorClass('description')}`}
                                name="description"
                                value={values.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('category')}`}
                                name="category"
                                value={values.category}
                                onChange={handleInputChange}
                                placeholder="Category"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('meal')}`}
                                name="meal"
                                value={values.meal}
                                onChange={handleInputChange}
                                placeholder="Meal"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('slug')}`}
                                name="slug"
                                value={values.slug}
                                onChange={handleInputChange}
                                placeholder="Slug"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="file"
                                accept="image/*"
                                className={'form-control-file' + applyErrorClass('imageSrc')}
                                id="image-uploader"
                                onChange={showPreview}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
                    </div>
                </div>
            </form>
        </>
    );
}*/

//THE MOST CORRECTED CODE IS ABOVE WITH ID AUTO GENERATION.

/*import React, { useState, useEffect } from 'react';

const defaultImageSrc = '/img/food.jpeg';

const initialFieldValues = {
    id: '', // ID will be auto-generated
    name: '',
    price: '',
    quantity: '',
    description: '',
    category: '',
    meal: '',
    slug: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null,
};

// Function to generate a random ID

const generateRandomId = () => {
    // Generate a random number between 0 and 9999999, then pad with leading zeros to ensure 7 digits
    const randomNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return 'FD0' + randomNumber; // Combine with prefix to create a 10-character ID
};

export default function Food({ addOrEdit, food = null }) {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (food) {
            setValues({
                ...food,
                imageSrc: food.imageSrc || defaultImageSrc,
                imageFile: null,
            });
        } else {
            setValues({
                ...initialFieldValues,
                id: generateRandomId(), // Set a new random ID when creating a new food item
            });
        }
    }, [food]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const showPreview = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result,
                    imageName: imageFile.name,
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc,
                imageName: '',
            });
        }
    };

    const validate = () => {
        let temp = {};
        temp.name = values.name !== '' ? true : false;
        temp.price = values.price !== '' ? true : false;
        temp.quantity = values.quantity !== '' ? true : false;
        temp.imageSrc = values.imageSrc !== defaultImageSrc ? true : false;
        setErrors(temp);
        return Object.values(temp).every((x) => x === true);
    };

    const resetForm = () => {
        setValues({
            ...initialFieldValues,
            id: generateRandomId(), // Reset with a new random ID
        });
        document.getElementById('image-uploader').value = null;
        setErrors({});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append('id', values.id); // Include auto-generated ID
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('quantity', values.quantity);
            formData.append('description', values.description);
            formData.append('category', values.category);
            formData.append('meal', values.meal);
            formData.append('slug', values.slug);
            formData.append('imageName', values.imageName);
            formData.append('imageSrc', values.imageSrc);

            if (values.imageFile) {
                formData.append('imageFile', values.imageFile);
            }

            addOrEdit(formData, resetForm);
        }
    };

    const applyErrorClass = (field) =>
        field in errors && errors[field] === false ? ' invalid-field' : '';

    return (
        <>
            <div className="container text-center">
                <p className="lead">Add or Edit Food</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <img src={values.imageSrc} className="card-img-top" alt="food" />
                    <div className="card-body">
                       
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('name')}`}
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                            />
                            {errors.name === false && <small className="text-danger">Name is required</small>}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('price')}`}
                                name="price"
                                value={values.price}
                                onChange={handleInputChange}
                                placeholder="Price"
                            />
                            {errors.price === false && <small className="text-danger">Price is required</small>}
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className={`form-control${applyErrorClass('quantity')}`}
                                name="quantity"
                                value={values.quantity}
                                onChange={handleInputChange}
                                placeholder="Quantity"
                            />
                            {errors.quantity === false && <small className="text-danger">Quantity is required</small>}
                        </div>
                        <div className="form-group">
                            <textarea
                                className={`form-control${applyErrorClass('description')}`}
                                name="description"
                                value={values.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('category')}`}
                                name="category"
                                value={values.category}
                                onChange={handleInputChange}
                                placeholder="Category"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('meal')}`}
                                name="meal"
                                value={values.meal}
                                onChange={handleInputChange}
                                placeholder="Meal"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control${applyErrorClass('slug')}`}
                                name="slug"
                                value={values.slug}
                                onChange={handleInputChange}
                                placeholder="Slug"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="file"
                                accept="image/*"
                                className={'form-control-file' + applyErrorClass('imageSrc')}
                                id="image-uploader"
                                onChange={showPreview}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
                    </div>
                </div>
            </form>
        </>
    );
}*/
// Food.js
import React, { useState, useEffect } from 'react';

const defaultImageSrc = '/img/food.jpeg';

const initialFieldValues = {
    id: '',
    name: '',
    price: '',
    quantity: '',
    description: '',
    category: '',
    meal: '',
    slug: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null,
};

const generateRandomId = () => {
    const randomNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return 'FD0' + randomNumber;
};

export default function Food({ addOrEdit, food = null, closeForm }) {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (food) {
            setValues({
                ...food,
                imageSrc: food.imageSrc || defaultImageSrc,
                imageFile: null,
            });
        } else {
            setValues({
                ...initialFieldValues,
                id: generateRandomId(),
            });
        }
    }, [food]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const showPreview = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result,
                    imageName: imageFile.name,
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc,
                imageName: '',
            });
        }
    };

    const validate = () => {
        let temp = {};
        temp.name = values.name !== '' ? true : false;
        temp.price = values.price !== '' ? true : false;
        temp.quantity = values.quantity !== '' ? true : false;
        temp.imageSrc = values.imageSrc !== defaultImageSrc ? true : false;
        setErrors(temp);
        return Object.values(temp).every((x) => x === true);
    };

    const resetForm = () => {
        setValues({
            ...initialFieldValues,
            id: generateRandomId(),
        });
        document.getElementById('image-uploader').value = null;
        setErrors({});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append('id', values.id);
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('quantity', values.quantity);
            formData.append('description', values.description);
            formData.append('category', values.category);
            formData.append('meal', values.meal);
            formData.append('slug', values.slug);
            formData.append('imageName', values.imageName);
            formData.append('imageSrc', values.imageSrc);

            if (values.imageFile) {
                formData.append('imageFile', values.imageFile);
            }

            addOrEdit(formData, resetForm);
        }
    };

    const applyErrorClass = (field) => 
        field in errors && errors[field] === false ? 'border-red-500' : '';

    return (
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg mx-auto mt-5">
            <form onSubmit={handleFormSubmit}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{food ? 'Edit Food' : 'Add Food'}</h2>
                    <button type="button" onClick={closeForm} className="text-red-500 hover:text-red-700">&times;</button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${applyErrorClass('name')}`}
                        placeholder="Enter food name"
                    />
                    {errors.name === false && <small className="text-red-500">This field is required.</small>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={values.price}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${applyErrorClass('price')}`}
                        placeholder="Enter price"
                    />
                    {errors.price === false && <small className="text-red-500">This field is required.</small>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Quantity</label>
                    <input
                        type="text"
                        name="quantity"
                        value={values.quantity}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${applyErrorClass('quantity')}`}
                        placeholder="Enter quantity"
                    />
                    {errors.quantity === false && <small className="text-red-500">This field is required.</small>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={values.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border"
                        placeholder="Enter description"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={values.category}
                        onChange={handleInputChange}
                        className="w-full p-2 border"
                        placeholder="Enter category"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Meal</label>
                    <input
                        type="text"
                        name="meal"
                        value={values.meal}
                        onChange={handleInputChange}
                        className="w-full p-2 border"
                        placeholder="Enter meal type"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        value={values.slug}
                        onChange={handleInputChange}
                        className="w-full p-2 border"
                        placeholder="Enter slug"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input
                        type="file"
                        id="image-uploader"
                        onChange={showPreview}
                        className="w-full p-2 border"
                    />
                    <img src={values.imageSrc} alt="Food" className="w-full mt-2 rounded-lg object-cover" />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        {food ? 'Update' : 'Add'} Food
                    </button>
                </div>
            </form>
        </div>
    );
}

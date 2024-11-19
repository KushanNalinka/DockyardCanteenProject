
// import React, { useState, useEffect } from 'react';

// const defaultImageSrc = '/img/food.jpeg';

// const initialFieldValues = {
//     id: '',
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

// const generateRandomId = () => {
//     const randomNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
//     return 'FD0' + randomNumber;
// };

// export default function Food({ addOrEdit, food = null, closeForm }) {
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
//             setValues({
//                 ...initialFieldValues,
//                 id: generateRandomId(),
//             });
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
//         temp.name = values.name !== '' ? true : false;
//         temp.price = values.price !== '' ? true : false;
//         temp.quantity = values.quantity !== '' ? true : false;
//         temp.imageSrc = values.imageSrc !== defaultImageSrc ? true : false;
//         setErrors(temp);
//         return Object.values(temp).every((x) => x === true);
//     };

//     const resetForm = () => {
//         setValues({
//             ...initialFieldValues,
//             id: generateRandomId(),
//         });
//         document.getElementById('image-uploader').value = null;
//         setErrors({});
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             const formData = new FormData();
//             formData.append('id', values.id);
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
//         field in errors && errors[field] === false ? 'border-red-500' : '';

//     return (
//         <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg mx-auto mt-5">
//             <form onSubmit={handleFormSubmit}>
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">{food ? 'Edit Food' : 'Add Food'}</h2>
//                     <button type="button" onClick={closeForm} className="text-red-500 hover:text-red-700">&times;</button>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={values.name}
//                         onChange={handleInputChange}
//                         className={`w-full p-2 border ${applyErrorClass('name')}`}
//                         placeholder="Enter food name"
//                     />
//                     {errors.name === false && <small className="text-red-500">This field is required.</small>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Price</label>
//                     <input
//                         type="text"
//                         name="price"
//                         value={values.price}
//                         onChange={handleInputChange}
//                         className={`w-full p-2 border ${applyErrorClass('price')}`}
//                         placeholder="Enter price"
//                     />
//                     {errors.price === false && <small className="text-red-500">This field is required.</small>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Quantity</label>
//                     <input
//                         type="text"
//                         name="quantity"
//                         value={values.quantity}
//                         onChange={handleInputChange}
//                         className={`w-full p-2 border ${applyErrorClass('quantity')}`}
//                         placeholder="Enter quantity"
//                     />
//                     {errors.quantity === false && <small className="text-red-500">This field is required.</small>}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Description</label>
//                     <textarea
//                         name="description"
//                         value={values.description}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border"
//                         placeholder="Enter description"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Category</label>
//                     <input
//                         type="text"
//                         name="category"
//                         value={values.category}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border"
//                         placeholder="Enter category"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Meal</label>
//                     <input
//                         type="text"
//                         name="meal"
//                         value={values.meal}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border"
//                         placeholder="Enter meal type"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Slug</label>
//                     <input
//                         type="text"
//                         name="slug"
//                         value={values.slug}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border"
//                         placeholder="Enter slug"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Image</label>
//                     <input
//                         type="file"
//                         id="image-uploader"
//                         onChange={showPreview}
//                         className="w-full p-2 border"
//                     />
//                     <img src={values.imageSrc} alt="Food" className="w-full mt-2 rounded-lg object-cover" />
//                 </div>
//                 <div className="flex justify-end">
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                     >
//                         {food ? 'Update' : 'Add'} Food
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
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
        <div className="bg-white p-1 rounded-lg shadow-lg max-w-12xl  mx-auto ">
            <form onSubmit={handleFormSubmit} className=" bg-yellow-50 p-4  grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex justify-between items-center mb-6 col-span-3">
                    <h2 className="text-2xl  font-bold text-blue-700">{food ? 'Edit Food' : 'Add Food'}</h2>
                    <button type="button" onClick={closeForm} className="text-red-500 hover:text-red-700 text-4xl">&times;</button>
                </div>
                <div className="mb-4">
                    <label className="block text-blue-700 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-md ${applyErrorClass('name')} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                       // className={`w-full p-2 border ${applyErrorClass('name')}`}
                        placeholder="Enter food name"
                    />
                    {errors.name === false && <small className="text-red-500">This field is required.</small>}
                </div>
                <div className="mb-4 ">
                    <label className="block  text-blue-700 font-medium">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={values.price}
                        onChange={handleInputChange}
                        //className={`w-full p-2 border ${applyErrorClass('price')}`}
                        className={`w-full p-3 border rounded-md ${applyErrorClass('quantity')} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        placeholder="Enter price"
                    />
                    {errors.price === false && <small className="text-red-500">This field is required.</small>}
                </div>
                <div className="mb-4 ">
                    <label className="block  text-blue-700 font-medium">Quantity</label>
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

                <div className="mb-4 ">
                    <label className="block  text-blue-700 font-medium">Meal</label>
                    <input
                        type="text"
                        name="meal"
                        value={values.meal}
                        onChange={handleInputChange}
                        className="w-full p-2 border"
                        placeholder="Enter meal type"
                    />
                </div>

                <div className="mb-4 ">
                    <label className="block  text-blue-700 font-medium">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={values.category}
                        onChange={handleInputChange}
                        className="w-full p-2 border"
                        placeholder="Enter category"
                    />
                </div>
              
                <div className="mb-4 ">
                    <label className="block  text-blue-700 font-medium">Description</label>
                    <textarea
                        name="description"
                        value={values.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border"
                        placeholder="Enter description"
                    />
                </div>
                <div className="mb-4  text-blue-700 font-medium">
                    <label className="block  text-blue-700 font-medium">Image</label>
                    <input
                        type="file"
                        id="image-uploader"
                        onChange={showPreview}
                        className="w-full p-2 border"
                    />
                    <img src={values.imageSrc} alt="Food" className="w-32 h-32 mt-2 rounded-lg object-cover" />
                </div>
                <div className="mb-4 ">
                    <label className="block  text-blue-700 font-medium">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        value={values.slug}
                        onChange={handleInputChange}
                        className="w-full p-2 border"
                        placeholder="Enter slug"
                    />
                </div>
               
                <div className=" mt-28 mr-12">
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


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

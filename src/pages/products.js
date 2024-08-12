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
      if (!name || !price || !quantity || !category || !slug) {
        alert('Please fill in all required fields.');
        return;
      }
  
      const formData = new FormData();
      formData.append('id', id); // Include id if needed
      formData.append('name', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('meal', meal);
      formData.append('slug', slug);
  
      if (imageFile) {
        formData.append('imageFile', imageFile); // Append image file if provided
      }
  
      console.log('Submitting product data:', {
        id,
        name,
        price,
        quantity,
        description,
        category,
        meal,
        slug,
        imageFile: imageFile ? imageFile.name : 'No file',
      });
  
      const response = await axios.post(baseUri, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      alert('Product Registration Successful');
      resetForm();
      Load();
    } catch (err) {
      if (err.response) {
        console.error('Error saving product:', err.response.data);
        alert(`Error: ${err.response.data.title || 'Product Registration Failed'}`);
        if (err.response.data.errors) {
          console.log('Validation errors:', err.response.data.errors);
        }
      } else {
        console.error('Error saving product:', err);
        alert('Product Registration Failed');
      }
    }
  }
  

  async function update(event) {
    event.preventDefault();
    try {
      if (!id) {
        alert('No product selected for update.');
        return;
      }

      const formData = new FormData();
      formData.append('id', id); // Make sure to include the ID for updates
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
        // Log individual field errors if present
        if (err.response.data.errors) {
          console.log('Validation errors:', err.response.data.errors);
        }
      } else {
        console.error('Error updating product:', err);
        alert('Product Update Failed');
      }
    }
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(`${baseUri}/${productId}`);
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
              disabled={isEditing} // Disable for editing to prevent changes
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
              required={!isEditing} // Require image only when creating a new product
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
                  <img src={`http://localhost:5255${product.imageUrl}`} alt={product.name} style={{ width: '100px' }} />
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

export default Product;*/
import axios from 'axios';
import { useEffect, useState } from 'react';

function Product() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState([]);
  const [slug, setSlug] = useState('');
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
        meal: meal.join(','),
        slug: slug,
        imageUrl: '', // Set empty string for image URL
      });
      showAlert('Product Registration Successful', 'success');
      resetForm();
      Load();
    } catch (err) {
      showAlert('Product Registration Failed', 'error');
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
    setMeal(product.meal.split(',')); // Convert the comma-separated string back to an array
    setSlug(product.slug);
    setIsEditing(true);
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(`${baseUri}/${productId}`);
      showAlert('Product deleted successfully', 'success');
      Load();
    } catch (err) {
      showAlert('Product deletion failed', 'error');
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
        meal: meal.join(','), // Convert the array back to a comma-separated string
        slug: slug,
        imageUrl: '', // Set empty string for image URL
      });
      showAlert('Product Updated Successfully', 'success');
      resetForm();
      Load();
    } catch (err) {
      showAlert('Product Update Failed', 'error');
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
    setMeal([]);
    setSlug('');
    setIsEditing(false);
  }

  function handleMealChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setMeal(selectedOptions);
  }

  function showAlert(message, type) {
    const alertBox = document.createElement('div');
    alertBox.className = `fixed top-4 right-4 p-4 rounded shadow-lg z-50 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    alertBox.textContent = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Product Details</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={isEditing ? update : save}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="font-semibold mb-1">ID</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
                id="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
                disabled={isEditing}
                placeholder="Enter product ID"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Name</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter product name"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Price</label>
              <input
                type="number"
                className="border border-gray-300 p-2 rounded-md"
                id="price"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
                placeholder="Enter product price"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Quantity</label>
              <input
                type="number"
                className="border border-gray-300 p-2 rounded-md"
                id="quantity"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                placeholder="Enter product quantity"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Description</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Enter product description"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Category</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                placeholder="Enter product category"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Meal</label>
              <select
                multiple
                className="border border-gray-300 p-2 rounded-md"
                id="meal"
                value={meal}
                onChange={handleMealChange}
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
              <div className="mt-1 text-sm text-gray-600">
                Hold <kbd className="bg-gray-200 px-1 rounded">Ctrl</kbd> (Windows) or <kbd className="bg-gray-200 px-1 rounded">Cmd</kbd> (Mac) to select multiple options.
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Slug</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
                id="slug"
                value={slug}
                onChange={(event) => setSlug(event.target.value)}
                placeholder="Enter product slug"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className={`px-4 py-2 rounded-md ${
                isEditing ? 'bg-blue-500' : 'bg-green-500'
              } text-white font-semibold`}
            >
              {isEditing ? 'Update' : 'Register'}
            </button>
            {isEditing && (
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-gray-500 text-white font-semibold"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
      <br />
      <div className="mt-8">
        <table className="w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Meal</th>
              <th className="px-4 py-2">Slug</th>
              <th className="px-4 py-2">Option</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="bg-gray-100 border-b border-gray-200 hover:bg-gray-200">
                <td className="border px-4 py-2">{product.id}</td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">{product.meal}</td>
                <td className="border px-4 py-2">{product.slug}</td>
                <td className="border px-4 py-2 flex space-x-2 justify-center">
                  <button
                    type="button"
                    className="w-20 px-2 py-1 bg-yellow-500 text-white rounded-md font-semibold"
                    onClick={() => editProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="w-20 px-2 py-1 bg-red-500 text-white rounded-md font-semibold"
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
    </div>
  );
}

export default Product;

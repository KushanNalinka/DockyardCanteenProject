
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

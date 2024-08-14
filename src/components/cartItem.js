import React, {useState, useEffect} from 'react' 
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }
  return (

    <div className='flex justify-between items-center bg-white text-black p-2 gap-5 mb-3 shadow-md rounded-xl w-90 h-24'>
            <div className='flex items-center gap-5'>
                <img src={detail.image} alt="" className='object-cover w-12 h-12 rounded-full shadow-md'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>{detail.name}</h3>
                    <p className='font-medium'>Rs {detail.price * quantity}.00</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <button className='bg-[#28245F] rounded-full w-6 h-6 text-white font-black' onClick={handleMinusQuantity}>-</button>
                <span className='font-bold'>{quantity}</span>
                <button className='bg-[#28245F] rounded-full w-6 h-6 text-white font-black' onClick={handlePlusQuantity}>+</button>
            </div>
        </div>
  )
}

export default CartItem;


import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {

    const { cartItems } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, current) => {
        const {price, quantity} = current;
        return acc + price*quantity;
    },0) ;

    return (
        <div className='checkout-container'>

            <header>
                <ul className='header_nav'>
                    <li>Product</li>
                    <li>Description</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <li>Remove</li>
                </ul>
            </header>
        
            <div className='items-container'>
                {cartItems.map(el => <CheckoutItem item= {el} key={el.id}/>)}
                <span className='total'>Totale price ${totalPrice}</span>
            </div>



        </div>
    )
}

export default Checkout;
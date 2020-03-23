import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import ThankyouImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setorderPlaced] = useState(false);
    const handlePlaceOrder = () => {
        setCart([]);
        setorderPlaced(true);
        processOrder();
    }
    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
        useEffect(()=>{
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart);

            const cartProducts = productKeys.map(key => {
                const product = fakeData.find(pd => pd.key === key)
                product.quantity = savedCart[key];
                return product;
            });
            setCart(cartProducts);
        },[])
        let thankyou;
        if(orderPlaced){
            thankyou = (<img src={ThankyouImage} alt=""/>)
        }
    return (
        <div className="shop-container">
            
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        removeProduct={removeProduct}
                        key={pd.key}
                        product={pd}></ReviewItem>)
                }
                {thankyou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="cart-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;
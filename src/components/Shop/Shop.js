import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity=savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    },[]);
    const handleAddProduct = (product) => {
        const toBeAddProduct = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddProduct);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity=count;
            const others = cart.filter(pd => pd.key !== toBeAddProduct);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {product.map(everyelement => <Product 
                showAddToCart = {true}
                handleAddProduct = {handleAddProduct}
                product={everyelement} 
                
                ></Product>)}
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                    <Link to="/review">
                        <button className="cart-button">Review Order</button>
                    </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;
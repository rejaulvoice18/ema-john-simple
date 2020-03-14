import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div class="product-container">
                {product.map(everyelement => <Product 
                handleAddProduct = {handleAddProduct}
                product={everyelement} 
                
                ></Product>)}
            </div>
            <div class="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
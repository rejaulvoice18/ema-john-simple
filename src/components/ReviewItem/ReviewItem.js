import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity, price, key} = props.product;
    const reviewItemStyle ={
        borderBottom:'1px solid orange',
        paddingBottom: '10px',
        marginBottom:'10px',
        marginLeft:'200px'


    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h2 className="product-name">{name}</h2>
            <p className="price-color">${price}</p>
            <p>Quantity:{quantity}</p>
            <button className="cart-button"
                onClick = {() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;
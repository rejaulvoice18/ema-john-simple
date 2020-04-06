import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';
// import { useState } from 'react';
// import { useRef } from 'react';
// import { useEffect } from 'react';


// const usePrevious = value =>{
//     const prev = useRef();
//     useEffect(()=>{
//         console.log(value);
//         prev.current = value;
//     }, [value]);
//     return prev.current;
// }

const Header = () => {
    const auth = useAuth();
    // console.log(auth.user);
    // const [count, setCount] = useState(0);
    // const previous = usePrevious(count)
    return (
        <div className="header">
            <img src={logo} alt=""/>
            {/* <h1>Count: {count} Previous: {previous}</h1>
            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button> */}
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Preview</a>
                <a href="/orders">Orders history</a>
                {
                    auth.user && <span style={{color:'white'}}>Welcome {auth.user.name}</span>
                }
                {
                    auth.user ? 
                    <a href="/login">Sign Out</a>
                        :
                    <a href="/login">Sign In</a>
                }
            </nav>
        </div>
    );
};

export default Header;
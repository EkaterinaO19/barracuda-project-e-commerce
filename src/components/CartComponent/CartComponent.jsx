import React, { useState } from 'react';
import styles from './CartComponent.module.css';
import {Empty} from "antd";

const ProductCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    }

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter(i => i !== item));
    }

    return (
        <div className={styles.cart}>
            <h2 className={styles.cartTitle}>My Cart</h2>
            <div className={styles.cartItems}>
                {cartItems.map((item, index) => (
                    <div key={index} className={styles.cartItem}>
                        <img src={item.image} className={styles.cartItemImage} alt={item.title}/>
                        <div className={styles.cartItemInfo}>
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                        </div>
                        <button className={styles.cartItemRemove} onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))}
            </div>
            {cartItems.length === 0 && <p className={styles.emptyCart} style={{height:'70vh'}}><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></p>}
        </div>
    );
};


export default ProductCart;
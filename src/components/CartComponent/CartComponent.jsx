import React, { useState } from 'react';
import styles from './CartComponent.module.css';
import CustomButton from "../../UI/CustomButton/CustomButton";

const data = [
    {
        id: 1,
        img:'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Long Sleeve T-shirt',
        isNew: true,
        oldPrice: 17,
        price: 15
    },
    {
        id: 2,
        img:'https://images.pexels.com/photos/6121448/pexels-photo-6121448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Cotton Woman Trousers',
        isNew: true,
        oldPrice: 19,
        price: 16
    }
]


const CartComponent = () => {

    // const fetchCart = async () => {
    //     const response = await axios.get(`https://fakestoreapi.com/carts/5`);
    //     return response.data;
    // }
    //
    // const { isLoading, isError, data, error } = useQuery({
    //     queryKey: ['cart'],
    //     queryFn: fetchCart,
    // })
    //
    // if (isLoading) {
    //     return null;
    // }
    //
    // if (isError) {
    //     return <span>Error: {error.message}</span>
    // }


    return (
        <>
            <div className={styles.modal}>
                <h1>Your Cart</h1>
                {data.map(item =>
                    <div key={item.id} className={styles.container}>
                        <img src={item.img} alt={'image'} className={styles.image}/>
                        <div className={styles.right}>
                            <p>{item.title}</p>
                            <p>Quantity: </p>
                            <p>$ {item.price}</p>
                        </div>
                    </div>
                )}
                <p>Total Price: </p>
                <CustomButton>Order</CustomButton>
            </div>
        </>
    )
};


export default CartComponent;
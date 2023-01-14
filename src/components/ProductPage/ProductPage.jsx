import React from 'react';
import styles from './ProductPage.module.css'
import {InputNumber, Rate} from "antd";
import CustomButton from "../../UI/CustomButton/CustomButton";


function ProductPage({data}) {

    const onChange = (value) => {
        console.log('changed', value);
    };

    const addToCart = (e) => {
        e.preventDefault();
    }
    return (
            <div className={styles.card}>
                    <div key={data.id} className={styles.left}>
                            <Rate value={data?.rating?.rate}/>
                            <img src={data?.image} alt={data?.title} className={styles.image}/>
                    </div>
                    <div className={styles.right}>
                           <p className={styles.title}>{data?.title}</p>
                            <p className={styles.price}>$ {data?.price}</p>
                            <p className={styles.description}>{data?.description}</p>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
                        <div className={styles.button}>
                                <CustomButton onClick={addToCart}>Add to Cart</CustomButton>
                            </div>
                    </div>
            </div>
    );
}

export default ProductPage;
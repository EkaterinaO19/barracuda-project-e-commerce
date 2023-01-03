import React from 'react';
import styles from './SaleUp.module.css';
import Card from '../../UI/Card/Card';
import CustomButton from "../../UI/CustomButton/CustomButton";
import {Link} from "react-router-dom";
import SaleCard from "../../UI/SaleCard/SaleCard";



function SaleUp(props) {


    const data = [
        {
            id: 1,
            img:'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Brown Leather Bag',
            isNew: true,
            oldPrice: 130,
            price: 80
        },
        {
            id: 2,
            img:'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Blue Silk Tie',
            isNew: true,
            oldPrice: 39,
            price: 26
        },
        {
            id: 3,
            img:'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Brown Leather Shoes',
            isNew: true,
            oldPrice: 100,
            price: 85
        },
    ];


    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.title}>Sale up to 70%</div>
                <div className={styles.slider}>
                    {data.map((item) =>
                        <div key={item.id}>
                            <SaleCard item={item} />
                        </div>
                    )}
                </div>
            </div>
            <CustomButton>
                <Link to="/products">See all sale products</Link>
            </CustomButton>
        </div>
    );
}

export default SaleUp;
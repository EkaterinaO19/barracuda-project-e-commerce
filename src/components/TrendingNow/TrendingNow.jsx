import React from 'react';
import styles from './TrendingNow.module.css';
import Card from '../../UI/Card/Card';
import CustomButton from "../../UI/CustomButton/CustomButton";
import {Link} from "react-router-dom";
import {Carousel} from "antd";


const data = [
    {
        id: 1,
        image:'https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Long Sleeve T-shirt',
        isNew: true,
        oldPrice: 18,
        price: 17
    },
    {
        id: 2,
        image:'https://images.pexels.com/photos/932405/pexels-photo-932405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Cotton Woman Trousers',
        isNew: true,
        oldPrice: 19,
        price: 16
    },
    {
        id: 3,
        image:'https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Blue Classic Woman Jeans',
        isNew: true,
        oldPrice: 17,
        price: 15
    },
    {
        id: 4,
        image:'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Long Sleeve T-shirt',
        isNew: true,
        oldPrice: 18,
        price: 17
    },
    {
        id: 5,
        image:'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Cotton Woman Trousers',
        isNew: true,
        oldPrice: 19,
        price: 16
    },
    {
        id: 6,
        image:'https://images.pexels.com/photos/4937223/pexels-photo-4937223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Blue Classic Woman Jeans',
        isNew: true,
        oldPrice: 17,
        price: 15
    },
];


const contentStyle = {
    margin: 0,
    height: '460px',
    width: 'auto'
};


function TrendingNow(props) {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

      return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.title}>Trending now</div>
                <Carousel afterChange={onChange} arrows={true} >
                        <div style={contentStyle}>
                            <div className={styles.slider}>
                                {data.map((item) =>
                                    <div key={item.id}><Card item={item}/></div>
                                )}
                            </div>
                        </div>
                        <div style={contentStyle}>
                            <div className={styles.slider}>
                                {data.map((item) =>
                                    <div key={item.id}><Card item={item}/></div>
                                )}
                            </div>
                        </div>
                        <div style={contentStyle}>
                            <div className={styles.slider}>
                                {data.map((item) =>
                                    <div key={item.id}><Card item={item}/></div>
                                )}
                            </div>
                        </div>
                 </Carousel>
           </div>
            <div className={styles.btnWrapper}>
                <CustomButton>
                    <Link to="/products/1">Explore top sales</Link>
                </CustomButton>
            </div>

        </div>
    );
}

export default TrendingNow;
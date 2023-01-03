import React from 'react';
import styles from './NewArrivals.module.css'
import Card from "../../UI/Card/Card";
import {Carousel} from "antd";

const data = [
    {
        id: 1,
        image:'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Long Sleeve T-shirt',
        isNew: true,
        oldPrice: 17,
        price: 15
    },
    {
        id: 2,
        image:'https://images.pexels.com/photos/6121448/pexels-photo-6121448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Cotton Woman Trousers',
        isNew: true,
        oldPrice: 19,
        price: 16
    },
    {
        id: 3,
        image:'https://images.pexels.com/photos/5604520/pexels-photo-5604520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Blue Classic Woman Jeans',
        isNew: true,
        oldPrice: 17,
        price: 15
    },
    {
        id: 4,
        image:'https://images.pexels.com/photos/2705752/pexels-photo-2705752.jpeg',
        title:'Wool Woman Sweater',
        isNew: true,
        oldPrice: 37,
        price: 29
    },

];


const contentStyle = {
    margin: 0,
    height: '460px',
    dots: true,
};

function NewArrivals(props) {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <span className={styles.title}>New arrivals</span>
                <span className={styles.text}>Check out our latest arrivals for the upcoming season. See the collection here</span>
            </div>

            <Carousel afterChange={onChange}>
                <div>
                    <div style={contentStyle}>
                        <div className={styles.bottom}>
                            {data.map((item) =>
                                <div key={item.id}><Card item={item}/></div>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className={styles.bottom}>
                            {data.map((item) =>
                                <div key={item.id}><Card item={item}/></div>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className={styles.bottom}>
                            {data.map((item) =>
                                <div key={item.id}><Card item={item}/></div>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className={styles.bottom}>
                            {data.map((item) =>
                                <div key={item.id}><Card item={item}/></div>
                            )}
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default NewArrivals;
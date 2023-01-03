import React from 'react';
import styles from './PopularCategories.module.css';
import Tops from '/home/kate/project/src/assets/popularCategories/coats.png'
import Coats from '/home/kate/project/src/assets/popularCategories/coats.png'
import Jackets from '/home/kate/project/src/assets/popularCategories/jackets.png'
import Sandals from '/home/kate/project/src/assets/popularCategories/sandals.png'
import Caps from '/home/kate/project/src/assets/popularCategories/caps.png'
import Tshirt from '/home/kate/project/src/assets/popularCategories/tshirts.png'
import {Link} from "react-router-dom";


const data = [

    {
        id:1,
        image: Tshirt,
        title: 'T-shirt'
    },
    {
        id:2,
        image: Coats,
        title: 'Coats'
    },
    {
        id:3,
        image:Caps,
        title: 'Caps'
    },
    {
        id:4,
        image: Sandals,
        title: 'Sandals'
    },
    {
        id:5,
        image:Jackets,
        title: 'Jackets'
    },
]

function PopularCategories(props) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Popular categories</p>
            <div className={styles.image}>
                {data.map((item) => (
                    <div key={item.id}>
                        <Link to={'/products/1'}>
                            <img src={item.image} alt={item.title}/>
                            <div className={styles.text}>{item.title}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularCategories;
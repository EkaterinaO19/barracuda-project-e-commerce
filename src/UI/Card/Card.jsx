import React, {useState} from 'react';
import styles from './Card.module.css'
import { Link } from "react-router-dom";
import {Rate} from "antd";



const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
function Card(props) {
    const [value, setValue] = useState(3);

    return (
            <div>
                <Link to={`/products`}>
                <div className={styles.image}>
                    <img src={props.item.image} alt={props.item.title}/>
                    <div style={{position:'absolute', display:'flex', padding:'10px'}}>
                        <Rate
                            tooltips={desc} onChange={setValue} value={value}
                        />
                    </div>
                </div>
                <div className={styles.text}>
                    <p>{props.item.title}</p>
                    <span><b>$ {props.item.price}</b></span>
                </div>
            </Link>
            </div>
    );
}

export default Card;
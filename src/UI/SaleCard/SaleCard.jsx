import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './SaleCard.module.css';
import {Rate, Tag} from "antd";



function SaleCard(props) {

    return (
        <Link to={`/product/${props.item.id}`}>
                <div className={styles.image}>
                    <img src={props.item.img} alt={props.item.title} className={styles.img}/>
                    <div style={{position:'absolute', display:'flex', padding:'10px'}}>
                        <Tag color="#FF4242">
                            - {Math.floor((props.item.oldPrice - props.item.price)/props.item.oldPrice * 100)} %
                        </Tag>
                        <Rate
                            value={5}
                        />
                    </div>
                </div>
                <div className={styles.text}>
                    <p>{props.item.title}</p>
                    <span className={styles.price}><b>$ {props.item.price}</b></span>
                    <span className={styles.oldPrice}>$ {props.item.oldPrice}</span>
                </div>
        </Link>
    )
}

export default SaleCard;
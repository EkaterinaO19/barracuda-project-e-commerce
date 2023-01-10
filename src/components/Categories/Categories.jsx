import React from 'react';
import styles from './Categories.module.css'
import Girl from '/home/kate/project/src/assets/girl.png'
import Boy from '/home/kate/project/src/assets/boy.png'
import Shoes from '/home/kate/project/src/assets/shoes.png'
import {Link} from "react-router-dom";
import CustomButton from "../../UI/CustomButton/CustomButton";


function Categories(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.raw1}>
                <div className={styles.card1}>
                    <div className={styles.promo}>
                        <span className={styles.topTitle}>Summer Collections</span>
                        <p className={styles.title}>Sale Up to 70%</p>
                        <CustomButton>
                            <Link to="/products">Explore new prices </Link>
                        </CustomButton>
                    </div>
                    <img src={Girl} alt={'img'} className={styles.categoryImg}/>
                </div>
                <div className={styles.card2}>
                    <div className={styles.promo}>
                        <span className={styles.topTitle}>Deal of the week</span>
                        <p className={styles.title}>Stay Warm With Our <br/>New Sweaters</p>
                        <CustomButton>
                            <Link to="/products">Shop now</Link>
                        </CustomButton>
                    </div>
                    <img src={Boy} alt={'img'} className={styles.categoryImg}/>
                </div>
            </div>
            <div className={styles.raw2}>
                <div className={styles.card3}>
                    <div className={styles.promo}>
                        <span className={styles.topTitle}>New collection</span>
                        <p className={styles.title}>Shoes & Bags<br/>
                            autumn / winter 2020 </p>
                        <CustomButton>
                            <Link to="/products">See offers</Link>
                        </CustomButton>
                    </div>
                    <img src={Shoes} alt={'img'}  className={styles.categoryImg}/>
                </div>
                <div className={styles.card4}>
                    <div className={styles.promo}>
                        <span className={styles.topTitle}>For All new Email Subscribers</span>
                        <p className={styles.title}>Get 5% Off & Free Delivery</p>
                        <div className={styles.bottom}>
                            <div className={styles.inputGroup}>
                                <input type="text" className={styles.input} placeholder="Your working email" />
                                <button className={styles.inputButton}>Subscribe</button>
                            </div>
                            <p className={styles.description}>*Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
import React from 'react';
import styles from './Footer.module.css'

function Footer(props) {
    return (
        <>
            <footer className={styles.footer}>
                <div  className={styles.wrapper}>
                    <div className={styles.left}>
                        <p className={styles.title}>HELP</p>
                        <ul>
                            <li className={styles.item}><a href="#">Delivery & returns</a></li>
                            <li className={styles.item}><a href="#">FAQ</a></li>
                            <li className={styles.item}><a href="#">Blog</a></li>
                            <li className={styles.item}><a href="#">Track order</a></li>
                            <li className={styles.item}><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                    <div className={styles.center}>
                        <p className={styles.title}>Shop</p>
                        <ul>
                            <li className={styles.item}><a href="#">New arrivals</a></li>
                            <li className={styles.item}><a href="#">Trending now</a></li>
                            <li className={styles.item}><a href="#">Sales</a></li>
                            <li className={styles.item}><a href="#">Brands</a></li>
                            <li className={styles.item}><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.title}>Get in touch</p>
                        <ul>
                            <li className={styles.item}>Call:(405) 555-0128</li>
                            <li className={styles.item}>Email:hello@createx.com</li>
                        </ul>
                    </div>
                </div>
                <div className={'bottom-footer'}>© All rights reserved.</div>
            </footer>
        </>
    )
}
export default Footer;
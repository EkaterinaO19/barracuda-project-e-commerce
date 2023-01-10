import styles from './CenterNavbar.module.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



function CenterNavbar(props) {

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <i>Barracuda</i>
                </div>
                <div className={styles.left}>
                    <div className={styles.item}>
                        <Link to={'/'}>Women</Link>
                    </div>
                    <div className={styles.item} >
                        <Link to={'/'}>Men</Link>
                    </div>
                    <div className={styles.item} >
                        <Link to={'/'}>Girls</Link>
                    </div>
                    <div className={styles.item} >
                        <Link to={'/'}>Boys</Link>
                    </div>
                    <div className={styles.alarm}>
                        <Link to={'/'}>Sale</Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.item}>
                        <ShoppingCartOutlinedIcon />
                        <div className={styles.square}>
                            <span className={styles.item}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CenterNavbar;
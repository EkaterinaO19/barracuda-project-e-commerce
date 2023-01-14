import styles from './CenterNavbar.module.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartComponent from "../../CartComponent/CartComponent";



function CenterNavbar(props) {
    const [openCart, setOpenCart] = useState(false)

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link to={'/'}><i>Barracuda</i></Link>
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
                        <ShoppingCartOutlinedIcon onClick={()=>setOpenCart(!openCart)}/>
                        <div className={styles.square}>
                            <span className={styles.item}>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {openCart && <CartComponent/>}
        </>
    );
}

export default CenterNavbar;
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './BottomNavbar.module.css'

function BottomNavbar(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                <div className={styles.item}>
                <ArrowBackIosIcon style={{'height': '12px'}}/>
                </div>
                <div className={styles.item}>
                <b>Up to 70% Off.</b>
                </div>
                <div className={styles.item}>
                <u>Up to 70% Off.</u>
                </div>
                <div className={styles.item}>
                 <ArrowForwardIosIcon style={{'height': '12px'}}/>
                </div>
            </div>
        </div>
    );
}

export default BottomNavbar;
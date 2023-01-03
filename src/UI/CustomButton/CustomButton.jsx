import React from 'react';
import styles from './CustomButton.module.css'
function CustomButton(props) {
    return (
        <div className={styles.button}>{props.children}</div>
    );
}

export default CustomButton;
import React from 'react';
import styles from "./InstagramComponent.module.css";
import CustomButton from "../../UI/CustomButton/CustomButton";
import {InstagramOutlined} from '@ant-design/icons'
import Img1 from '../../assets/InstagramComponent/image.png'
import Img2 from '../../assets/InstagramComponent/image (2).png'
import Img3 from '../../assets/InstagramComponent/image (1).png'

function InstagramComponent(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <span className={styles.text}>Follow us on Instagram</span>
                <span className={styles.title}>@barracuda_store</span>
                    <CustomButton>
                        <InstagramOutlined style={{marginRight: '8px'}}/>
                        Follow instagram
                    </CustomButton>
            </div>
            <div className={styles.right}>
               <div className={styles.imageGroup}>
                   <img src={Img1} alt={'image'} className={styles.image}/>
                   <img src={Img2} alt={'image'} className={styles.image}/>
                   <img src={Img3} alt={'image'} className={styles.image}/>
               </div>
            </div>
        </div>
    );
}

export default InstagramComponent;
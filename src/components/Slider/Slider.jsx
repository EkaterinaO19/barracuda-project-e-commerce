import React from 'react';
import { Carousel } from 'antd';
import MyImage from '/home/kate/project/src/assets/image.png';
import styles from './Slider.module.css'
import Woman from '/home/kate/project/src/assets/woman.png'
import Man from '/home/kate/project/src/assets/man.png'
import Kids from '/home/kate/project/src/assets/kids.png'
import CustomButton from "../../UI/CustomButton/CustomButton";

const contentStyle = {
    margin: 0,
    height: '800px',
};
function Slider(props) {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
    <>
        <Carousel afterChange={onChange} dotPosition={'top'} autoplay={false} easing={'linear'}>
            <div>
                <div style={contentStyle}>
                    <div>
                        <div className={styles.article}>
                            <span className={styles.text}>New collection</span>
                            <span className={styles.title}>Menswear 2022</span>
                            <div className={styles.buttonGroups}>
                                <CustomButton>Shop sale</CustomButton>
                                <CustomButton>Shop the menswear</CustomButton>
                            </div>
                        </div>
                        <img src={MyImage} alt={'image'} style={{zIndex:'0'}}/>
                    </div>
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <div>
                        <div className={styles.article}>
                            <span className={styles.text}>New collection</span>
                            <span className={styles.title}>Womenswear 2022</span>
                            <div className={styles.buttonGroups}>
                                <CustomButton>Shop sale</CustomButton>
                                <CustomButton>Find your style</CustomButton>
                            </div>
                        </div>
                    </div>
                    <img src={MyImage} alt={'image'}/>
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <div>
                        <div className={styles.article}>
                            <span className={styles.text}>New collection</span>
                            <span className={styles.title}>Kids' Clothing 2022</span>
                            <div className={styles.buttonGroups}>
                                <CustomButton>Shop sale</CustomButton>
                                <CustomButton>Shop kids clothes</CustomButton>
                            </div>
                        </div>
                    </div>
                    <img src={MyImage} alt={'image'}/>
                </div>
            </div>
        </Carousel>
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div>
                    <img src={Woman} alt={'image'} className={styles.item}/>
                    <span className={styles.name}>Woman`s</span>
                </div>
                <div>
                    <img src={Man} alt={'image'} className={styles.item}/>
                    <span className={styles.name}>Man`s</span>
                </div>
                <div>
                    <img src={Kids} alt={'image'}/>
                    <span className={styles.name}>Kids</span>
                </div>
            </div>
        </div>
    </>

    );
}

export default Slider;
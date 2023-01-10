import React from 'react';
import {Rate, Select, } from "antd";
import styles from './SiderProductsMenu.module.css'
import axios from "axios";

function SiderProductsMenu({value, setValue}) {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const categories = ['men`s clothing', 'women`s clothing', 'jewelery', 'electronics'];
    // const fetchCategoryProducts = async (value) => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${value}`);
    //     return response.data;
    // }


    return (
        <div>
            <div className={styles.menu}>
                <h3 className={styles.item}>Sort by</h3>
                <p  className={styles.item}>Price:</p>
                <div  className={styles.item}>
                    <Select
                        defaultValue="low to high"
                        style={{
                            width: 160,
                        }}
                        // onChange={handleChange}
                        options={[
                            {
                                value: 'low to high',
                                label: 'low to high',
                            },
                            {
                                value: 'high to low',
                                label: 'high to low',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className={styles.menu}>
            <p className={styles.item}>Category:</p>
            <div className={styles.item}>
                    <Select
                        style={{width: 160}}
                        placeholder="Search to Select">
                        {categories.map((category, index) => (
                            <Select.Option key={index} value={value} onChange={setValue} children={category}/>
                        ))}
                    </Select>
                </div>
            </div>
            <div className={styles.menu}>
                <p  className={styles.item}>Rate:</p>
                <div  className={styles.item}>
                    <Rate
                        // tooltips={desc} onChange={setValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default SiderProductsMenu;
import React, {useState} from 'react';
import {Layout, Menu, Rate, Select, theme} from 'antd';
import Sider from "antd/es/layout/Sider";
import styles from './ProductsPage.module.css'
import {Link} from "react-router-dom";
import CustomButton from "../../UI/CustomButton/CustomButton";


const { Content } = Layout;

function ProductsPage(props) {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    let onClick;
    let handleChange;

    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


    let setValue;
    let value;
    return (
        <Layout>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <div className={styles.menu}>
                        <h3 className={styles.item}>Sort by</h3>
                        <p  className={styles.item}>Price:</p>
                        <div  className={styles.item}>
                            <Select
                                defaultValue="low to high"
                                style={{
                                    width: 160,
                                }}
                                onChange={handleChange}
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
                                showSearch
                                style={{
                                    width: 160,
                                }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'men`s clothing',
                                    },
                                    {
                                        value: '2',
                                        label: 'women`s clothing',
                                    },
                                    {
                                        value: '3',
                                        label: 'jewelery & bags',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <p  className={styles.item}>Rate:</p>
                        <div  className={styles.item}>
                            <Rate
                                tooltips={desc} onChange={setValue} value={value}
                            />
                        </div>
                    </div>
                    <CustomButton>Apply Filters</CustomButton>
                </Sider>

                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap:'100px 100px'}}>
                           {props?.data?.map((item) =>
                               <div key={item.id} style={{width:'400px', height:'450px'}}>
                                   <Link to={`/products/${item.id}`}>
                                       <Rate value={item?.rating?.rate}
                                       />
                                       <img src={item.image} alt={item.title} style={{width:'270px', height:'350px', objectFit:'contain'}}/>
                                       <p>{item.title}</p>
                                       <p>$ {item.price}</p>
                                   </Link>
                               </div>
                           )}
                       </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default ProductsPage;
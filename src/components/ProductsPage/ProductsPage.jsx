import React from 'react';
import {Layout, Rate, theme} from 'antd';
import Sider from "antd/es/layout/Sider";
import {Link} from "react-router-dom";
import SiderProductsMenu from "../SiderProductsMenu/SiderProductsMenu";
import CustomButton from "../../UI/CustomButton/CustomButton";
import styles from './ProductsPage.module.css';
import Product from "../../pages/Product/Product"

const { Content } = Layout;

function ProductsPage({value, setValue, data}) {

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer, display:'flex'}}>
                    <SiderProductsMenu value={value} setValue={setValue}/>
                </Sider>

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                       <div className={styles.card}>
                           {data && data.map((item) =>
                               <div key={item.id} style={{width:'fit-content', height:'fit-content'}}>
                                   <Link to={`/products/${item.id}`}>
                                       <Rate value={item?.rating?.rate}
                                       />
                                       <img src={item?.image} alt={item.title} style={{width:'270px', height:'350px', objectFit:'contain'}}/>
                                       <p>{item?.title}</p>
                                       <p>$ {item?.price}</p>
                                   </Link>
                                   <div className={styles.button}>
                                      <CustomButton>Add to Cart</CustomButton>
                                   </div>
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
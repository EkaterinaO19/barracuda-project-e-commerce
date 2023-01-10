import React from 'react';
import {Layout, Rate, theme} from 'antd';
import Sider from "antd/es/layout/Sider";
import {Link} from "react-router-dom";
import SiderProductsMenu from "../SiderProductsMenu/SiderProductsMenu";


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
                       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap:'100px 100px'}}>
                           {data.map((item) =>
                               <div key={item.id} style={{width:'400px', height:'450px'}}>
                                   <Link to={`/product/${item.id}`}>
                                       <Rate value={item.rating.rate}
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
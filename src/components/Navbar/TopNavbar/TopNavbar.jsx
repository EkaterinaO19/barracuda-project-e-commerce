 import React from 'react';
import styles from './TopNavbar.module.css'
 import { DownOutlined } from '@ant-design/icons';
 import { Dropdown, Space } from 'antd';
 const items = [
     {
         label: <a href="https://www.antgroup.com">USD $</a>,
         key: '0',
     },
     {
         label: <a href="https://www.aliyun.com">EUR €</a>,
         key: '1',
     },

 ];


 function TopNavbar(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.item}>
                    Available 24/7 at <b>(405) 555-0128</b>
                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.item}>Delivery & returns</div>
                <div className={styles.item}>Track order</div>
                <div className={styles.item}>Blog</div>
                <div className={styles.item}>Contacts</div>
            </div>
            <div className={styles.right}>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space style={{'color': '#E5E5E5'}}>
                            Currency
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                <div className={styles.item}>
                 <div className={styles.item}>Log in / Register</div>
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;
import React from 'react';
import styles from './FashionBlog.module.css'
import CustomButton from "../../UI/CustomButton/CustomButton";
import {Card, Col, Row} from "antd";
import Meta from "antd/es/card/Meta";

function FashionBlog(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.title}>Fashion blog</div>
                <CustomButton>View blog</CustomButton>
            </div>
            <div className={styles.bottom}>
                <Row gutter={130}>
                    <Col >
                        <Card
                            description="This is the description"
                            bordered={true}
                            hoverable={true}
                            style={{ width: 500 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                />
                            }>
                            <Meta
                                title="Bag Trends for Summer 2020"
                                description="Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis..."
                            />
                        </Card>
                    </Col>
                    <Col >
                        <Card
                            description="This is the description"
                            bordered={true}
                            hoverable={true}
                            style={{ width: 500 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                />
                            }>
                            <Meta
                                title="Bag Trends for Summer 2020"
                                description="Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis..."
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FashionBlog;
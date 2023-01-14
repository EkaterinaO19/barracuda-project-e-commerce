import React, {useState} from 'react';
import ProductPage from "../../components/ProductPage/ProductPage";
import InstagramComponent from "../../components/InstagramComponent/InstagramComponent";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Spin} from "antd";
import {useParams} from "react-router-dom";

function Product() {
    let {id} = useParams();

    const fetchProduct = async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }


    const {data, isLoading, isError, error} = useQuery(['product', id], () => fetchProduct(id));

    if (isLoading) {
        return  <Spin tip="Loading" size="large">
            <div className="content" style={{height: '100vh'}} /></Spin>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }


    return (
        <>
            <ProductPage data={data}/>
            <InstagramComponent/>
        </>

    );
}

export default Product;
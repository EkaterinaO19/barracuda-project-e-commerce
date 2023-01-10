import React, {useState} from 'react';
import ProductsPage from "../../components/ProductsPage/ProductsPage";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import InstagramComponent from "../../components/InstagramComponent/InstagramComponent";
import SaleUp from "../../components/SaleUp/SaleUp";
import Pagination from "../../UI/Pagination/Pagination";


function Products() {

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(3)


    const fetchProductsList = async (value) => {
            const response = await axios.get(`https://fakestoreapi.com/products/${value}`);
            return response.data;
    }


    const [value, setValue] = useState('');

    const {data, isLoading, isError, error} = useQuery(['products', value], () => fetchProductsList(value));

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <>
            <ProductsPage data={currentProducts} value={value} setValue={setValue}/>
            <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                totalProducts={data.length}
                paginate={paginate}
            />
            <SaleUp/>
            <InstagramComponent/>
        </>
    );
}


export default Products;
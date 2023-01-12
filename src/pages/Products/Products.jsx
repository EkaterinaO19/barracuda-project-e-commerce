import React, {useState} from 'react';
import ProductsPage from "../../components/ProductsPage/ProductsPage";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import InstagramComponent from "../../components/InstagramComponent/InstagramComponent";
import SaleUp from "../../components/SaleUp/SaleUp";
import Pagination from "../../UI/Pagination/Pagination";


function Products(props) {

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(3)


    const fetchProductsList = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            return response.data;
    }

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProductsList,
    })

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
            <ProductsPage data={currentProducts}/>
            <Pagination
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
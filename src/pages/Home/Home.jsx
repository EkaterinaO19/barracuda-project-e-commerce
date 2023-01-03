import React from 'react';
import Slider from "../../components/Slider/Slider";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import Categories from "../../components/Categories/Categories";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import SaleUp from "../../components/SaleUp/SaleUp";
import PromoComponent from "../../components/PromoComponent/PromoComponent";
import InstagramComponent from "../../components/InstagramComponent/InstagramComponent";
import FashionBlog from "../../components/FashionBlog/FashionBlog";
import Partners from "../../components/Partners/Partners";

function Home(props) {
    return (
        <>
            <Slider/>
            <NewArrivals />
            <Categories/>
            <PopularCategories />
            <TrendingNow />
            <SaleUp/>
            <PromoComponent/>
            <InstagramComponent/>
            <FashionBlog/>
            <Partners/>
        </>
    );
}

export default Home;
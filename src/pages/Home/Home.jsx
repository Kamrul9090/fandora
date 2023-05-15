import React from 'react';
import Banner from './Banner/Banner';
import ContentCard from '../ContentCard/ContentCard';
import SearchBar from './SearchBar/SearchBar';
import Card from '../Card/Card';
import Product from '../Product/Product';
import Content from '../Content/Content';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <ContentCard></ContentCard>
            <Card></Card>
            <Product></Product>
            <Content></Content>
        </div>
    );
};

export default Home;
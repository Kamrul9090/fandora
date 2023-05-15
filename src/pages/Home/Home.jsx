import React from 'react';
import Banner from './Banner/Banner';
import ContentCard from '../ContentCard/ContentCard';
import SearchBar from './SearchBar/SearchBar';
import Card from '../Card/Card';
import Product from '../Product/Product';
import Content from '../Content/Content';
import Discover from '../Discover/Discover';
import ServiceCheck from '../ServiceCheck/ServiceCheck';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <ContentCard></ContentCard>
            <Card></Card>
            <ServiceCheck></ServiceCheck>
            <Product></Product>
            <Content></Content>
            <Discover></Discover>
        </div>
    );
};

export default Home;
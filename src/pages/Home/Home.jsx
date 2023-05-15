import React from 'react';
import Banner from './Banner/Banner';
import ContentCard from '../ContentCard/ContentCard';
import SearchBar from './SearchBar/SearchBar';
import Card from '../Card/Card';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <ContentCard></ContentCard>
            <Card></Card>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner/Banner';
import ContentCard from '../ContentCard/ContentCard';
import SearchBar from './SearchBar/SearchBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <ContentCard></ContentCard>
        </div>
    );
};

export default Home;
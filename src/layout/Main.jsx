import React from 'react';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
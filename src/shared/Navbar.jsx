import { useState } from 'react';
import React from 'react';

import logo from '../assets/vector/Group.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [change, setChange] = useState(false);
    console.log(change);
    const navItems = <>
        <Link to='/home'><li>Home</li></Link>
        <li>Key Features</li>
        <li>pre-NFT Rights</li>
        <li>Marketplace</li>
        <li className='text-cyan'>Login</li>
        <button className='btn'>Sign Up</button>
    </>;

    return (
        <>
            <div className="flex justify-evenly items-center py-[50px] lg:pt-[80px] font-bold h-9">
                <div className='flex items-center space-x-8'>
                    <img src={logo} className='w-6 lg:w-14 h-11 lg:h-24' alt="" srcSet="" />
                    <h1 className="text-3xl uppercase gradient">fandora</h1>
                </div>

                <div>
                    <ul className="lg:flex items-center space-x-10 text-[16px] hidden">
                        {navItems}
                    </ul>
                    {
                        change ?
                            <div className='bg-cyan absolute top-20 left-48 p-4'>
                                <ul className="items-center space-y-5 text-[16px] block lg:none">
                                    {navItems}
                                </ul>
                            </div>
                            :
                            ""
                    }
                </div>
                <button className='block lg:hidden' onClick={() => setChange(!change)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </button>
            </div>

        </>
    );
};

export default Navbar;
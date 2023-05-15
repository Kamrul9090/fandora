import React from 'react';
const SearchBar = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <h1 className="text-cyan-dark text-sm pt-10 pb-4 lg:text-xl lg:py-10 text-center lg:text-start">Know about the launch before everyone else</h1>
            <div className="flex flex-col lg:flex-row justify-evenly space-y-5 lg:space-y-0">
                <input className="w-[310px] mx-auto h-[41px] lg:w-[450.38px] lg:h-[74.21px] rounded-full border-4 border-border bg-dark text-rgb outline-none pl-9" type="search" placeholder="Enter Email Here" />
                <div className="flex mx-auto space-x-2 lg:space-x-5">
                    <button className="btn-lg">Sign Up</button>
                    <div className="space-x-2 lg:space-x-3 flex">
                        <span className="border-r-2 border-border my-2 lg:ml-2 hidden lg:block">
                        </span>
                        <button className="btn-sm">G</button>
                        <button className="btn-sm">in</button>
                        <button className="btn-sm">f</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SearchBar;
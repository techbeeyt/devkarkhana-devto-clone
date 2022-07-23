import React from 'react';
import SortBy from '../SortBy/SortBy';
import MobileSearchBar from './MobileSearchBar';

const SearchPage = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-full md:w-4/6 lg:w-4/6 px-3">
                {/* Top */}
                <div className="flex flex-col md:flex-row lg:flex-row justify-start lg:justify-between items-center">
                    <div className="md:mb-6 lg:mb-6 w-full">
                        <span className="text-3xl font-bold hidden md:block lg:block">Search Result for</span>
                        <div className="block md:hidden lg:hidden">
                            <MobileSearchBar />
                        </div>
                    </div>
                    <div>
                        <SortBy />
                    </div>
                </div>
                {/* Search Result */}
                <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start">
                    <div className="w-full md:px-4 lg:px-4 md:w-1/4 lg:w-1/4">
                        <ul className="flex md:block lg:block gap-4 overflow-x-scroll md:overflow-x-visible py-4">
                            
                        </ul>
                    </div>
                    <div className="w-full md:w-3/4 lg:w-3/4">
                        Posts List
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
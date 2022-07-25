import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/AppState';

import SortBy from '../SortBy/SortBy';
import MobileSearchBar from './MobileSearchBar';
import { filterBy as filterByData } from './FilterByData';
import { sortByData } from '../SortBy/SortByData';
import Filter from './Filter';
import { useLocation } from 'react-router-dom';
import Footer from './../Footer/Footer';


const SearchPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const search_query = param.get('q');
    useEffect(() => {
        dispatch(setSearchQuery(search_query));
    },[])
    const searchQuery = useSelector(state => state.AppState.searchQuery);
    const [selectedFilter, setSelectedFilter] = useState(0);
    return (
        <>
        <div className="flex justify-center items-center w-full mb-10">
            <div className="w-full md:w-4/6 lg:w-4/6 px-3">
                {/* Top */}
                <div className="md:mt-4 lg:mt-4 flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-start">
                    <div className="md:mb-6 lg:mb-6 w-full">
                        <span className="text-3xl font-bold hidden md:block lg:block">Search Result for {searchQuery}</span>
                        <div className="block md:hidden lg:hidden">
                            <MobileSearchBar />
                        </div>
                    </div>
                    <div className="px-1 flex items-center gap-4 w-full">
                        {
                            sortByData.map((item, i) => {
                                return <SortBy key={i} item={item} />
                            })
                        }
                    </div>
                </div>
                {/* Search Result */}
                <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start">
                    <div className="w-full px-1 md:px-4 lg:px-4 md:w-1/4 lg:w-1/4">
                        {
                            filterByData.map((item, i) => {
                                console.log('index: '+ i);
                                return <Filter item={item} selected={selectedFilter} setSelect={setSelectedFilter} />
                            })
                        }
                    </div>
                    <div className="w-full md:w-3/4 lg:w-3/4">
                        {
                            `Showing Data`
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default SearchPage;
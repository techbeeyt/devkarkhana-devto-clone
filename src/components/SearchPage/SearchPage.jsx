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
import { posts } from '../../assets/database/posts';
import BlogContainer from '../BlogFeed/BlogContainer';


const SearchPage = () => {
    const [feed, setFeed] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const search_query = param.get('q');
    const [filter, setFilter] = useState('posts');

    useEffect(() => {
        if(param.get('filter')){
            setFilter(param.get('filter'));
        }
        dispatch(setSearchQuery(search_query));
        switch(filter) {
            case 'posts': 
                {
                    setFeed(posts);
                    break;
                }
            
            default:  
                {
                    setFeed(posts);
                }
        }
    },[param])
    const searchQuery = useSelector(state => state.AppState.searchQuery);
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [selectedSort, setSelectedSort] = useState(0);
    return (
        <>
        <div className="flex justify-center items-center w-full mb-10">
            <div className="w-full lg:w-4/6 px-3">
                {/* Top */}
                <div className="md:mb-4 lg:mb-4 md:mt-4 lg:mt-4 flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-start md:items-center lg:items-center">
                    <div className="w-full">
                        <span className="text-3xl font-bold hidden md:block lg:block">Search Result for {searchQuery}</span>
                        <div className="block md:hidden lg:hidden">
                            <MobileSearchBar />
                        </div>
                    </div>
                    <div className="mb-2 md:mb-0 lg:mb-0 px-1 flex items-center justify-start md:justify-end lg:justify-end gap-4 w-full">
                        {
                            sortByData.map((item, i) => {
                                return <SortBy key={i} item={item} selected={selectedSort} setSelected={setSelectedSort} />
                            })
                        }
                    </div>
                </div>
                {/* Search Result */}
                <div className="flex flex-col md:flex-row lg:flex-row justify-start items-center md:items-start lg:items-start">
                    <div className="w-full flex gap-4 md:block lg:block px-1 md:px-4 lg:px-4 md:w-1/4 lg:w-1/4  overflow-x-scroll md:overflow-x-auto lg:overflow-auto mb-2 md:mb-0 lg:mb-0">
                        {
                            filterByData.map((item, i) => {
                                return <Filter item={item} selected={selectedFilter} setSelect={setSelectedFilter} />
                            })
                        }
                    </div>
                    <div className="w-full md:w-3/4 lg:w-3/4">
                        {
                            feed.map(item => {
                                if(filter === 'posts'){
                                    if(item.post_body.toLowerCase().includes(searchQuery.toLowerCase())){
                                        return <BlogContainer post={item} />
                                    }
                                    else {
                                        return null;
                                    }
                                }else if(filter === 'podcasts'){
                                    return <div className="rounded-md overflow-hidden mb-2 bg-white border border-gray-300 active:outline active:outline-3 active:outline-indigo-600 flex justify-center items-center py-8">No podcasts found with this query</div>
                                }
                                else if(filter === 'people'){
                                    return <div className="rounded-md overflow-hidden mb-2 bg-white border border-gray-300 active:outline active:outline-3 active:outline-indigo-600 flex justify-center items-center py-8">No people found with this query</div>
                                }
                                else if(filter === 'tags'){
                                    return <div className="rounded-md overflow-hidden mb-2 bg-white border border-gray-300 active:outline active:outline-3 active:outline-indigo-600 flex justify-center items-center py-8">No tags found with this query</div>
                                }
                                else if(filter === 'comments'){
                                    return <div className="rounded-md overflow-hidden mb-2 bg-white border border-gray-300 active:outline active:outline-3 active:outline-indigo-600 flex justify-center items-center py-8">No comments found with this query</div>
                                }
                                else if(filter === 'my-posts-only'){
                                    return <div className="rounded-md overflow-hidden mb-2 bg-white border border-gray-300 active:outline active:outline-3 active:outline-indigo-600 flex justify-center items-center py-8">No my-posts-only found with this query</div>
                                }
                            })
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
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/AppState';
import { CgSearch } from 'react-icons/cg';
import { useLocation, useNavigate } from 'react-router-dom';

const MobileSearchBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    return (
        <div className="w-full my-3 bg-white border border-gray-300 rounded-md overflow-hidden flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-indigo-600">
            <input type="text" className="px-2 focus:outline-none w-full" placeholder="Search..." value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            }}/>
            <button className="h-9 w-9 flex justify-center items-center rounded-md hover:bg-purple-100" onClick={() => {
                const param = new URLSearchParams(location.search);
                let paramObj = {};
                for(const [key, value] of param) {
                    paramObj[key] = value;
                }
                const params = new URLSearchParams({ ...paramObj, "q": searchText });
                dispatch(setSearchQuery(searchText));
                if(searchText.length > 0) navigate({pathname: location.pathname, search: params.toString()});
            }}>
                <CgSearch size={24}/>
            </button>
        </div>
    );
};

export default MobileSearchBar;
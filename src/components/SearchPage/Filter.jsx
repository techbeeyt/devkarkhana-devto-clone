import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Filter = ({ item }) => {
    // eslint-disable-next-line
    const [filter, setFilter] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const doFilter = (e) => {
        for(var i = 0; i < 6 ; i++){
            e.target.parentElement.children[i].classList.remove('font-bold');
            e.target.parentElement.children[i].classList.remove('bg-white');
        }
        e.target.classList.add("font-bold");
        e.target.classList.add("bg-white");
        const param = new URLSearchParams(location.search);
        let paramObj = {};
        for(const [key, value] of param) {
            paramObj[key] = value;
        }
        const params = new URLSearchParams({ ...paramObj, "filter": item.name });
        navigate({pathname: location.pathname, search: params.toString()});
        setFilter(param.get('filter'));
    }
    
    return (
        <div onClick={doFilter} data-filter={item.name} className={`md:p-2 lg:p-2 md:hover:bg-white lg:hover:bg-white hover:text-gray-700 md:hover:text-indigo-600 lg:hover:text-indigo-600 rounded-md group cursor-pointer`}>
            {item.title}
        </div>
    );
};

export default Filter;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SortBy = ({ item }) => {
    useEffect(() => {
        
    },[])
    // eslint-disable-next-line
    const [sort, setSort] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const doSort = (e) => {
        for(var i = 0; i < 3 ; i++){
            e.target.parentElement.children[i].classList.remove('font-bold');
        }
        e.target.classList.add("font-bold");

        const param = new URLSearchParams(location.search);
        let paramObj = {};
        for(const [key, value] of param) {
            paramObj[key] = value;
        }
        const params = new URLSearchParams({ ...paramObj, "sort": item.name });
        navigate({pathname: location.pathname, search: params.toString()});
        setSort(param.get('sort'));
    }
    return (
        <div data-sort={item.name} className='cursor-pointer whitespace-nowrap' onClick={doSort}>{item.title}</div>
    );
};

export default SortBy;
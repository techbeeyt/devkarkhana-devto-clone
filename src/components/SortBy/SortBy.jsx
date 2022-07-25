import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SortBy = ({ item }) => {
    // eslint-disable-next-line
    const [sort, setSort] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const doSort = () => {
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
        <div data-sort={item.name} className='whitespace-nowrap' onClick={doSort}>{item.title}</div>
    );
};

export default SortBy;
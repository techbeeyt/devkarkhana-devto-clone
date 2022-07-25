import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Filter = ({ item, selected, setSelect }) => {
    console.log({ item, selected, setSelect });
    setSelect(item.id);
    // eslint-disable-next-line
    const [filter, setFilter] = useState('');
    const [selClass, setClass] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const doFilter = (e) => {
        for(var i = 0; i < 6 ; i++){
            e.target.parentElement.children[i].classList.remove('font-semibold');
            e.target.parentElement.children[i].classList.remove('bg-white');
        }
        e.target.classList.add("font-semibold");
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

    useEffect(() => {
        const param = new URLSearchParams(location.search);
        const filter = param.get('filter');
        if(selected === item.id){
            if(!filter){
                setClass('bg-white font-semibold');
            }else {
                setClass('');
            }

        }
        //eslint-disable-next-line
    },[])

    useEffect(() => {
        const param = new URLSearchParams(location.search);
        const filter = param.get('filter');
        // eslint-disable-next-line
        if(item.name === filter){
            setClass('bg-white font-semibold');
        }
        //eslint-disable-next-line
    },[])
    
    return (
        <div onClick={doFilter} data-filter={item.name} className={`${selClass} md:p-2 lg:p-2 md:hover:bg-white lg:hover:bg-white hover:text-gray-700 md:hover:text-indigo-600 lg:hover:text-indigo-600 rounded-md group cursor-pointer`}>
            {item.title}
        </div>
    );
};

export default Filter;
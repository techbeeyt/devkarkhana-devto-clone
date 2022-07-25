import React from 'react';
import { useLocation } from 'react-router-dom';

const HoverDiv2 = ({ children, isSelected }) => {
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const data = children.toString().toLowerCase();

    return (
        <div className={`${(data.match(param.get('filter'))) ? 'font-semibold md:bg-white lg:bg-white' : null } md:p-2 lg:p-2 md:hover:bg-white lg:hover:bg-white hover:text-gray-700 md:hover:text-indigo-600 lg:hover:text-indigo-600 rounded-md group cursor-pointer`}>
            {children}
        </div>
    );
};

export default HoverDiv2;
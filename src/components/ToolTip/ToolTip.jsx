import React, { useState } from 'react';

const ToolTip = ({ title, children }) => {
    const [show, setShow] = useState(false);
    const [showing, setShowing] = useState('opacity-0  -translate-y-4');
    

    const mouseEnter = () => {
        setShowing('opacity-1 translate-y-0 delay-300');
    }
    const mouseLeave = () => {
        setShowing('opacity-0 -translate-y-2');
    }
    return (
        <div className="relative" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>  
            {children}
            <div className={`${showing} transition-all duration-300 absolute px-2 py-1 rounded-md bg-gray-800 -bottom-10 left-0`}>
                        <span className="text-gray-200 whitespace-nowrap">{title}</span>
            </div>
        </div>
    );
};

export default ToolTip;
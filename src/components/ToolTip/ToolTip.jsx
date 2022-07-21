import React, { useState } from 'react';

const ToolTip = ({ title, children }) => {
    const [show, setShow] = useState(false);
    

    const mouseEnter = () => {
        setShow(true);
    }
    const mouseLeave = () => {
        setShow(false);
    }
    return (
        <div className="relative" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>  
            {children}
            {
                show ? (
                    <div className="absolute px-2 rounded-sm bg-gray-800 -bottom-5 left-4">
                        <span className="text-xs text-gray-200">{title}</span>
                    </div>
                ) : null
            }
        </div>
    );
};

export default ToolTip;
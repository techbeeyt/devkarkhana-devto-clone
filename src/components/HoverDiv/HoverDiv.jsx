import React from 'react';

const HoverDiv = ({ children }) => {
    return (
        <div className="p-2 hover:bg-purple-200 hover:text-indigo-800 hover:underline rounded-md group">
            {children}
        </div>
    );
};

export default HoverDiv;
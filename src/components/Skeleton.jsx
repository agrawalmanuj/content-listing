import React from 'react';
import './Skeleton.css';

const Skeleton = () => {
    return (
        <div className="skeleton-item">
            <div className="skeleton-poster"></div>
            <div className="skeleton-title"></div>
        </div>
    );
};

export default Skeleton;
import React from 'react';
import ContentItem from './ContentItem';
import Skeleton from './Skeleton';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './ContentGrid.css';
import FallbackContent from './FallbackContent';

const ContentGrid = ({ items, loading, hasMore, loadMore, searchActive, searchQuery }) => {
    const observerRef = useIntersectionObserver(loadMore, { rootMargin: '500px 0px' });
    return (
        <div className="content-grid-container">
            <div className="content-grid">
                {items.map((item, index) => (
                    <ContentItem
                        key={`${item.name}-${index}-${item['poster-image']}`}
                        item={item}
                    />
                ))}
                {/* Skeleton placeholders for loading */}
                {loading && (
                    <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </>
                )}
            </div>
            {(!loading && !items.length) && (
                <FallbackContent searchQuery={searchQuery} />
            )}
            {/* Invisible element for intersection observer */}
            {(hasMore && (!searchActive || (searchActive && !searchQuery))) && <div ref={observerRef} className="loading-trigger"></div>}
        </div>
    );
};

export default ContentGrid;
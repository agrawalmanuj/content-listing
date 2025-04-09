import React, { useState } from 'react';
import './ContentItem.css';
import { BASE_URL } from '../const';

const ContentItem = ({ item }) => {
    const [imageError, setImageError] = useState(false);

    // Handle image loading errors (for edge cases in page 3)
    const handleImageError = () => {
        setImageError(true);
    };

    // Format the poster path correctly
    const formatPosterPath = (posterPath) => {
        if (!posterPath) return null;

        // Make sure we're using the correct path format
        const formattedPath = posterPath.startsWith('https://')
            ? posterPath
            : `${BASE_URL}/images/${posterPath}`;

        return formattedPath;
    };

    const posterUrl = formatPosterPath(item['poster-image']);
    const placeholderUrl = `${BASE_URL}/images/placeholder_for_missing_posters.png`;

    return (
        <div className="content-item">
            <div className="poster-container">
                {posterUrl ? (
                    <img
                        src={imageError ? placeholderUrl : posterUrl}
                        alt={item.name}
                        className="poster-image"
                        loading="lazy"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="fallback-poster">
                        <span className="fallback-text">{item.name}</span>
                    </div>
                )}
            </div>
            <h3 className="content-title">{item.name}</h3>
        </div>
    );
};

export default ContentItem;
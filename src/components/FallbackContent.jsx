import React from 'react'
import './FallbackContent.css'

function FallbackContent({ searchQuery }) {
    return (
        <div className='fallback-container'>
            <div>
                Your search for "{searchQuery}" did not find any matches.
                <div className='fallback-container-suggestions'>Suggestions:</div>
                <ul className='fallback-container-suggestions-list'>
                    <li>Try different keywords</li>
                    <li>Looking for a movie or TV show?</li>
                    <li>Try using a movie or TV show title.</li>
                </ul>
            </div>
        </div>
    )
}

export default FallbackContent
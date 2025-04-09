import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch, updateSearchQuery } from '../redux/slices/searchSlice';
import './SearchBar.css';
import { BASE_URL } from '../const';

const SearchBar = () => {
    const dispatch = useDispatch();
    const { searchQuery } = useSelector(state => state.search);

    const handleChange = (e) => {
        dispatch(updateSearchQuery(e.target.value));
    };

    const handleToggleSearch = () => {
        if (!searchQuery.trim())
            dispatch(toggleSearch());
    };

    return (
        <div className="search-bar">
            <div className="search-input-container">
                <img
                    src={`${BASE_URL}/images/search.png`}
                    alt="Search"
                    className="search-input-icon"
                />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder="Search"
                    className="search-input"
                    autoFocus
                    onBlur={handleToggleSearch}
                />
            </div>
        </div>
    );
};

export default SearchBar;
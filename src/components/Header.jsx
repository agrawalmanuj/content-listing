import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../redux/slices/searchSlice';
import './Header.css';
import SearchBar from './SearchBar';
import { BASE_URL } from '../const';

const Header = ({ title }) => {
    const dispatch = useDispatch();
    const { searchActive } = useSelector(state => state.search);

    const handleToggleSearch = () => {
        dispatch(toggleSearch());
    };

    return (
        <header className="header">
            <div className="header-container">
                <button className="back-button">
                    <img
                        src={`${BASE_URL}/images/Back.png`}
                        alt="Back"
                        className="back-icon"
                    />
                </button>
                {searchActive ? <SearchBar /> : <h1 className="header-title">{title}</h1>}
                <button className="search-button" onClick={handleToggleSearch}>
                    {!searchActive && (<img
                        src={`${BASE_URL}/images/search.png`}
                        alt="Search"
                        className="search-icon"
                    />)}
                </button>
            </div>
        </header>
    );
};

export default Header;
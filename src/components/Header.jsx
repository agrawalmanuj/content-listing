import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSearchState, toggleSearch } from '../redux/slices/searchSlice';
import './Header.css';
import SearchBar from './SearchBar';
import { BASE_URL } from '../const';
import { resetContentState } from '../redux/slices/contentSlice';
import { fetchContentPage } from '../redux/thunks/contentThunks';

const Header = ({ title }) => {
    const dispatch = useDispatch();
    const { searchActive } = useSelector(state => state.search);

    const handleToggleSearch = () => {
        dispatch(toggleSearch());
    };

    const handleBack = () => {
        dispatch(resetSearchState());
        dispatch(resetContentState());
        dispatch(fetchContentPage(1));
    }

    return (
        <header className="header">
            <div className="header-container">
                <button className="back-button" onClick={handleBack}>
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
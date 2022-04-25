import React from 'react';
import Icon from './icon/icon.js';
import SearchBar from './searchBar/searchBar.js';
import Navbar from './navbar/navbar.js';

export default function Header() {
    return (
        <div id='containerHeader'>
            <div id='top'>
                <Icon />
                <SearchBar />
            </div>
            <Navbar />
        </div>
    );
}

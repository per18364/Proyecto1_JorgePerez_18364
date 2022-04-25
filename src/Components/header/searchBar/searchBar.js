import React from 'react';
import './searchBar.css';

export default function SearchBar() {
    return (
        <div id='searchBar'>
            <form action=''>
                <input id='search' placeholder='Search engine' type='text' />
            </form>
        </div>
    );
}

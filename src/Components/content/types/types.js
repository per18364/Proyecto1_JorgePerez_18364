import React from 'react';
import './types.css';
import { FaBars, FaListUl, FaThLarge } from 'react-icons/fa';

export default function Types() {
    return (
        <>
            <a className='types' id='layout' href=''>
                <FaThLarge />
            </a>
            <a className='types' id='list' href=''>
                <FaListUl />
            </a>
            <a className='types' id='normal' href=''>
                <FaBars />
            </a>
        </>
    );
}

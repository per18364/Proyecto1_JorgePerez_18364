import React from 'react';
import './side.css';
import { IoIosReturnRight } from 'react-icons/io';

export default function Category({ cat }) {
    return (
        <div id='category'>
            <IoIosReturnRight id='return' />
            <p id='catName'>{cat.src}</p>
            <div id='number'>{cat.number}</div>
        </div>
    );
}

import React from 'react';
import './nextPage.css';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function NextPage() {
    return (
        <div id='nextPages'>
            <a id='mainbtn'>1</a>
            <a id='btn'>2</a>
            <a id='btn'>3</a>
            <a id='btn'>4</a>
            <a id='btn'>
                <FaAngleDoubleRight />
            </a>
            <a id='Last'>Last</a>
        </div>
    );
}

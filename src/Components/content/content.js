import React from 'react';
import './content.css';
import Types from './types/types.js';
import Side from './side/side.js';

export default function Content() {
    return (
        <>
            <div id='contentTitle'>
                <h3>
                    <b>Latest Manga Updates</b>
                </h3>
                <Types />
            </div>
            <div id='sideContent'>
                <Side />
            </div>
            <div id='mainContent'></div>
        </>
    );
}

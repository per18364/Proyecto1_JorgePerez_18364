import React from 'react';
import './side.css';

export default function Thumbnail({ name }) {
    return (
        <a id='thumbnail'>
            <img id='preview' src={name.src} width='32px' height='52px' />
        </a>
    );
}

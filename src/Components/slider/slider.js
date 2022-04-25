import React from 'react';
import './slider.css';
import Slides from './slides/slides.js';

export default function Slider() {
    return (
        <div id='containerSlider'>
            <div id='bodySlider'>
                <Slides />
            </div>
            <ul id='pages'>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
            </ul>
        </div>
    );
}

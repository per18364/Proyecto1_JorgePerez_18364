import React from 'react';
import './slider.css';
import Slides from './slides/slides.js';
import Pages from './pages/pages.js';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export default function Slider() {
    return (
        <div id='containerSlider'>
            <div id='bodySlider'>
                <Slides />
            </div>
            <ul id='pages'>
                <Pages />
            </ul>
            <div id='left'>
                <FaAngleLeft />
            </div>
            <div id='right'>
                <FaAngleRight />
            </div>
        </div>
    );
}

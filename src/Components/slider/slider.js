import React from 'react';

export default function Slider() {
    return (
        <div id='containerSlider'>
            <div id='bodySlider'>
                <div id='slides'>
                    <div id='slide'>
                        <div id='img'></div>
                        <div id='title'></div>
                    </div>
                    <div id='slide'>
                        <div id='img'></div>
                        <div id='title'></div>
                    </div>
                </div>
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

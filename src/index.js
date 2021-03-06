import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/header/header.js';
import Slider from './Components/slider/slider.js';
import Content from './Components/content/content.js';
import Footer from './Components/footer/footer.js';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Slider />, document.getElementById('slider'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

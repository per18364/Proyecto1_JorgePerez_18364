import React from 'react';
import './side.css';
import { IoMdEye } from 'react-icons/io';

export default function Views({ views }) {
    return (
        <div id='count'>
            <span id='iconEye'>
                <IoMdEye id='eye' />
            </span>
            <span id='views'> Viewes {views.views} times</span>
        </div>
    );
}

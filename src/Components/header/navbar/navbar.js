import React from 'react';
import './navbar.css';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { IoLogInOutline } from 'react-icons/io5';

export default function Navbar() {
    return (
        <div id='navbar'>
            <div id='home'>
                <a id='main' className='link' href=''>
                    <FaHome />
                    <b>HOME</b>
                </a>
                <a className='link' href=''>
                    <b>MANGA LIST</b>
                </a>
                <a className='link' href=''>
                    <b>HOT MANGA</b>
                </a>
                <a className='link' href=''>
                    <b>LATEST RELEASES</b>
                </a>
                <a className='link' href=''>
                    <b>ADVANCED SEARCH</b>
                </a>
            </div>
            <div id='user'>
                <a className='link' href=''>
                    <FaUserAlt />
                    <b>SIGN UP</b>
                </a>
                <a className='link' href=''>
                    <IoLogInOutline />
                    <b>LOGIN</b>
                </a>
            </div>
        </div>
    );
}

import React from 'react';
import './navbar.css';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { IoLogInOutline } from 'react-icons/io5';

export default function Navbar() {
    return (
        <div id='navbar'>
            <div id='home'>
                <a href=''>
                    <FaHome />
                    <b>HOME</b>
                </a>
                <a href=''>
                    <b>MANGA LIST</b>
                </a>
                <a href=''>
                    <b>HOT MANGA</b>
                </a>
                <a href=''>
                    <b>LATEST RELEASES</b>
                </a>
                <a href=''>
                    <b>ADVANCED SEARCH</b>
                </a>
            </div>
            <div id='user'>
                <a href=''>
                    <FaUserAlt />
                    <b>SIGN UP</b>
                </a>
                <a href=''>
                    <IoLogInOutline />
                    <b>LOGIN</b>
                </a>
            </div>
        </div>
    );
}

import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaRss } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <div id='info'>
                <ul id='footerInfo'>
                    <li id='options'>
                        <a>Sitemap</a>
                    </li>
                    <li id='options'>
                        <a id='text'>Advertisement</a>
                    </li>
                    <li id='options'>
                        <a id='text'>Privacy & Policy</a>
                    </li>
                    <li id='options'>
                        <a id='text'>Terms of Service</a>
                    </li>
                    <li id='options'>
                        <a id='text'>Contact us</a>
                    </li>
                </ul>
                <ul id='socials'>
                    <li id='network' className='Facebook'>
                        <FaFacebookF />
                    </li>
                    <li id='network' className='Insta'>
                        <FaInstagram />
                    </li>
                    <li id='network' className='Rss'>
                        <FaRss />
                    </li>
                </ul>
            </div>
            <div id='copyright'>
                Copyrights and trademarks for the manga, and other promotional
                materials are held by their respective owners and their use is
                allowed under the fair use clause of the Copyright Law. © 2016 -
                2022 ReadManga.Today
            </div>
        </>
    );
}

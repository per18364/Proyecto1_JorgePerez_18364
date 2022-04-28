import React from 'react';
import './side.css';
import { FaPaperclip, FaHeart, FaAngleRight } from 'react-icons/fa';
import { IoIosChatboxes, IoMdRepeat } from 'react-icons/io';
import { RiMovie2Fill } from 'react-icons/ri';
import Thumbnail from './thumbnail.js';
import Views from './views.js';
import Category from './category.js';

const popularNames = [
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1545316977.png',
        views: '28,937,923',
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1440372418.jpg',
        views: '27,549,787',
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/0001_376.jpg',
        views: '22,249,743',
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/0001_576.jpg',
        views: '22,148,759',
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/0001_667.jpg',
        views: '21,634,046',
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/4f28b6a2a8453e807dd3a11a16a7108b_8.png',
        views: '19,876,247',
    },
];

const cats = [
    { src: 'Action', number: '4150' },
    { src: 'Adventure', number: '2270' },
    { src: 'Comedy', number: '6437' },
    { src: 'Doujinshi', number: '523' },
    { src: 'Drama', number: '4898' },
    { src: 'Ecchi', number: '1424' },
    { src: 'Fantasy', number: '3558' },
    { src: 'Gender Bender', number: '613' },
    { src: 'Harem', number: '652' },
    { src: 'Historical', number: '938' },
    { src: 'Horror', number: '768' },
    { src: 'Josei', number: '765' },
    { src: 'Lolicon', number: '6' },
    { src: 'Martial Arts', number: '660' },
    { src: 'Mature', number: '906' },
    { src: 'Mecha', number: '256' },
    { src: 'Mystery', number: '1067' },
    { src: 'One shot', number: '1858' },
    { src: 'Psychological', number: '913' },
    { src: 'Romance', number: '7440' },
    { src: 'School Life', number: '4213' },
    { src: 'Sci-fi', number: '536' },
    { src: 'Seinen', number: '2536' },
    { src: 'Shotacon', number: '6' },
    { src: 'Shoujo', number: '4771' },
    { src: 'Shoujo Ai', number: '532' },
    { src: 'Shounen', number: '3306' },
    { src: 'Shounen Ai', number: '813' },
    { src: 'Slice of Life', number: '2147' },
    { src: 'Smut', number: '350' },
    { src: 'Sports', number: '546' },
    { src: 'Supernatural', number: '2793' },
    { src: 'Tragedy', number: '811' },
    { src: 'Yaoi', number: '1400' },
    { src: 'Yuri', number: '285' },
    { src: 'Manwha', number: '157' },
];

export default function Side() {
    return (
        <>
            <div id='title'>
                <span id='icons'>
                    <FaPaperclip id='clip' />
                </span>
                <h3 id='subtitle'>
                    <b>Sponsored Website</b>
                </h3>
            </div>
            <p></p>
            <div></div>
            <p></p>
            <br />
            <div id='title'>
                <span id='icons'>
                    <IoIosChatboxes id='chatBox' />
                </span>
                <h3 id='subtitle'>
                    <b>CHATBOX</b>
                </h3>
            </div>
            <br />
            <div id='chat'>
                <button id='reconnect'>Reconnect</button>
            </div>
            <div id='title'>
                <span id='icons'>
                    <FaHeart id='heart' />
                </span>
                <h3 id='subtitle'>
                    <b>DONATE</b>
                </h3>
            </div>
            <div id='donations'>
                <p id='request'>
                    If you can afford to, please consider a donation... We need
                    it for buying raws and more manpower to release faster
                </p>
                <p id='request'>
                    <b>RMT Team</b>
                </p>
                <p className='donate'>
                    <a id='donate'>
                        <b>DONATE</b>
                    </a>
                </p>
            </div>
            <div id='title'>
                <span id='icons'>
                    <RiMovie2Fill id='movie' />
                </span>
                <h3 id='subtitle'>
                    <b>POPULAR MANGA</b>
                </h3>
            </div>
            <div id='popularMangas'>
                <div id='popular'>
                    <ul id='popularList'>
                        <li id='item'>
                            <Thumbnail name={popularNames[0]} />
                            <div id='popularInfo'>
                                <a id='black'>Battle Through The Heavens</a>
                                <a id='blue'>
                                    Battle Through The Heavens - 348
                                </a>
                                <Views views={popularNames[0]} />
                            </div>
                        </li>
                        <li id='item'>
                            <Thumbnail name={popularNames[1]} />
                            <div id='popularInfo'>
                                <a id='black'>Tales of Demons and Gods</a>
                                <a id='blue'>
                                    Tales of Demons and Gods - 377.1
                                </a>
                                <Views views={popularNames[1]} />
                            </div>
                        </li>
                        <li id='item'>
                            <Thumbnail name={popularNames[2]} />
                            <div id='popularInfo'>
                                <a id='black'>Soul Land</a>
                                <a id='blue'>Soul Land - 301</a>
                                <Views views={popularNames[2]} />
                            </div>
                        </li>
                        <li id='item'>
                            <Thumbnail name={popularNames[3]} />
                            <div id='popularInfo'>
                                <a id='black'>Kingdom</a>
                                <a id='blue'>Kingdom - 715</a>
                                <Views views={popularNames[3]} />
                            </div>
                        </li>
                        <li id='item'>
                            <Thumbnail name={popularNames[4]} />
                            <div id='popularInfo'>
                                <a id='black'>The Ruler of The Land</a>
                                <a id='blue'>The Ruler of The Land - 629</a>
                                <Views views={popularNames[4]} />
                            </div>
                        </li>
                        <li id='item'>
                            <Thumbnail name={popularNames[5]} />
                            <div id='popularInfo'>
                                <a id='black'>Tower of God</a>
                                <a id='blue'>Tower of God - 540</a>
                                <Views views={popularNames[5]} />
                            </div>
                        </li>
                    </ul>
                </div>
                <p id='refresh'>
                    <IoMdRepeat /> See all
                </p>
            </div>
            <div id='title'>
                <span id='icons'>
                    <FaAngleRight id='angleRight' />
                </span>
                <h3 id='subtitle'>
                    <b>All Categories</b>
                </h3>
            </div>
            <div id='categories'>
                <Category cat={cats[0]} />
                <Category cat={cats[1]} />
                <Category cat={cats[2]} />
                <Category cat={cats[3]} />
                <Category cat={cats[4]} />
                <Category cat={cats[5]} />
                <Category cat={cats[6]} />
                <Category cat={cats[7]} />
                <Category cat={cats[8]} />
                <Category cat={cats[9]} />
                <Category cat={cats[10]} />
                <Category cat={cats[11]} />
                <Category cat={cats[12]} />
                <Category cat={cats[13]} />
                <Category cat={cats[14]} />
                <Category cat={cats[15]} />
                <Category cat={cats[16]} />
                <Category cat={cats[17]} />
                <Category cat={cats[18]} />
                <Category cat={cats[19]} />
                <Category cat={cats[20]} />
                <Category cat={cats[21]} />
                <Category cat={cats[22]} />
                <Category cat={cats[23]} />
                <Category cat={cats[24]} />
                <Category cat={cats[25]} />
                <Category cat={cats[26]} />
                <Category cat={cats[27]} />
                <Category cat={cats[28]} />
                <Category cat={cats[29]} />
                <Category cat={cats[30]} />
                <Category cat={cats[31]} />
                <Category cat={cats[32]} />
                <Category cat={cats[33]} />
                <Category cat={cats[34]} />
                <Category cat={cats[35]} />
            </div>
            <div id='title'>
                <span id='icons'>
                    <FaAngleRight id='angleRight' />
                </span>
                <h3 id='subtitle'>
                    <b>Isekai</b>
                </h3>
            </div>
        </>
    );
}

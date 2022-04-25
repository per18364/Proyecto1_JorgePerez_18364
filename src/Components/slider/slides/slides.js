import React from 'react';
import './slides.css';
import Slide from './slide.js';

const Mangas = [
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1568969748.jpg',
        name: 'My Amazing Wechat - 460',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1584538670.jpg',
        name: 'Reverse Villain - 99',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1565191394.jpg',
        name: 'Rebirth of the Urben Immortal Cultivator - 749',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1585923727.jpg',
        name: 'Overgeared (2020) - 125',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1565869955.jpg',
        name: 'Versatile Mage - 859',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1565120733.jpg',
        name: 'Apotheosis - Elevation to the status of a god -',
        views: 5601301,
    },
];
const Mangas2 = [
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1577381871.jpg',
        name: 'Magic Emperor - 280',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1527261612.png',
        name: 'Volcanic Age - 201',
        views: 1128708,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1552035230.jpg',
        name: 'The Last Human - 442',
        views: 3072832,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1570309412.jpg',
        name: 'OtherWorld Warrior - 197',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/0001_376.jpg',
        name: 'Soul Land - 301',
        views: 22249743,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1440372418.jpg',
        name: 'Tales of Demons and Gods - 376.6',
        views: 27549787,
    },
];
const Mangas3 = [
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1552035127.jpg',
        name: 'The Begginning After the End - 142',
        views: 242599,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1546361845.jpg',
        name: 'Against the Gods - 479',
        views: 858912,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1569083339.jpeg',
        name: 'Virtual World: Close Combat Mage - 270',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1574422559.jpg',
        name: 'The Great Mage Returns After 4000 Years',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1529422565.jpg',
        name: 'The Lord of No Boundary - 203',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1545838301.jpg',
        name: 'Haikyuu!! - 402.5',
        views: 5030501,
    },
];
const Mangas4 = [
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1566636622.jpg',
        name: 'I have a Mansion in The post-Apocalyptic',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1547203467.jpg',
        name: 'The Legend Of The demon God - 247',
        views: 0,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1543796755.png',
        name: 'The Gamer - 420',
        views: 14395524,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1533124046.png',
        name: 'A Returners Magic Should be Special - ',
        views: 2763783,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1465762179.jpg',
        name: 'Peerless Dad - 216',
        views: 1531292,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1453160530.jpg',
        name: 'Soul Land lll: The Legend of The Dragon',
        views: 2272668,
    },
];
const Mangas5 = [
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1461242075.jpg',
        name: 'Black Clover - 331',
        views: 11236209,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1464879922.jpg',
        name: 'One Piece - 1047',
        views: 18151122,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1544607555.png',
        name: 'My Hero Academia - 351',
        views: 11966753,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1565709230.png',
        name: 'Wu Dong Qian Kun - 133',
        views: 8338052,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1525258495.jpg',
        name: 'Martial Peak - 2156',
        views: 1503308,
    },
    {
        src: 'https://www.readmng.com/uploads/posters/thumb/1536333724.jpg',
        name: 'Spirit Sword Sovereign',
        views: 2682422,
    },
];
const n = 6;

export default function Slides() {
    return (
        <div id='slides'>
            <Slide mangas={Mangas[0]} />
            <Slide mangas={Mangas[1]} />
            <Slide mangas={Mangas[2]} />
            <Slide mangas={Mangas[3]} />
            <Slide mangas={Mangas[4]} />
            <Slide mangas={Mangas[5]} />

            <Slide mangas={Mangas2[0]} />
            <Slide mangas={Mangas2[1]} />
            <Slide mangas={Mangas2[2]} />
            <Slide mangas={Mangas2[3]} />
            <Slide mangas={Mangas2[4]} />
            <Slide mangas={Mangas2[5]} />

            <Slide mangas={Mangas3[0]} />
            <Slide mangas={Mangas3[1]} />
            <Slide mangas={Mangas3[2]} />
            <Slide mangas={Mangas3[3]} />
            <Slide mangas={Mangas3[4]} />
            <Slide mangas={Mangas3[5]} />

            <Slide mangas={Mangas4[0]} />
            <Slide mangas={Mangas4[1]} />
            <Slide mangas={Mangas4[2]} />
            <Slide mangas={Mangas4[3]} />
            <Slide mangas={Mangas4[4]} />
            <Slide mangas={Mangas4[5]} />

            <Slide mangas={Mangas5[0]} />
            <Slide mangas={Mangas5[1]} />
            <Slide mangas={Mangas5[2]} />
            <Slide mangas={Mangas5[3]} />
            <Slide mangas={Mangas5[4]} />
            <Slide mangas={Mangas5[5]} />
        </div>
    );
}

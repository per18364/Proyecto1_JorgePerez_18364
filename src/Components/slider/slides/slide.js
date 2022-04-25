import React from 'react';

export default function Slide({ mangas }) {
    return (
        <div id='slide'>
            <img id='img' src={mangas.src} width='134px' height='193px' />
            <div id='title'>{mangas.name}</div>
        </div>
    );
}

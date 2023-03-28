import React from 'react'

import './Filme.css';

function Filme({ filme }) {
    return (
        <div>
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={filme.Poster} alt='movie'></img>

            </div>
            <div className='movie-info'>
                <h3>{filme.Title}</h3>
            </div>
        </div>
    )
}

export default Filme

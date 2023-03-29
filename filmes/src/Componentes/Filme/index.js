import React from 'react'

import './Filme.css';

function Filme({ filme, getDetalhes}) {
    return (
        <div className="filme col-lg-3" key={filme.imdbID}>
            <div className='image-container imagem-filme d-flex justify-content-start m-3'>
                <img src={filme.Poster} alt='movie'></img>

            </div>
            <div className='movie-info'>
                <h3>{filme.Title}</h3>
                <button className="btn btn-filmes" onClick={e => getDetalhes(e, filme.imdbID)}>
                Detalhes</button>

               

            </div>
        </div>
    )
}

export default Filme

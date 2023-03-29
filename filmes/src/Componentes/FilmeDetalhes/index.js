import React from 'react'

import './FilmeDetalhes.css';

function FilmeDetalhes({ detalhesFilme, handleFechar }) {
    return (

        <div className='modal modal-aparecer'>
            <section className='modal-main'>
                <div className='modal-body'>
                    <div className='modal-img'>
                        <img src={detalhesFilme.Poster} alt='Poster' />
                    </div>
                </div>
                <div className='modal-body'>
                    <p>
                        <b>Actors:</b> {detalhesFilme.Actors}
                    </p>
                    <p>
                        <b>Genre:</b> {detalhesFilme.Genre}
                    </p>
                    <p>
                        <b>Director:</b> {detalhesFilme.Director}
                    </p>
                    <p>
                        <b>Released:</b> {detalhesFilme.Released}
                    </p>
                    <p>
                        <b>Plot:</b> {detalhesFilme.Plot}
                    </p>
                </div>
                <button className="btn btn-filmes" onClick={handleFechar} >Fechar</button>
            </section>
        </div>
    )
}

export default FilmeDetalhes

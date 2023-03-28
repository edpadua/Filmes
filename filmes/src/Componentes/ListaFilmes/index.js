import React from 'react'

import Filme from '../Filme'

export default function ListaFilmes(props) {
    return (
        <>
            {props.filmes.map((filme, index) => (
                <>
                    <Filme filme={filme}/>
     
                   
                </>
            ))}
        </>
    )
}

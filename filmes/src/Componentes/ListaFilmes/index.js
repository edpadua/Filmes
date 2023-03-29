import React from 'react'

import Filme from '../Filme'
import FilmeDetalhes from '../FilmeDetalhes'

export default function ListaFilmes({filmes,getDetalhes,detalhesFilme,idSelecionado,mostrar,handleFechar}) {
    return (
        <>
            {filmes.map((filme, index) => (
                <>
                    <Filme filme={filme}  getDetalhes={getDetalhes}
                    />
                     {console.log("detalhesFilme",detalhesFilme)}
                     {console.log("idSelecionado",idSelecionado)}
                     {console.log("filme.imdbID",filme.imdbID)}
                     {console.log("mostrar",mostrar)}


                     {detalhesFilme && (idSelecionado===filme.imdbID) && mostrar ? 
              <FilmeDetalhes detalhesFilme={detalhesFilme} handleFechar={handleFechar}/> : 
              <div className="modal display-none"></div>
            }

                   
                </>
            ))}
        </>
    )
}

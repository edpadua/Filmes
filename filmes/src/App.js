import React, { useState, useEffect } from 'react';

import ListaFilmes from './Componentes/ListaFilmes';
import FilmeDetalhes from './Componentes/FilmeDetalhes';

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


  const api = "https://www.omdbapi.com/?";


  const apiKey = process.env.REACT_APP_MOVIE_KEY;

  const [nome, setNome] = useState("Star Wars");
  const [filmes, setFilmes] = useState([])
  const [detalhesFilme, setDetalhesFilme] = useState({})
  const [idSelecionado, setIdSelecionado] = useState(null)

  const [mostrar, setMostrar] = useState(false)


  const getFilmes = () => {
    console.log("apikey", process.env.REACT_APP_MOVIE_KEY)
    axios
      .get(api + `apikey=` + apiKey + `&s=${nome}` + "&type=movie" + "&page=1")
      .then((res) => {
        if (res) {
          console.log("filmes", res)
          setFilmes(res.data.Search)
        }
      });
  };


  const getDetalhes = (e, id) => {
    e.preventDefault()
    setIdSelecionado(id);
    axios.get(api + `apikey=` + apiKey + `&i=${id}`).then((res) => {
      if (res) {
        setDetalhesFilme(res.data)
        mostrarModal()
      }
    })
  }

  {/** 
  useEffect(() => {
    getFilmes();
  }, []);
**/}


  const handleSubmit = (e) => {
    e.preventDefault();
    getFilmes();

  };


  const mostrarModal = () => {
    setMostrar(true)
  }

  const esconderModal = () => {

    setMostrar(false)
    setDetalhesFilme()
  }

  const handleFechar = () => {
    esconderModal()
  }

  return (
    <>
      <form>
        <div className='searchBar'>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            placeholder='Nome do filme'
            onChange={(e) => setNome(e.target.value)}
          />
          <button className="btn btn-filmes" type='submit' onClick={(e) => handleSubmit(e)}>
            Procurar
          </button>
        </div>
      </form>


      <div className='container-fluid movie-app'>
        <div className='row'>
        
          <ListaFilmes filmes={filmes} 
                       getDetalhes={getDetalhes} 
                       detalhesFilme={detalhesFilme} 
                       idSelecionado={idSelecionado} 
                       mostrar={mostrar}
                       handleFechar={handleFechar}
          />
        </div>
      </div>

      
    </>

  );
}

export default App;

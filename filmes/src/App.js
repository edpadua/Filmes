import React, { useState, useEffect } from 'react';

import ListaFilmes from './Componentes/ListaFilmes';

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


  const api = "https://www.omdbapi.com/?";


  const apiKey = process.env.REACT_APP_MOVIE_KEY;
   
  const [nome, setNome] = useState("");
  const [filmes, setFilmes] = useState([])
 


  const getFilmes = () => {
    axios
      .get(api + apiKey + `&s=${nome}` + "&type=movie" + "&page=1")
      .then((res) => {
        if (res) {
          setFilmes(res.data.Search)
        }
      });
  };

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <ListaFilmes filmes={filmes} />
      </div>
    </div>
  );
}

export default App;

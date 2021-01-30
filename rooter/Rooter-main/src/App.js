import React, { useState } from 'react';
import './App.css';
import AddMovieForm from './components/Formulaire';
import MovieCard from './components/MovieCard';
import { movies } from './constants/movies';
import {Route} from 'react-router-dom';
import Trailer from "./components/Trailer"


function App() {
  const [movieList, setMovieList] = useState(movies)

const addMovie = (movie) => {
setMovieList([...movieList  , movie])
}

  console.log("movie List", movieList)

  return (
    <div className="App">
      <AddMovieForm  addMovie={addMovie} />
     <Route exact path="/" component={() => movieList.map(el => <MovieCard movie={el} />)} />
     <Route path="/trailer" component={Trailer} />

      

    </div>
  );
}

export default App;

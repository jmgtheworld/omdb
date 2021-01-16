
import Movie from "./Movie";
import {useState} from 'react';

import '../application.css'

export default function Results(props) {

  const {results, onClick, disabled, handleButton} = props;

  const searchResult = results['Search'];

  if (searchResult) {
    return searchResult.map((movie) => {
      const id = movie.imdbID
      return (
        <Movie key = {movie.imdbID} {...movie}  onClick = {onClick} disabled = {disabled.includes(id)} handleButton = {handleButton} />
      )
    })
  }
  else {
    return <Movie />
  }

}
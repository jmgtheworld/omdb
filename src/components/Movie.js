import {Fragment } from 'react';
import '../application.css'

export default function Movie(props) {


  const {disabled, onClick, handleButton} = props;

  if (props.Title) {
    return (
      <Fragment>
        <article className = "movieArticle">
          <img id = "movieImage" src = {props.Poster} alt = {props.Title}/>
          <div className = "movieContent"> 
          <span className = "movieDetail"> {props.Title}, {props.Year} </span>
          <button id ={props.imdbID} 
          disabled = {disabled}
          className = "btn btn-primary button"
          onClick = {
            () => { onClick(props.Title, props.Year, props.imdbID, props.Poster); handleButton(props.imdbID) } 
            } > 
          Nominate 
          </button>
          </div>
        </article>
      </Fragment>
    )
  } else {
    return (
      <div className = "emptyMovieArticle"></div>
    )
  }

}
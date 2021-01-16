
import '../application.css'

export default function NominateItem(props) {

  const {onClick, handleButton } = props

  if (props.Title) {
    return (
        <article className = "nominateArticle">
          <img id = "movieImage" src = {props.Poster} alt = {props.Title}/>
          <div className = "movieContent"> 
          <span className = "movieDetail"> {props.Title}, {props.Year} </span>
          <button className = "btn btn-danger button" onClick = {() => {onClick(props.Title); handleButton(props.imdbID)} }> Remove </button>
          </div>
        </article>
    )
  } else {
    return (
      <div></div>
    )
  }

}
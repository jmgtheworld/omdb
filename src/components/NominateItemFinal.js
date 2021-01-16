
import '../application.css'

export default function NominateItemFinal(props) {

  if (props.Title) {
    return (
        <article className = "nominateArticle">
          <img id = "movieImage" src = {props.Poster} alt = {props.Title}/>
          <div className = "movieContent"> 
          <span className = "movieDetail"> {props.Title}, {props.Year} </span>
          </div>
        </article>
    )
  } else {
    return (
      <div></div>
    )
  }

}
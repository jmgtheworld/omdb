
import NominateItem from "./NominateItem";

import '../application.css'

export default function Nominations(props) {

  const {list, onClick, disabled, handleButton} = props;

  if (list) {
    return list.map(movie => {
      const id = movie.imdbID
      return <NominateItem key = {movie.imdbID} {...movie} onClick = {onClick} disabled = {disabled.includes(id)} handleButton = {handleButton}/>
    })
  }
  else {
    return (
      <NominateItem />
    )

  }
}
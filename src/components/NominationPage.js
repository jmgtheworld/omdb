import NominateItemFinal from "./NominateItemFinal";
import '../application.css'

export default function NominationPage (props) {

  const {list} = props;

  if (list) {
    return list.map(movie => {
      return <NominateItemFinal key = {movie.imdbID} {...movie} />
    })
  }
  else {
    return (
      <NominateItemFinal />
    )

  }
    
}
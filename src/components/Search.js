import {Fragment, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchBar from "./SearchBar";
import Nominations from "./Nominations";
import Results from "./Results";
import NominationPage from "./NominationPage";
import Header from "./Header";

const axios = require('axios');

export default function Search (props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
 
  const [loading, setLoading] = useState(false);

  const [list, setList] = useState([{Title: "The Office", Year: "2005-2013", imdbID: "tt0386676", Poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg"}]);

  useEffect (() => {
    setLoading(true)
    const URL = `http://www.omdbapi.com/?s=${term}&apikey=3e4a628c&`
    axios.get(URL)
    .then(response => {
      setResults(response.data)
      setLoading(false)
    })
  }, [term])

  const showResult = term => {
    if (term) {
      return <h5 className = "results"> Results for "{term}" </h5>
    }
  }

  const addNomination = (name,  year, id, image)=> {
    const movie = {Title: name, Year: year, imdbID: id, Poster: image, State: false}
    const newList = list.concat(movie)
    setList(newList)
  }

  const removeNomination = name => {
    const newList = list.filter(movie => movie.Title !== name)
    setList(newList)
  }

  const showBanner = () => {
    if (list.length >= 5) {
      return (
        <div className="alert alert-primary banner" role="alert">
          You now have {list.length} nominations
        </div>
      )
    }
  }

  const generate = () => {
    let result = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 6; i++) {
      result += char.charAt(Math.floor(Math.random() * char.length));
    }
    return result
  }

  const {name} = props;

  const [disabledButtons, setDisabledButtons] = useState([false]);

  const handleButton = (id) => {
    setDisabledButtons(prev => [...prev, id]);
  }

  const toggleOn = id => {
    let disabledButtonsCopy = disabledButtons;
    disabledButtonsCopy = disabledButtonsCopy.filter(item => item!== id)
    setDisabledButtons(disabledButtonsCopy)
  }
  
  return (
    <Router>
      <Switch>
        <Route path = "/nominations">
          <Header generate = {generate()} name = {name} />
          <div className = "mainContent_nominations_share">
            <NominationPage list = {list} />
          </div>
        </Route>
        <Route path = "/">
        <Fragment>
          <SearchBar onSearch = {term => setTerm(term)} loading ={loading} />
            {showBanner()}
            {showResult(term)}
            <div className = "mainContent">
              <div className = "mainContent_results">
                <Results results = {results} onClick = {addNomination} disabled = {disabledButtons} handleButton = {handleButton}/>
              </div>
              <div className = "mainContent_nominations">
                <img src = "trophy.svg" className = "nomainateImage" alt = "trophy"/>
                <span className = "nominations" > Nominations </span>
                <Link to = "/nominations" className ="btn btn-outline-info share"> Share </Link>
                <Nominations list = {list} onClick = {removeNomination} disabled = {disabledButtons} handleButton = {toggleOn}/>
              </div>
            </div>
          </Fragment>
        </Route>
      </Switch>
    </Router>

  )
}
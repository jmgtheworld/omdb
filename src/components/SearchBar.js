import { useState, useEffect, useCallback, Fragment } from 'react';

import '../application.css'

import useDebounce from "../hooks/useDebounce"

export default function SearchBar(props) {
  const [value, setValue] = useState("");

  const {loading} = props;

  const term = useDebounce(value, 350);
  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(()=> {
    onSearch(term);
  }, [term]);

  return (
    <Fragment> 
    
      <h2 className = "appName">   <img src = "../../dundies.jpg" alt = "headerImage" className = "headerImage" />The Dundies </h2>
      <article className="article_form">
        <span className = "movieTitle"> Movie Title </span> 
        <form onSubmit = {event => event.preventDefault()} className = "inputForm">
          <div className = "search">
          <input
            className="inputMovie" 
            placeholder = "Search Movies"
            name = "search"
            type = "text"
            value = {value}
            onChange = {event => setValue(event.target.value)}
          />
          <img src = "search.svg" className = "searchIcon"/>
          {loading && <div className="spinner-border loading" role="status">
            <span class="sr-only">Loading...</span>
          </div> }
          </div>
        </form>

      </article>
    </Fragment>

  )
}
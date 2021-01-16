import { Fragment } from "react";
import {
  Link
} from "react-router-dom";

export default function Header (props) {

  const {generate} = props;

  return (
    <Fragment>
        <h2 className = "NominationHeader"> My Dundies Nominations</h2>  
        <div className = "links">
          <Link to = "/" className = "btn btn-outline-info  linkToMain"> Back to Main </Link> 
          <span> Short URL :<a href = "/nominations"> {generate} </a> </span>
        </div>
       
    </Fragment>
    )
}
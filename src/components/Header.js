import { Fragment } from "react";
import { Alert } from 'react-bootstrap';
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
            <span className = "share">
              <span className = 'share-text'>
                Short URL to share your list: 
              </span>
              <a href = "/nominations"> {generate} </a> 
            </span>
            
        </div>
       
    </Fragment>
    )
}
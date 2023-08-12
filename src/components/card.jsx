import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={props.imageURL} alt="cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>

          <Link to={props.goto} class="btn btn-primary">
            Lets Go
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

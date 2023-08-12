import React from "react";

import Card from "./card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <div class="col-sm-4">
      <Card
        key={contact.id}
        goto={contact.goto}
        name={contact.name}
        imageURL={contact.imageURL}
      />
    </div>
  );
}

function Grid() {
  return (
    <div className="cardContainer">
      <div className="row">{contacts.map(createCard)}</div>
      <div>
        Made with LOVE &#9829; - Sourabh Awasthy
      </div>
    </div>
  );
}

export default Grid;

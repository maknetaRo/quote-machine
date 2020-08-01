import React, { useState } from "react";
import Quote from "../Quote/Quote";
import { QUOTES } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faQuoteLeft, fas);

function Card() {
  const [counter, setCounter] = useState(4);
  return (
    <div
      className="container"
      onClick={(event) => setCounter(counter + 1)}
      style={{ backgroundColor: QUOTES[counter % QUOTES.length].background }}
    >
      <FontAwesomeIcon icon={["fas", "quote-left"]} size="4x" />

      <h2 className="quote">
        <Quote />
      </h2>
    </div>
  );
}

export default Card;

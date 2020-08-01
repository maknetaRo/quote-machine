import React, { useState } from "react";
import { QUOTES } from "../../constants";

function Quote() {
  const [counter, setCounter] = useState(4);
  return (
    <div onClick={(event) => setCounter(counter + 1)}>
      <h2 className="quote">{QUOTES[counter % QUOTES.length].quote}</h2>

      <div className="box">
        <img className="photo" src={QUOTES[counter % QUOTES.length].src} />
        <h3 className="author">{QUOTES[counter % QUOTES.length].name}</h3>
      </div>
    </div>
  );
}

export default Quote;

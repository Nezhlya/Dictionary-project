import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="container">
      <div className="dictionary">
        <section className="text-center">
    
          <h1>
            <b>Dictionary</b>
          </h1>
          <br />
          <div>
            Which word are you interested in searching?
            <form className="form" onSubmit={search}>
              <input
                type="search"
                placeholder="Enter a word"
                onChange={handleKeywordChange}
              ></input>
              <input type="submit" value="Search"></input>
            </form>
          </div>
        </section>
        <Results results={results} />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

 function handleResponse(response){
    console.log(response.data[0]);
 }
 
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}` ;
axios.get(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="container">
      <div className=" paper">
        <div className="lines">
          <div className="text">
            <h1>
              <b>Dictionary</b>
            </h1>
            <br />
            Which word are you interested in searching?
            <form className="form" onSubmit={search}>
              <input type="search" placeholder="Enter a word"  onChange={handleKeywordChange}></input>
              <input
                type="submit"
                value="Search"
               
              ></input>
            </form>
           
          </div>
          
        </div>
        <div className="holes hole-top"></div>
        <div className="holes hole-middle"></div>
        <div className="holes hole-bottom"></div>

      </div>
    </div>
  );
}

import React from "react";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  console.log(props.meaning.synonyms);
  return (
    <div>
      <h3 className="text-center"> {props.meaning.partOfSpeech} </h3>{" "}
      <Synonyms synonyms={props.meaning.synonyms} />
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="container">
              <div className="row">
                <div className="col-lg">
                  <strong>Definition: </strong>
                  {definition.definition}
                </div>
                <div className="col-lg text-center">
                  <em>{definition.example}</em>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

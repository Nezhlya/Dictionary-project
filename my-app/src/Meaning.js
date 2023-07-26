import React from "react";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  console.log(props.meaning.synonyms)
  return (
    <div>
      <div>
        <p>{props.meaning.definitions[0].definition}</p>
        <p>
          <em>{props.meaning.definitions[0].example}</em>
        </p>
      </div>

      <h3> {props.meaning.partOfSpeech} </h3>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

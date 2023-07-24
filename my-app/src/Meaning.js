import React from "react";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  return (
    <div>
            <p>{props.meaning.definitions[0].definition}</p>

      <p><em>{props.meaning.definitions[0].example}</em></p>

      <h3> {props.meaning.partOfSpeech} </h3>
      {props.meaning.definitions.map(function(definition, index){
        return(
            <div>
                <p>
                  <strong>Definition: </strong>
                    {definition.definition}
                    <br />
                    
                    <em>{definition.example}</em>
                    <Synonyms synonyms={definition.synonyms} />
                </p>
            </div>
        )
      })}
    </div>
  );
}

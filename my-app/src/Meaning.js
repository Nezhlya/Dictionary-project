import React from "react";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  console.log(props.meaning.synonyms)
  return (
    <div>
<Synonyms synonyms={props.meaning.synonyms} />
      <h3> {props.meaning.partOfSpeech} </h3>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
                <br/>
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
        </div>
       
 </div>
      
    
  );
}

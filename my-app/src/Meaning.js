import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h3> {props.meaning.partOfSpeech} </h3>
      {props.meaning.definitions.map(function(definition, index){
        return(
            <div>
                <p>
                    {definition.definition}
                    <br />
                    <em>{definition.example}</em>
                </p>
            </div>
        )
      })}
      <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p>
    </div>
  );
}

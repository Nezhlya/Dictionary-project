import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function (synonym, index) {
          return (
          <div>
            <span key={index}>{synonym}</span>
            </div> );
        })}
      </div>
    );
  } else {
    return null;
  }
}
import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index} className="container">
              
              <div className="row">
                <div className="col">{synonym}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

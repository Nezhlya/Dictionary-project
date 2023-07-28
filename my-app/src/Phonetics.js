import React from "react";

export default function Phonetics(props) {
  let phoneticInfo= props.phonetic.text && props.phonetic.audio;
  return (
   <div className="text-center">
{phoneticInfo && (    <div>   {props.phonetic.text} 

      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        listen
      </a>
    </div>
)}</div>
  );
}

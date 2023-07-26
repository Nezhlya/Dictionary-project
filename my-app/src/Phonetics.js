import React from 'react';

export default function Phonetics(props) {
    console.log(props.phonetics)
    return (
        <div>
            <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
                listen
            </a>
            <br />
            {props.phonetic.text}
        </div>
    )
} 
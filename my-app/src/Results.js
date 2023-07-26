import React from 'react';
import './App.css'
import Meaning from './Meaning'
import Phonetics from './Phonetics.js';

export default function Results(props){
    if(props.results){
       return (
         <div>
           <h1 className="word">{props.results.word}</h1>
           {props.results.phonetics.map(function (phonetic, index) {
             return (
               <div key={index}>
                 <Phonetics phonetic={phonetic} />
               </div>
             );
           })}
           {props.results.meanings.map(function (meaning, index) {
             return (
               <div key={index}>
                 <Meaning meaning={meaning} />
               </div>
             );
           })}
         </div>
       );
    } else {
        return null;
    }
   
}
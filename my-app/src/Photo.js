import React from "react";

export default function Photos(props) {
   
   if(props.photos){
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <p className="coder">
          <a href="https://github.com/Nezhlya/Dictionary-project">
            Open-source code
          </a>{" "}
          in GitHub by Nezhlya Emin
        </p>
      </section>
    );
   } else {
    return null
  
}}

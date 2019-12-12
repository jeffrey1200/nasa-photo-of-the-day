import React from "react";

const NasaCards = props => {
  return (
    <div>
      <img src={props.imgUrl}></img>
      <h1>{props.title}</h1>
      <p>{props.explanation}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default NasaCards
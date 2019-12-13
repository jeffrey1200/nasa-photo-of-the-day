import React from "react";

const NasaCards = ({url,title,exp,date}) => {
  
  return (
    <div>
      <img width = '70%'src={url} alt = 'Photo of the day from Nasa'></img>
      <h1>{title}</h1>
      <p>{exp}</p>
      <p>{date}</p>
    </div>
  );
};

export default NasaCards
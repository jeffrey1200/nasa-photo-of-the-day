import React, { useState, useEffect } from "react";
import NasaCards from "./NasaCards";
import axios from "axios";

const NasaList = () => {
  const [photos, setPhotos] = useState([]);
  // const [year,setYear] = useState(2019)
  // const [month,setMonth] = useState(12)
  // const [day,setDay] = useState(11)
  // const apiKey = '6RGohVFDoCF2zJK931dKiZ8Sjk63p9qkM6MrpyWG'

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=6RGohVFDoCF2zJK931dKiZ8Sjk63p9qkM6MrpyWG`
      )
      .then(response => {
        // console.log(response.data)
        setPhotos(response.data);
      })

      .catch(err => `You have an error bruh ${err}`);
  }, []);

  return (
    <div>
      <NasaCards
        url={photos.url}
        title={photos.title}
        exp={photos.explanation}
        date={photos.date}
      />
    </div>
  );
};
export default NasaList;

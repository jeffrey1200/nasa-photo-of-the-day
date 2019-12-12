import React, {useState, useEffect} from "react"
import NasaCards from "./NasaCards"
import axios from "axios"

const NasaList = ()=>{
    const [photos,setPhotos] = useState([])

    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=6RGohVFDoCF2zJK931dKiZ8Sjk63p9qkM6MrpyWG`)
        .then(response => {
            // console.log(response.data)
            setPhotos(response.data)

        })

        .catch(err => `You have an error bruh ${err}`)

    }, [])
    
    return (
        <div>
         <NasaCards
        imgUrl = {photos.url}
        title = {photos.title}   
        explanation = {photos.explanation}
        date = {photos.date}
            />
        </div>





    )

}
export default NasaList
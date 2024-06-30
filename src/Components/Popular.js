import React, { useEffect, useState } from 'react'
import './Popular.css'
import axios from 'axios';
import {API_KEY,imageURL} from '../constants/constants'

const Popular = () => {
  const [movie, setMovie] = useState()


  //API WORKING
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const randomMovie = response.data.results[randomIndex];
        setMovie(randomMovie);
      console.log(response.data.results[0]);

    })
  },[])




  return (
    <div style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path : ""})`}} className='banner'>
      <div className='content'>
        <h2>Popular Movies</h2>
        <h3 className='title'>{movie ? movie.title : ""}</h3>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h4>{movie ? movie.overview : ""}</h4>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Popular
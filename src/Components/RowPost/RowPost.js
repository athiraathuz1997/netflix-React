import axios from 'axios'
import './RowPost.css'
import React, { useEffect } from 'react'
import {imageURL,API_KEY} from '../../constants/constants'
import { useState } from 'react'
import Youtube from 'react-youtube'


const RowPost = (props) => {
    const[movies, setMovies] = useState([])
    const[urlId,seturlId]=useState('')
    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                console.log(response.data);
                const shuffledMovies = shuffleArray(response.data.results);
                setMovies(shuffledMovies);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                seturlId(response.data.results[0])
            }else{
                console.log("Array Empty")
            }
            
        })
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {
                movies.map((obj)=>
                    <img onClick ={()=>handleMovie(obj.id)}className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageURL+obj.backdrop_path}`}/>

                )
            }
        </div>
       {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
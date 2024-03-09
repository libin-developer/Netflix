import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "../axios"
import { API_KEY, imgurl } from '../consatants/Const'


export default function Banner() {
   const [movie,setmovie] = useState([]);
  
  useEffect (()=>{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US1`).then((Response)=>{
    console.log(Response.data.results[0]);
    setmovie(Response.data.results[15])
   },[])
    
  })
 
  return (
    <div
    style={{backgroundImage:`url(${movie ? imgurl+movie.backdrop_path :""})`}}
   className='banner'>
      
        <div className='content'>
            <h1 className='title'>{movie ? movie.title: ""}</h1>

            <div className='banner_buttons'>

                  <button className='button'>Play</button>

                <button className='button'>My list</button>
            </div>
            <h1 className='descrption'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      
    </div>
  )
}


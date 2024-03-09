import React, { useEffect, useState } from 'react'
import "./post.css"
import { API_KEY, imgurl } from '../consatants/Const'
import axios from '../axios'
import YouTube from 'react-youtube'

export default function Post(props) {

  const [movies,setmovies] = useState([])
  const [urlid,seturlid] = useState('')

  useEffect(()=>{
    axios.get(props.urls).then(Response=>{
      console.log(Response.data)
      setmovies(Response.data.results)
    })
  },[])

  const handlemovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
      if(Response.data.results!==0){
        seturlid(Response.data.results)
      }else{
        alert("error array");
      }
      
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
                <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallposter': 'poster' }src={`${imgurl+obj.backdrop_path}`}/>
          
  
            )
          }
             </div>
           {urlid &&  <YouTube opts={opts} videoId={urlid.key} /> } 
    </div>
  )
}
const opts ={
  height: "390",
  width:"100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  }

}
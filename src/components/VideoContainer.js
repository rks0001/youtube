import React, { useEffect, useState} from 'react'
import {Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async() =>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    }
  return (
    <div className='flex flex-wrap justify-evenly bg-[#0f0f0f]'>
        {videos.map((video)=>(<Link key={video.id} to={"/watch?v=" + video.id}><VideoCard  info={video}/></Link>))}
        
        
        </div>
  )
}

export default VideoContainer
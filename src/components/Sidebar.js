import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {AiOutlineHome, AiFillYoutube, AiOutlineClockCircle, AiOutlineLike} from 'react-icons/ai'
import {MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineHistory, MdPlaylistPlay} from 'react-icons/md'
import {BsPlayBtn} from 'react-icons/bs'
 
const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  return !isMenuOpen? null :(
    <div className='p-5 bg-[#0f0f0f] text-white shadow-lg w-48 h-auto'>
        <ul className='flex flex-col justify-start items-start'>
            <li ><Link className='flex mt-2 ' to="/"><AiOutlineHome style={{color:'white', fontSize:'20px', margin:'auto'}} /><span className='ml-2 hidden md:block'> Home</span></Link></li>
            <li className='flex mt-2 justify-start '><AiFillYoutube style={{color:'white', fontSize:'20px', margin:'auto'}} /> <span className='ml-2 hidden md:block'> Shorts</span></li>
            <li className='flex mt-2'><MdOutlineSubscriptions style={{color:'white', fontSize:'20px', margin:'auto'}} /> <span className='ml-2 hidden md:block'> Subscriptions</span></li>
            
        </ul>
        <hr className='mt-4 mb-2' />
        <ul className='flex flex-col justify-start items-start'>
            <li ><Link className='flex mt-2 ' to="/"><MdOutlineVideoLibrary style={{color:'white', fontSize:'20px', margin:'auto'}} /><span className='ml-2 hidden md:block'> Library </span></Link></li>
            <li className='flex mt-2 justify-start'><MdOutlineHistory style={{color:'white', fontSize:'20px', margin:'auto'}} /> <span className='ml-2 hidden md:block'> History</span></li>
            <li className='flex mt-2'><BsPlayBtn style={{color:'white', fontSize:'20px', margin:'auto'}} /> <span className='ml-2 hidden md:block'> Your Videos</span></li>
            
        </ul>
        <hr className='mt-4 mb-2' />
        <ul className='flex flex-col justify-start items-start'>
            <li ><Link className='flex mt-2 ' to="/"><AiOutlineClockCircle style={{color:'white', fontSize:'20px', margin:'auto'}} /><span className='ml-2 hidden md:block'> Watch Later</span></Link></li>
            <li className='flex mt-2 justify-start'><AiOutlineLike style={{color:'white', fontSize:'20px', margin:'auto'}} /> <span className='ml-2 hidden md:block'> Liked Videos</span></li>
            <li className='flex mt-2'><MdPlaylistPlay style={{color:'white', fontSize:'20px', margin:'auto'}} /> <span className='ml-2 hidden md:block'> Playlists</span></li>
            
        </ul>
    </div>
  )
}

export default Sidebar
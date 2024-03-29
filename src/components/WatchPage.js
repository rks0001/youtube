import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(closeMenu())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className='flex flex-col w-full bg-[#0f0f0f]'>
    <div className='px-5 flex flex-col md:flex-row w-full'>
       <div className='w-full md:w-8/12'>
       <iframe className='w-full h-[90%] mt-4 rounded-lg'  src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       </div>
        
        <div className='w-full md:w-4/12'>
        <LiveChat/>
        </div>
        
    </div>
    <CommentsContainer/>
    </div>
    
  )
}

export default WatchPage
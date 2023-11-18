import React from 'react'

const VideoCard = ({info}) => {

    const {statistics, snippet} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-[90%] md:w-72 shadow-lg bg-[#0f0f0f] text-white'>
        <img className="rounded-lg py-2" alt="img" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2 w-full overflow-hidden'>{title}</li>
            <li className='text-sm font-semibold '>{channelTitle}</li>
            <li>{statistics.viewCount} views </li>
        </ul>
    </div>
  )
}

export default VideoCard
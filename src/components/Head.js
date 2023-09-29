import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';
import youtubedark1 from '../images/youtubedark1.png'
import {FaUserCircle} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) =>store.search);
    const dispatch = useDispatch();

useEffect(()=>{

const timer = setTimeout(()=>{ 
    if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);

    }else{
        getSearchSuggestions();
    }
    
  }, 200);

return () =>{
    clearTimeout(timer);
}


// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchQuery])

const getSearchSuggestions = async() =>{
 
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json(); 
    console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cacheResults({
        [searchQuery] : json[1],
    }))
}

 

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-5 m-0 shadow-lg bg-[#0f0f0f]'>
        {/* First */}
        <div className='flex col-span-1 m-auto '> 
            <GiHamburgerMenu style={{color:'white', fontSize:'24px', margin:'auto'}} onClick={() => toggleMenuHandler()} />
           <a href="/"> <img className="h-8 mx-4" alt="youtube" src={youtubedark1}/></a> 
        </div>
        {/* Second */}

        <div className='col-span-10 px-1 '>
            <div>
            <input className='w-1/2 bg-[#121212] text-white border border-gray-800 px-4 py-2 rounded-l-full' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
            <button className='bg-[#222222] border border-gray-800 hover:border-gray-800 text-white text-center px-4 py-3 rounded-r-full'><BsSearch  style={{color:'white', margin:'auto'}}/> </button>
            </div>
            {/* Suggestions */}
          { showSuggestions && (<div className='absolute bg-[#121212] text-white py-2 px-3 w-1/3 shadow-lg rounded-lg border border-gray-800'> 
                <ul>
                    {suggestions.map((s)=>(   <li key={s} className=' flex py-1 shadow-sm hover:bg-gray-800'><BsSearch  style={{color:'white', marginRight:'14px'}}/> {s}</li>))}
                 
                   
                </ul>
            </div>)}
           
        </div>
        {/* Third */}
        <div className='col-span-1 m-auto'>
        <FaUserCircle style={{color:'white', fontSize:'34px'}}/>
        </div>
    </div>
  )
}

export default Head
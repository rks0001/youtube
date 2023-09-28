import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

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
    <div className='grid grid-flow-col p-5 m-1 shadow-lg'>
        {/* First */}
        <div className='flex col-span-1 '>

            <img  onClick={() => toggleMenuHandler()} className="h-12 cursor-pointer" alt="ham-menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>

           <a href="/"> <img className="h-12 mx-2" alt="youtube" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1505YocpYC8sqD01fUYDaMlc__4XHcy0NEH-tQQ5Om1NPGkodsXCat3mBTar6U04PS3U&usqp=CAU"/></a> 

        </div>
        {/* Second */}

        <div className='col-span-10 px-1 '>
            <div>
            <input className='w-1/2 border border-gray-400 px-4 py-2 rounded-l-full' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
            <button className='bg-gray-400 border border-gray-400 text-white text-center px-4 py-2 rounded-r-full'>🔍</button>
            </div>
            {/* Suggestions */}
          { showSuggestions && (<div className='absolute bg-white py-2 px-3 w-1/3 shadow-lg rounded-lg border border-gray-100'>
                <ul>
                    {suggestions.map((s)=>(   <li key={s} className='py-1 shadow-sm hover:bg-gray-100'>🔍 {s}</li>))}
                 
                   
                </ul>
            </div>)}
           
        </div>
        {/* Third */}
        <div className='col-span-1'>
        <img className="h-10" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbF9MRc872DyqrFDJJ3MRq68r08IaEKCNGzAqYNpeSK38HOao_E2_50CtB2V4TGM_5ag&usqp=CAU"/>
        </div>
    </div>
  )
}

export default Head
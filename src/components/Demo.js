import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText] = useState(0);
    const [darkTheme, setDarkTheme] = useState(true);
  


    const prime = useMemo(()=> findPrime(text), [text]) ; 


    const darkmode = () => {
        setDarkTheme(!darkTheme)

    }

  return (
    <div className={darkTheme ? 'm-4 p-2 border border-black w-96' : 'm-4 p-2 border border-black w-96 bg-gray-900 text-white' }>
        <div>
            <button className='bg-green-400 p-2 mx-2' onClick={darkmode}> Dark Mode</button>
            <input className='border border-black' type="number" value={text} onChange={(e) => setText(e.target.value)}/>
            <h1>{text}</h1>
        </div>
        <div> 
            <h1> Nth Prime {prime}</h1>
        </div>
    </div>
  )
}

export default Demo
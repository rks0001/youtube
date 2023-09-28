import React, { useRef, useState } from 'react'

let x = 0;


const Demo2 = () => {
    const [y, setY] = useState(0);

    const ref = useRef(0);

  return (

    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
        <button className='bg-green-300 m-2 p-2' onClick={()=>{x=x+1}}>Increase x</button>
        <span className='font-bold text-xl'> Let = {x}</span>
        <br/>
        <button className='bg-green-300 m-2 p-2' onClick={()=>{setY(y+1)}}>Increase y</button>
        <span className='font-bold text-xl'> State = {y}</span>
        <br/>
        <button className='bg-green-300 m-2 p-2' onClick={()=>{ref.current = ref.current +1}}>Increase ref</button>
        <span className='font-bold text-xl'> Ref = {ref.current}</span>
    </div>
  )
}

export default Demo2
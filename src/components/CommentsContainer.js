import React from 'react'
import {FaUserCircle} from 'react-icons/fa'

const commentsData = [
    {
        name:"Ranjit Kalita", 
        text:"Nice Video", 
        replies:[
            {
                name:"Ranjit Kalita", 
                text:" Reply for Nice Video", 
                replies:[],
            },
            {
                name:"Ranjit Kalita", 
                text:"Reply for Nice Video", 
                replies:[],
            },
            {
                name:"Ranjit Kalita", 
                text:"Reply for Nice Video", 
                replies:[
                    {
                        name:"Ranjit Kalita", 
                        text:"Reply to Reply for Nice Video", 
                        replies:[],
                    },
                    {
                        name:"Ranjit Kalita", 
                        text:"Reply to Reply for Nice Video", 
                        replies:[],
                    },
                ],
            },
        ],
    },
    {
        name:"Ranjit Kalita", 
        text:"Nice Video", 
        replies:[
            {
                name:"Ranjit Kalita", 
                text:"Reply for Nice Video", 
                replies:[],
            },
            {
                name:"Ranjit Kalita", 
                text:"Reply for Nice Video", 
                replies:[],
            },
        ],
    },
    {
        name:"Ranjit Kalita", 
        text:"Nice Video", 
        replies:[],
    },
    {
        name:"Ranjit Kalita", 
        text:"Nice Video", 
        replies:[],
    },
]

const Comment =({data})=>{
    const {name, text} = data; 
return (
    <>
    <div className='flex shadow-sm bg-[#0f0f0f] p-2 rounded-lg my-2 text-white'> 
        <FaUserCircle style={{color:'#74AA9C', fontSize:'24px'}}/>
        <div className='px-3'> 
            <p className='font-bold'>{name}</p>
            <p> {text} </p>
        </div>
    </div>
    </>
)
}

const CommentsList = ({comments}) =>{
return (
    <>
    <div>
        {comments.map((comment, index) =>(
        <div className='text-sm' key={index}>
            <Comment  data={comment}/>
            <div className='pl-5  ml-5 border border-r-0 border-t-0 border-b-0 border-l-gray-500'>
            <CommentsList comments={comment.replies}/>
            </div>
        </div>))}
    </div>
    </>
)
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 bg-[#0f0f0f] text-white w-8/12'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList   comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
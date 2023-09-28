import React from 'react'


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
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'> 
        <img className='w-12 h-12 ' alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbF9MRc872DyqrFDJJ3MRq68r08IaEKCNGzAqYNpeSK38HOao_E2_50CtB2V4TGM_5ag&usqp=CAU"/>
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
        <div key={index}>
            <Comment  data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies}/>
            </div>
        </div>))}
    </div>
    </>
)
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
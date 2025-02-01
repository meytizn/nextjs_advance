import React from 'react'

// #  STEP 2 USING SSG Rendering
// ssg structure [ {slug : id} , ... ]


export async function generateStaticParams(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/",)
  let posts=await response.json()

  let ids=posts.map((post)=>(
    {slug:post.id.toString()} 
  ))

  return ids
}
// npm run build
// npm start






// #  STEP 1 USING PARAMS
export default async function Blog_detail({params}) {

  let {slug}=params   // obj distracturing
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,)
  let post=await response.json()

  return (
    <>
    <div key={post.id} className="my-[100px] m-auto"> 
    <h2>{post.title}</h2>
    <h4>{post.body}</h4>
    </div>
    
    </>
  )
}

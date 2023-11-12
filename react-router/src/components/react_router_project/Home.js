import React from 'react'
import Post from './Post'

const Home = ({ posts }) => {
  return (
    <div>
        {posts.length ? (posts.map(post =>(
            <Post id={post.id} post={post} />
        ))) : (<p className='text-center font-bold text-3xl uppercase mt-5'>there are no posts</p>) }
    </div>
  )
}

export default Home
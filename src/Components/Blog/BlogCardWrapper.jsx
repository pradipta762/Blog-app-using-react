import React from 'react'
import blogsData from '../../utils/blogsData.json'
import BlogCard from './BlogCard'

function BlogCardWrapper() {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {blogsData.map((item) => (
        <div key={item.id}>
          <BlogCard 
            image={item.image}
            title={item.title}
            author={item.author}
            publishedDate={item.published_date}
            id={item.id}
            data={item}
          />
        </div>
      ))}
    </div>
  )
}

export default BlogCardWrapper
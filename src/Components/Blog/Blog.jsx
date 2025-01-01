import React from 'react'
import Banner from '../Banner/Banner'
import BlogCard from './BlogCard'
import BlogCardWrapper from './BlogCardWrapper'
import BlogSideBar from './BlogSideBar'

function Blog() {
  return (
    <div>
      <Banner 
        title={"Blog "}
      />
      <div className="wrapper">
        <div className="content-wrapper">
          <div className='flex flex-col md:flex-row gap-5'>
            <BlogCardWrapper />
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
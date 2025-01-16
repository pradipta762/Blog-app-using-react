import React from 'react'
import Banner from '../Banner/Banner'
import BlogCardWrapper from '../Blog/BlogCardWrapper'
import BlogSideBar from '../Blog/BlogSideBar'

function Home() {
  return (
    <div>
      <Banner 
        title={"Welcome to our Blog"}
        description={"Start your blog today and join a community of writers and readers who are passionate about sharing their   stories and ideas. We offer Everything you need to get started from helful tips and tutorials."}
        buttonText={"Learn More →" }
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

export default Home
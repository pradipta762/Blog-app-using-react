import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import blogsData from '../../utils/blogsData.json'

function BlogPage() {

  const {id} = useParams();
  const [blogData, setBlogData] = useState(null);
  console.log(blogData)

  useEffect(() => {
    const blog = blogsData.find((b) => b.id === parseInt(id));
    console.log(blog)
  }, [])
  const location = useLocation()
  const {data} = location.state || {}
  console.log(data)
  return (
    <div>
      <div className="wrapper">
        <div className="content-wrapper">
          <h1>{id}</h1>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
/* eslint-disable react/prop-types */

const BlogList = ({ blogs, title }) => {
  return(
    <div className="blog-list">
      <h2>{title}</h2>
      <div className="blog-preview">
        <h2>{blogs.title}</h2>
        {blogs.map((blog) => 
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>

          </div>
          
        )}
      </div>
    </div>
  )
}
   
  export default BlogList
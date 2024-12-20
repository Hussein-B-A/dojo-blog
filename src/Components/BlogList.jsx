/* eslint-disable react/prop-types */

const BlogList = ({ blogs, title, deleteBtn }) => {
  return(
    <div className="blog-list">
      <h2>{title}</h2>
      <div className="blog-preview">
        <h2>{blogs.title}</h2>
        {blogs.map((blog) => 
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => deleteBtn(blog.id)}>Delete Blog</button>
          </div>
          
        )}
      </div>
    </div>
  )
}
   
  export default BlogList
import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
      ]);

      const handleRemoveItem =  (id) => {
       setBlogs(blogs.filter((element) => element.id !== id))
       console.log(blogs);
       
       blogs.filter()
       
        
      }

    return (
        <div className="home">
           <BlogList blogs={blogs} title= "All Blogs!" deleteBtn ={handleRemoveItem}/>
        </div>
    )

}


export default Home;

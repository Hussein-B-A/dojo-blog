import BlogList from "./BlogList";
import useFetch from "../Custom_Hooks/useFetch";


const Home = () => {
   
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")
    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isLoading && <h2>Loading...</h2>}
          { blogs && <BlogList blogs={blogs} title= "All Blogs!"/>}
        </div>
    )

}


export default Home;

import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <h2>That page cannot be found</h2>
            <Link to="/"> back to the Homepage....</Link>
        </div>
     );
}
 
export default NotFound;

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h3>
                Sorry, page not found...
            </h3><br />
            <p>return to  
                <Link to="/" >  Home page</Link>
            </p>
        </div>
    );
}
 
export default NotFound;
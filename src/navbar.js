import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>GRADUATION GALLERY</h2>
            <div className="">
                <Link to="/" className="nav-links">Home</Link> 
                <Link to="/about" className="nav-links">About</Link>
                
            </div>
        </div>
    );
}
 
export default Navbar;
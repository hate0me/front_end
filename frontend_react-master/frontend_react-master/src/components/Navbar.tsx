import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import '../styles/navbar.css';

function NavBar(){
    const {isAuthenticated} = useAuth()
    return(
        <>
        <nav>
            <Link to='/' id='podnet'>PodNet</Link>
            <Link to='/messenger' className="LINK">Messenger</Link>
            <Link to='/admin' className="LINK">My profile</Link>
            <input type="text" placeholder="search cucumber podcasts.."></input>
            {isAuthenticated? <Link to="/logout" className="LINK">Logout</Link>:<Link to="/login" className="LINK">Login</Link>}
        </nav>
        </>
    )
}
export default NavBar
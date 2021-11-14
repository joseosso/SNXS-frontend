import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {


    return (
        <nav className={classes.nav}>
            <NavLink to={'/'}><h1>SNXS</h1></NavLink>
            <ul className={classes.links}>
                <li><NavLink exact activeClassName={classes.active} to={'/'}>Home</NavLink></li>
                <li><NavLink exact activeClassName={classes.active} to={'/guide'}>Guides</NavLink></li>
                <li><NavLink exact activeClassName={classes.active} to={'/about'} >About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
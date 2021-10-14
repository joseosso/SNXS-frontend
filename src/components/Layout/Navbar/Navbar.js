import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <h1>EZ Sec</h1>
            <div className={classes.links}>
                <p>Guides</p>
                <p>About</p>
            </div>
        </nav>
    );
};

export default Navbar;
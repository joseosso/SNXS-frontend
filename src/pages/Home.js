import classes from "./Home.module.css"
import UrlForm from "../components/URLForm/URLForm";

const Home = () => {
    return (
        <div className={classes.home}>
            <h1>SQL, XSS and NoSQL Injection Scanner</h1>
            <p>Start discovering vulnerabilities on your web application</p>
            <UrlForm/>
        </div>
    );
};

export default Home;
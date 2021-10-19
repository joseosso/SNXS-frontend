import classes from "./HomePage.module.css"
import UrlForm from "../../components/URLForm/URLForm";

const HomePage = () => {
    return (
        <div className={classes.home}>
            <h1>SQL, XSS and NoSQL Injection Scanner</h1>
            <p>Start discovering vulnerabilities on your web application</p>
            <p>Learn how to mitigate them</p>
            <UrlForm/>
        </div>
    );
};

export default HomePage;
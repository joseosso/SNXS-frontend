import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <ul>
                <li>GNU GPL v3 license</li>
                <li>&copy; 2021</li>
                <li>
                    <a href="https://github.com/jmossorio99/SNXS-frontend">Frontend <i className="fa fa-github" /></a>
                </li>
                <li>
                    <a href="https://github.com/marcopza/SNXS-backend">Backend <i className="fa fa-github" /></a>
                </li>
                <li><a href="mailto:marcopza99@hotmail.com">Contact Us</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
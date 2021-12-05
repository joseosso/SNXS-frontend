import React from 'react';
import classes from './AboutPage.module.css';
import Card from "../../components/UI/Card/Card";

const AboutPage = () => {
    return (
        <section className={classes.about}>
            <div className={classes.title}>
                <h1>SNXS</h1>
                <h3>SQL, NoSQL and XSS</h3>
            </div>
            <Card>
                <p>SNXS is a web application that attempts to make it easier for users to find vulnerabilities in their
                    web products by using open-source backend tools but with a much more user-friendly frontend look and
                    feel.</p>
                <p>SNXS was developed after noticing that most tools to detect SQL, NoSQL injections and XSS fell into
                    two groups:</p>
                <div className={classes.featureList}>
                    <p><em>1.</em> User-friendly but expensive</p>
                    <p><em>2.</em> Free but difficult to use</p>
                </div>
                <p>The app was part of a graduation project at Icesi University in 2021
                    and the goal is to set the basis for what could become the best open-source tool for scanning
                    websites. Those involved are:</p>
                <ul className={classes.list}>
                    <li><a href="https://www.linkedin.com/in/jose-ossorio-945848155/">
                        Jose Manuel Ossorio (Dev)</a></li>
                    <li><a href="https://www.linkedin.com/in/marcopza/">
                        Marco Antonio Pérez (Dev)</a></li>
                    <li><a href="https://www.linkedin.com/in/juanmanuelmadrid/">
                        Juan Manuel Madrid (Tutor)</a></li>
                </ul>
                <p>The following tools are used by SNXS to scan for each of the vulnerabilities:</p>
                <ul className={classes.list}>
                    <li><a href="https://github.com/stamparm/DSXS">Damn Small XSS Scanner by Miroslav Stampar</a></li>
                    <li><a href="https://sqlmap.org/">sqlmap by the sqlmap team</a></li>
                    <li><a href="https://github.com/Charlie-belmer/nosqli">NoSQLi by Charlie Belmer</a></li>
                </ul>
                <p><a href="https://github.com/marcopza/SNXS-backend">Click here</a> to find the GitHub repository with
                    the source code for the backend of the application</p>
                <p>This software is under GNU GPL v3 license, which means it is free software</p>
                <img src="https://www.gnu.org/graphics/gplv3-127x51.png" alt="License Logo"/>
                <div className={classes.footer}>
                    <ul>
                        <li>GNU GPL v3 license</li>
                        <li>&copy; 2021 Marco Pérez, Jose Ossorio</li>
                        <li>
                            <a href="https://github.com/jmossorio99/SNXS-frontend">Frontend <i className="fa fa-github" /></a>
                        </li>
                        <li>
                            <a href="https://github.com/marcopza/SNXS-backend">Backend <i className="fa fa-github" /></a>
                        </li>
                        <li><a href="mailto:marcopza99@hotmail.com">Contact Us</a></li>
                    </ul>
                </div>
            </Card>
            {/*<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
        </section>
    );
};

export default AboutPage;
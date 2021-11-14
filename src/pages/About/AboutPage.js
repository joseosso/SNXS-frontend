import React from 'react';
import classes from './AboutPage.module.css';
import Card from "../../components/UI/Card/Card";
import NumberOne from "../../assets/numberOne.png";
import NumberTwo from "../../assets/numberTwo.png";

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
                        <p><img className={classes.numberImage} src={NumberOne} alt="number 1"/> User-friendly but expensive</p>
                        <p><img className={classes.numberImage} src={NumberTwo} alt="number 2"/> Free but difficult to use</p>
                </div>
                <p>The app was started as a thesis project by Jose Ossorio and Marco Pérez at Icesi University on 2021
                    and our goal is to set the basis for what could become the best open-source tool for scanning
                    websites.</p>
            </Card>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </section>
    );
};

export default AboutPage;
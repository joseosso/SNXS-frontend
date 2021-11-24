import classes from "./GuidePage.module.css";
import Card from "../../components/UI/Card/Card";
import {Route, Link, Routes} from "react-router-dom";
import {Fragment} from "react";

const GuidePage = () => {
    return (
        <section className={classes.guides}>

            <Routes>
                <Route path={''} element={(
                    <Fragment>
                        <div className={classes.title}>
                            <h1>Guides</h1>
                        </div>
                        <Card>
                            <p>
                                SNXS is capable of identifying the following vulnerabilities (click
                                any of them for further information):
                            </p>
                            <ul className={classes.list}>
                                <li><Link to="sql-injection">SQL Injection</Link></li>
                                <li><a href="/">NoSQL Injection</a></li>
                                <li><a href="/">XSS</a></li>
                            </ul>
                        </Card>
                    </Fragment>
                )}/>
            </Routes>
        </section>
    );
};

export default GuidePage;
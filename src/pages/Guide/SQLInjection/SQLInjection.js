import {Link, Route, Routes} from "react-router-dom";
import classes from "../SQLInjection/SQLInjection.module.css";
import Card from "../../../components/UI/Card/Card";
import SqlInjectionType from "./SQLInjectionType";
import {Fragment} from "react";

const SqlInjection = () => {

    const sqlHome = (<section className={classes.content}>
        <div className={classes.title}>
            <h1>SQL Injection</h1>
        </div>
        <Card>
            <h2>Definition:</h2>
            <p>
                Consists of insertion or “injection” of a SQL query via the input
                data from the client to the application.
            </p>
            <h2>Consequences:</h2>
            <ul>
                <li>Modifications to data</li>
                <li>Access to data</li>
                <li>Unauthorized execution of commands</li>
                <li>Privileges obtention</li>
            </ul>
            <h2>Techniques Identifiable:</h2>
            <ul>
                <li><Link to={'/'}>Boolean-based blind</Link></li>
                <li><Link to={'/'}>Time-based blind</Link></li>
                <li><Link to={'/'}>Error-based</Link></li>
                <li><Link to={'/'}>UNION query-based</Link></li>
                <li><Link to={'/'}>Stacked queries</Link></li>
            </ul>
            <h2>Mitigation</h2>
            <h2>Sources and further reading:</h2>
            <ul>
                <li>CAPEC-66: SQL Injection</li>
                <li>SQL Injection - OWASP</li>
                <li>sqlmap user guide techniques</li>
            </ul>
        </Card>
    </section>);

    const booleanBased = <SqlInjectionType
        title={<h1>Boolean Based Blind SQLi</h1>}
        definition={<p>
            Boolean based SQL injection is a type of SQL injection where the attacker controls the value of a
            boolean parameter.
            The attacker sends a SQL query which forces the application to return a different result
            via the addition of a boolean value using a comparison
        </p>}
        sample={<Fragment><p>The following URL represents a query to a web page:</p>
            <p>http://newspaper.com/items.php?id=2</p>
            <p>This translates to the following SQL query:</p>
            <code>SELECT (specified_parameters) FROM items WHERE id = 2</code>
            <p>A hacker may test the following query and if the page doesn't return false the application is
                vulnerable</p>
            <p>http://newspaper.com/items.php?id=2 and 1=2</p>
            <p>Once this is verified, a truthy expression (i.e. ‘and 1=1’) can be used to obtain
                valuable data and or metadata form the application</p></Fragment>}
        sources={<ul>
            <li><Link to={'/'}>Blind SQL Injection - OWASP</Link></li>
            <li><Link to={'/'}>What are Blind SQL Injections - Acunetix</Link></li>
        </ul>}/>;

    return (
        <Routes>
            <Route path={'/'} element={sqlHome}/>
            <Route path={'boolean-based'} element={booleanBased}/>
        </Routes>

    );
};

export default SqlInjection;
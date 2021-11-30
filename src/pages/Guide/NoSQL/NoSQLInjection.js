import classes from "../GuideStyles.module.css";
import Card from "../../../components/UI/Card/Card";
import {Link, Route, Routes} from "react-router-dom";
import NoSqlInjectionType from "./NoSQLInjectionType";
import {Fragment} from "react";
import Mitigation from "../Mitigation";

const NoSqlInjection = () => {

    const noSqlInjectionHome = (
        <section className={classes.content}>
            <div className={classes.title}>
                <h1>NoSQL Injection</h1>
            </div>
            <Card>
                <h2>Definition:</h2>
                <p>Consists of insertion or “injection” of commands or queries into databases which don’t
                    use SQL queries (in SNXS’ case: MongoDB). Huge thanks to Charlie Belmer for the information
                    in these sections.</p>
                <h2>Consequences:</h2>
                <ul>
                    <li>Modifications to data</li>
                    <li>Access to data</li>
                    <li>Unauthorized execution of commands</li>
                    <li>Privileges obtention</li>
                </ul>
                <h2>Techniques Identifiable:</h2>
                <ul>
                    <li><Link to={'boolean-based'}>Boolean-based blind</Link></li>
                    <li><Link to={'time-based'}>Time-based blind</Link></li>
                    <li><Link to={'error-based'}>Error-based</Link></li>
                </ul>
                <h2><Link to={'mitigation'}>Mitigation</Link></h2>
                <h2>Sources and further reading:</h2>
                <ul>
                    <li><a href="https://www.netsparker.com/blog/web-security/what-is-nosql-injection/">
                        What is NoSQL Injection and How Can You Prevent It? - Netsparker</a></li>
                    <li><a href="https://github.com/Charlie-belmer/nosqli">NoSQLi’s github page - Charlie Belmer</a></li>
                    <li><a href="https://www.acunetix.com/blog/web-security-zone/nosql-injections/">
                        NoSQL Injections and how to Avoid Them - Tomasz A. Nidecki. - Acunetix</a></li>
                </ul>
            </Card>
        </section>
    );

    const booleanBased = <NoSqlInjectionType
        title={<h1>Boolean Based Blind NoSQLi</h1>}
        definition={(<p>The injection includes boolean expressions which change the page
            depending on its value</p>)}
        sample={(
            <Fragment>
                <p>The following code represents a sample backend query:</p>
                    <code>db.product.find( &#123;"id": 5&#125; )</code>
                <p>The following modification uses the $ne (not equals) operator to
                    select all
                    products different to that with ID 5:</p>
                <code>db.product.find( &#123;"id": &#123;"$ne": 5&#125; &#125; )</code>
            </Fragment>
        )}
        sources={
            <ul>
                <li><a href="https://nullsweep.com/nosql-injection-cheatsheet/">NoSQL Injection Cheatsheet - Nullsweep -
                    Charlie Belmer</a></li>
            </ul>
        }/>

    const timeBased = <NoSqlInjectionType
        title={<h1>Time Based NoSQLi</h1>}
        definition={(<p>Very similar to boolean nosqli except the hacker intends to pause the NoSQL
            instance before returning results.</p>)}
        sample={(
            <Fragment>
                <p>The following code represents a pair of possible injection strings:</p>
                    <code>&#123;"$where": "sleep(100)"&#125;</code>
                    <br/>
                    <code>;sleep(100);</code>
            </Fragment>
        )}
        sources={
            <ul>
                <li><a href="https://nullsweep.com/nosql-injection-cheatsheet/">
                    NoSQL Injection Cheatsheet - Nullsweep - Charlie Belmer</a></li>
            </ul>
        }/>

    const errorBased = <NoSqlInjectionType
        title={<h1>Error Based NoSQLi</h1>}
        definition={(<p>The hacker inputs strings or characters which would cause errors and
            check if the server returns errors (directly from Mongo or a 500 error)</p>)}
        sample={(
            <Fragment>
                <p>The following string represents an ideal input string to test for NoSQLi:</p>
                <code>'"\/$[].></code>
                <p>If the server returns an error message, the hacker can be certain the
                    application doesn’t sanitize input strings from the user hence facilitating
                    code injection.</p>
            </Fragment>
        )}
        sources={
            <ul>
                <li><a href="https://nullsweep.com/nosql-injection-cheatsheet/">
                    NoSQL Injection Cheatsheet - Nullsweep - Charlie Belmer</a></li>
            </ul>
        }/>

    const mitigation = <Mitigation
        title={<h1>Prevention of NoSQLi</h1>}
        content={(
            <Fragment>
                <p>The following are tips on how to prevent NoSQLi (mainly in mongo).</p>
                <h2>Validation:</h2>
                <ul>
                    <li>Sanitization library (mongo-sanitize, mongoose, etc)</li>
                    <li>Cast input to expected type</li>
                    <li>Build BSON objects</li>
                </ul>
                <h2>Configuration:</h2>
                <ul>
                    <li>Use --noscrpiting or set javascriptEnabled to false.</li>
                    <li>Use a least-privilege model.</li>
                </ul>
                <h2>Extra:</h2>
                <p>If for some reason you can’t disable javascript, avoid using:</p>
                <ul>
                    <li>$where</li>
                    <li>mapReduce</li>
                    <li>$accumulator</li>
                    <li>$function</li>
                </ul>
                <h2>Sources and further reading:</h2>
                <ul>
                    <li><a href="https://www.acunetix.com/blog/web-security-zone/nosql-injections/">
                        NoSQL Injections and How to Avoid Them - Acunetix - Tomasz A Nidecki</a></li>
                    <li><a href="https://www.netsparker.com/blog/web-security/what-is-nosql-injection/">
                        What is NoSQL Injection and How Can You Prevent It? - Netsparker - Zbigniew Banach</a></li>
                    <li><a href="https://docs.mongodb.com/manual/faq/fundamentals/#how-does-mongodb-address-sql-or-query-injection-">
                        FAQ: MongoDB Fundamentals. How does MongoDB address SQL or Query Injection - MongoDB</a></li>
                    <li><a href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05.6-Testing_for_NoSQL_Injection">
                        Testing for NoSQL Injection - OWASP</a></li>
                </ul>
            </Fragment>
        )}/>

    return (
        <Routes>
            <Route path={'/'} element={noSqlInjectionHome}/>
            <Route path={'boolean-based'} element={booleanBased}/>
            <Route path={'time-based'} element={timeBased}/>
            <Route path={'error-based'} element={errorBased}/>
            <Route path={'mitigation'} element={mitigation}/>
        </Routes>
    );
};

export default NoSqlInjection;
import {Link, Route, Routes} from "react-router-dom";
import classes from "../XSS/XSS.module.css";
import Card from "../../../components/UI/Card/Card";
import XSSType from "./XSSType";
import React, {Fragment} from "react";
import Mitigation from "../Mitigation";

const XSS = () => {

    const xssHome = (<section className={classes.content}>
        <div className={classes.title}>
            <h1>XSS</h1>
        </div>
        <Card>
            <h2>Definition:</h2>
            <p>
                Occurs when a hacker embeds scripts which are then served to web browsers. The idea
                is to execute scripts with user's privileges.
            </p>
            <h2>Consequences:</h2>
            <ul>
                <li>Disclosure of end user files</li>
                <li>Content spoofing</li>
                <li>Installation of Trojans</li>
                <li>Forceful browsing</li>
                <li>Session hijacking</li>
            </ul>
            <h2>Techniques Identifiable:</h2>
            <ul>
                <li><Link to={'reflected-based'}>Reflected XSS</Link></li>
            </ul>
            <h2>
                <Link to={"mitigation"}>Mitigation</Link>
            </h2>
            <h2>Sources and further reading:</h2>
            <ul>
                <li><a href={'https://owasp.org/www-community/attacks/xss/'}>Cross Site Scripting (XSS) - OWASP</a></li>
                <li><a href={'https://capec.mitre.org/data/definitions/63.html'}>CAPEC-63: Cross-Site Scripting (XSS) -
                    CAPEC</a></li>
            </ul>
        </Card>
    </section>);

    const reflectedBased = <XSSType
        title={<h1>Reflected XSS</h1>}
        definition={<p>
            Type of XSS where a malicious script is "reflected" off an application and
            then executed by a victim's browser.
        </p>}
        sample={<Fragment><p>The following URL represents a sample page which has a Welcome %user%:</p>
            <code>http://example.com/index.php?user=MrSmith</code>
            <p>Now the hacker may inject a script into (alert has to be inside of script tags which aren't complete
                here):</p>
            <code>http://example.com/index.php?user=&lt;script>alert(123)&lt;/script></code>
            <p>If the application is vulnerable, the popup will be visible. With that, the hacker may inject more
                elaborate scripts
                and serve the link to an unsuspecting user.</p></Fragment>}
        sources={<ul>
            <li><a
                href={'https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/07-Input_Validation_Testing/01-Testing_for_Reflected_Cross_Site_Scripting.html'}>
                Testing for Reflected Cross Site Scripting - OWASP</a>
            </li>
            <li><a href={'https://capec.mitre.org/data/definitions/591.html'}>CAPEC-591: Reflected XSS - CAPEC</a></li>
        </ul>}/>;

    const mitigation = <Mitigation
        title={<h1>Prevention of XSS</h1>}
        content={<Fragment>
            <p>The following are tips and rules on how to prevent XSS:</p>
            <h2>OWASP's Rules:</h2>
            <ul>
                <li>
                    Never insert untrusted data except in allowed locations.
                </li>
                <li>
                    HTML encode before inserting untrusted data into HTML element content.
                </li>
                <li>
                    Attribute encode before inserting untrusted data into JavaScript data values.
                </li>
                <li>
                    JavaScript encode before inserting untrusted data into HTML style property values.
                </li>
                <li>
                    CSS encode and strictly validate before inserting untrusted data into HTML style property values.
                </li>
                <li>
                    URL encode before inserting untrusted data into HTML URL parameter values.
                </li>
                <li>
                    Sanitize HTML markup with a library designed for the job.
                </li>
                <li>
                    Avoid JavaScript urls.
                </li>
                <li>
                    User HTTPOnly cookie flag.
                </li>
            </ul>
            <h2>Sources and further reading:</h2>
            <ul>
                <li><a
                    href={'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html'}>
                    Cross Site Scripting Prevention Cheat Sheet - OWASP</a></li>
                <li><a href={'https://capec.mitre.org/data/definitions/63.html'}>CAPEC-63: Cross-Site Scripting (XSS) -
                    CAPEC</a></li>
                <li><a
                    href={'https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html'}>DOM
                    based XSS Prevention Cheat Sheet - OWASP</a></li>
            </ul>
        </Fragment>}/>;

    return (
        <Routes>
            <Route path={'/'} element={xssHome}/>
            <Route path={'reflected-based'} element={reflectedBased}/>
            <Route path={'mitigation'} element={mitigation}/>
        </Routes>

    );
};

export default XSS;
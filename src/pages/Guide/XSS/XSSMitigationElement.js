import React from 'react';
import classes from "./XSS.module.css";
import Card from "../../../components/UI/Card/Card";

const XSSMitigationElement = (props) => {
    return (
        <section className={classes.content}>
            <div className={classes.title}>
                {props.title}
            </div>
            <Card>
                <section>
                    <p>
                        The following are tips and rules on how to prevent XSS:
                    </p>
                </section>
                <section>
                    <h2>OWASP's Rules:</h2>
                    {props.rules}
                </section>
                <section>
                    <h2>Sources and further reading:</h2>
                    {props.sources}
                </section>
            </Card>
        </section>
    );
};

export default XSSMitigationElement;
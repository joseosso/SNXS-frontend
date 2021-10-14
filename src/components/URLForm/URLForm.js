import classes from './URLForm.module.css'
import {useState} from "react";

const UrlForm = () => {

    const [sqlFilter, setSqlFilter] = useState({
        name: 'sql',
        text: 'SQL Injection',
        state: false
    });
    const [xssFilter, setXssFilter] = useState({
        name: 'xss',
        text: 'XSS',
        state: false
    });
    const [noSqlFilter, setNoSqlFilter] = useState({
        name: 'noSql',
        text: 'NoSQL Injection',
        state: false
    });


    const checkboxClickedHandler = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        if (name === sqlFilter.name) {
            setSqlFilter(prevState => {
                return {...prevState, state: checked}
            });
        } else if (name === xssFilter.name) {
            setXssFilter(prevState => {
                return {...prevState, state: checked}
            });
        } else {
            setNoSqlFilter(prevState => {
                return {...prevState, state: checked}
            });
        }
    }

    const scanClickedHandler = (event) => {
        event.preventDefault();
        console.log(sqlFilter.state);
        console.log(xssFilter.state);
        console.log(noSqlFilter.state);
    }

    return (
        <section className={classes.form}>
            <form onSubmit={scanClickedHandler}>
                <input type="text" placeholder={'Site URL'}/>
                <input type="text" placeholder={'Cookie if needed'}/>
                <p>Please select the types of scan you wish to perform</p>
                <div className={classes.checkboxes}>
                    <label className={classes.container}>{sqlFilter.text}
                        <input name={sqlFilter.name} checked={sqlFilter.state} onChange={checkboxClickedHandler}
                               className={classes.checkbox} type="checkbox"/>
                        <span className={classes.checkmark}/>
                    </label>
                    <label className={classes.container}>{xssFilter.text}
                        <input name={xssFilter.name} checked={xssFilter.state} onChange={checkboxClickedHandler}
                               className={classes.checkbox} type="checkbox"/>
                        <span className={classes.checkmark}/>
                    </label>
                    <label className={classes.container}>{noSqlFilter.text}
                        <input name={noSqlFilter.name} checked={noSqlFilter.state} onChange={checkboxClickedHandler}
                               className={classes.checkbox} type="checkbox"/>
                        <span className={classes.checkmark}/>
                    </label>
                </div>
                <button>SCAN</button>
            </form>
        </section>
    );
};

export default UrlForm;
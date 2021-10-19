import classes from './URLForm.module.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner/Spinner";
import {startScan} from "../../store/scan";

const isUrl = require('is-url')

const UrlForm = () => {

    const dispatch = useDispatch();

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
    const [filterErrors, setFilterErrors] = useState(false);
    const [url, setUrl] = useState('');
    const [urlErrors, setUrlErrors] = useState(false);
    const [cookie, setCookie] = useState('');

    const isLoading = useSelector(state => state.ui.urlFormIsLoading);

    const checkboxClickedHandler = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        if (name === sqlFilter.name) {
            if (filterErrors) {
                setFilterErrors(false);
            }
            setSqlFilter(prevState => {
                return {...prevState, state: checked}
            });
        } else if (name === xssFilter.name) {
            if (filterErrors) {
                setFilterErrors(false);
            }
            setXssFilter(prevState => {
                return {...prevState, state: checked}
            });
        } else {
            setNoSqlFilter(prevState => {
                if (filterErrors) {
                    setFilterErrors(false);
                }
                return {...prevState, state: checked}
            });
        }
    }

    const urlChangedHandler = (event) => {
        const url = event.target.value;
        if (!isUrl(url)) {
            setUrlErrors(true);
        } else {
            setUrlErrors(false);
        }
        setUrl(url);
    }

    const cookieChangedHandler = (event) => {
        const cookie = event.target.value;
        setCookie(cookie);
    }

    const checkFilters = () => {
        return sqlFilter.state || xssFilter.state || noSqlFilter.state;
    }

    const clearFields = () => {
        setUrl('');
        setCookie('');
        setSqlFilter(prevState => {
            return {...prevState, state: false}
        });
        setXssFilter(prevState => {
            return {...prevState, state: false}
        });
        setNoSqlFilter(prevState => {
            return {...prevState, state: false}
        });
    }

    const scanClickedHandler = (event) => {
        event.preventDefault();
        if (isUrl(url)) {
            setUrlErrors(false)
            if (checkFilters()) {
                setFilterErrors(false);
                const payload = {
                    url: url,
                    cookie: cookie,
                    type: `${sqlFilter.state ? '1' : ''}${xssFilter.state ? '2' : ''}${noSqlFilter.state ? '3' : ''}`
                };
                // Maybe send a callback function to startScan to clear fields and redirect from there.
                dispatch(startScan(payload, clearFields));
            } else {
                setFilterErrors(true);
            }
        } else {
            setUrlErrors(true);
        }
    }

    const form = (
        <form onSubmit={scanClickedHandler}>
            {urlErrors && <p id={classes['errorMessage']}>Please enter a valid URL</p>}
            <input type="text" placeholder={'Site URL'} value={url} onChange={urlChangedHandler}/>
            <input type="text" placeholder={'Cookie if needed'} value={cookie} onChange={cookieChangedHandler}/>
            <p>Please select the types of scan you wish to perform</p>
            <div className={classes.checkboxes}>
                <label className={classes.container}>{sqlFilter.text}
                    <input name={sqlFilter.name} checked={sqlFilter.state} onChange={checkboxClickedHandler}
                           type="checkbox"/>
                    <span className={classes.checkmark}/>
                </label>
                <label className={classes.container}>{xssFilter.text}
                    <input name={xssFilter.name} checked={xssFilter.state} onChange={checkboxClickedHandler}
                           type="checkbox"/>
                    <span className={classes.checkmark}/>
                </label>
                <label className={classes.container}>{noSqlFilter.text}
                    <input name={noSqlFilter.name} checked={noSqlFilter.state} onChange={checkboxClickedHandler}
                           type="checkbox"/>
                    <span className={classes.checkmark}/>
                </label>
            </div>
            {filterErrors && <p id={classes['errorMessage']}>Please select at least one type of scan</p>}
            <button>SCAN</button>
        </form>
    )

    return (
        <section className={classes.form}>
            {isLoading ? <Spinner/> : form}
        </section>
    );
};

export default UrlForm;
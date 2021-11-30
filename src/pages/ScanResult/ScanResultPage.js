import classes from "./ScanResultPage.module.css";
import ScanResult from "../../components/ScanResult/ScanResult";
import {useSelector} from "react-redux";
import {Fragment} from "react";
import {Link} from "react-router-dom";

const ScanResultPage = () => {

    const scanResult = useSelector(state => state.scanner.scanResult);

    return (
        <div className={classes.card}>
            {scanResult  ? (
                <Fragment>
                    <div className={classes.result}>
                        <h1>These are the results of the scan:</h1>
                        {
                            scanResult.data.SQLi && <ScanResult title={'SQL Injection'} text={scanResult.data.SQLi}/>
                        }
                        {
                            scanResult.data.NoSQLi && <ScanResult title={'NoSQL Injection'} text={scanResult.data.NoSQLi}/>
                        }
                        {
                            scanResult.data.XSS && <ScanResult title={'XSS'} text={scanResult.data.XSS}/>
                        }
                        <p>
                            Click <Link to={'/guide'}>here</Link> to learn how to mitigate them.
                        </p>
                    </div>
                </Fragment>
            ) : <h3>Please run a scan first</h3>}
        </div>
    );
};

export default ScanResultPage;
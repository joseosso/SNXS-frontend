import classes from "./ScanResultPage.module.css";
import ScanResult from "../../components/ScanResult/ScanResult";
import {useSelector} from "react-redux";
import {Fragment} from "react";

const ScanResultPage = () => {

    const scanResult = useSelector(state => state.scanner.scanResult);

    const result = (
        <Fragment>
            <h1>These are the results of the scan:</h1>
            <ScanResult title={'SQL Injection'} text={scanResult.SQLi}/>
            <ScanResult title={'NoSQL Injection'} text={scanResult.NoSQLi}/>
            <ScanResult title={'XSS'} text={scanResult.XSS}/>
        </Fragment>
    )

    return (
        <div className={classes.card}>
            {scanResult ? result : <h3>Please run a scan first</h3>}
        </div>
    );
};

export default ScanResultPage;
import classes from "./ScanResultPage.module.css";
import ScanResult from "../../components/ScanResult/ScanResult";
import {useSelector} from "react-redux";
import {Fragment} from "react";

const ScanResultPage = () => {

    const scanResult = useSelector(state => state.scanner.scanResult);

    const result = (
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
            </div>
        </Fragment>
    )

    return (
        <div className={classes.card}>
            {scanResult ? result : <h3>Please run a scan first</h3>}
        </div>
    );
};

export default ScanResultPage;
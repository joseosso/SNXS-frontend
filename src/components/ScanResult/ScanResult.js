import React from 'react';

const ScanResult = (props) => {
    return (
        <div>
            <p>{props.title}:</p>
            <br/>
            <p>{props.text}</p>
        </div>
    );
};

export default ScanResult;
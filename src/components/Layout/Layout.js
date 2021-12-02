import React, {Fragment} from 'react';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            {props.children}
        </Fragment>
    );
};

export default Layout;
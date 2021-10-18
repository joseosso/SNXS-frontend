import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import {Redirect, Route, Switch} from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import GuidePage from "./pages/Guide/GuidePage";

function App() {
  return (
    <Layout>
        <Switch>
            <Route path={'/'} exact>
                <HomePage />
            </Route>
            <Route path={'/about'}>
                <AboutPage />
            </Route>
            <Route path={'/guide'}>
                <GuidePage />
            </Route>
            <Route path={"*"}>
                <Redirect to={"/"}/>
            </Route>
        </Switch>

    </Layout>
  );
}

export default App;

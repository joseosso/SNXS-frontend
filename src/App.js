import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import {Navigate, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import GuidePage from "./pages/Guide/GuidePage";
import ScanResultPage from "./pages/ScanResult/ScanResultPage";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path={'/'} element={<HomePage />}/>
            <Route path={'/about'} element={<AboutPage />}/>
            <Route path={'/guide'} element={<GuidePage />}/>
            <Route path={'/result'} element={<ScanResultPage />}/>
            <Route path={"*"} element={<Navigate replace to={"/"}/>}/>
        </Routes>

    </Layout>
  );
}

export default App;

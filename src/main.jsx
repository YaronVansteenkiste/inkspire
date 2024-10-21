import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter, Routes, Route, Outlet} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {CollabPage} from "./pages/CollabPage.jsx";
import {PictureDetails} from "./pages/PictureDetails.jsx";
import {COLLAB_DATA, IMAGES_DATA} from "./data/data.js";
import {AnimatedBackground} from "./components/AnimatedBackground.jsx";
import {SearchResultsPage} from "./pages/SearchResultsPage.jsx";
import {CollabDetails} from "./pages/CollabDetails.jsx";
import {Login} from "./components/Login.jsx";
import {HomePageDB} from "./pages/HomePageDB.jsx";

const Layout = () => {
    return (
        <div>
            <AnimatedBackground/>
            <Header images={IMAGES_DATA}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<App images={IMAGES_DATA}/>} />
                <Route path="collab" element={<CollabPage collaborations={COLLAB_DATA}/>} />
                <Route path="post/:id" element={<PictureDetails images={IMAGES_DATA}/>} />
                <Route path="search/:searchQuery" element={<SearchResultsPage images={IMAGES_DATA}/>} />
                <Route path="collab/:id" element={<CollabDetails collaborations={COLLAB_DATA}/>} />
                <Route path="login" element={<Login />} />
                <Route path={"/db"} element={<HomePageDB />}/>
            </Route>
        </Routes>
    </HashRouter>
)

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/custom.scss'
import './App.css'
import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import {COLLAB_DATA, IMAGES_DATA} from "./data/data.js";
import {CollabPage} from "./pages/CollabPage.jsx";
import {SearchResultsPage} from "./pages/SearchResultsPage.jsx";
import {CollabDetails} from "./pages/CollabDetails.jsx";
import {Login} from "./components/Login.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import './services/firebase.js'
import {AnimatedBackground} from "./components/AnimatedBackground.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Providers} from "./components/Providers.jsx";
import {UploadPostPage} from "./pages/UploadPostPage.jsx";
import {PictureDetails} from "./pages/PictureDetails.jsx";
import {CreateCollabPage} from "./pages/CreateCollabPage.jsx";

const Layout = () => {
    return (
        <div>
            <Providers>
            <AnimatedBackground/>
            <Header images={IMAGES_DATA}/>
            <Outlet/>
            <Footer/>
            </Providers>

        </div>
    )
}

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage />}/>
                        <Route path="collab" element={<CollabPage collaborations={COLLAB_DATA}/>}/>
                        <Route path="post/:id" element={<PictureDetails />}/>
                        <Route path="search/:searchQuery" element={<SearchResultsPage images={IMAGES_DATA}/>}/>
                        <Route path="collab/:id" element={<CollabDetails collaborations={COLLAB_DATA}/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path={"/upload"} element={<UploadPostPage/>}/>
                        <Route path={"/create-collab"} element={<CreateCollabPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App

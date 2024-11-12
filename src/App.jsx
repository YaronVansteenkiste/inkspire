import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/custom.scss'
import './App.css'
import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import {CollabPage} from "./pages/CollabPage.jsx";
import {SearchResultsPage} from "./pages/SearchResultsPage.jsx";
import {CollabDetailsPage} from "./pages/CollabDetailsPage.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import './services/firebase.js'
import {AnimatedBackground} from "./components/AnimatedBackground.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Providers} from "./components/Providers.jsx";
import {CreatePostPage} from "./pages/CreatePostPage.jsx";
import {PictureDetails} from "./pages/PictureDetails.jsx";
import {CreateCollabPage} from "./pages/CreateCollabPage.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Alert from "./components/Alert.jsx";
import {EditImagePage} from "./pages/EditImagePage.jsx";
import {NoConnectionPage} from "./pages/NoConnectionPage.jsx";


const Layout = () => {
    return (
        <div>
            <Providers>
                <AnimatedBackground/>
                <Header/>
                <Alert/>
                <Outlet/>
                <Footer/>
            </Providers>
        </div>
    )
}

function checkFirebaseConfig() {
    return (
        import.meta.env.VITE_FIREBASE_API_KEY &&
        import.meta.env.VITE_FIREBASE_PROJECT_ID &&
        import.meta.env.VITE_FIREBASE_STORAGE_BUCKET &&
        import.meta.env.VITE_FIREBASE_APP_ID
    );
}
function App() {
    const isFirebaseConfigValid = checkFirebaseConfig();

    return (
        isFirebaseConfigValid ? (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="collab" element={<CollabPage/>}/>
                        <Route path="post/:id" element={<PictureDetails/>}/>
                        <Route path="search/:searchQuery" element={<SearchResultsPage/>}/>
                        <Route path="collab/:id" element={<CollabDetailsPage/>}/>
                        <Route path={"upload"} element={<CreatePostPage/>}/>
                        <Route path={"create-collab"} element={<CreateCollabPage/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="register" element={<RegisterPage/>}/>
                        <Route path="profile" element={<ProfilePage/>}/>
                        <Route path="edit-image/:id" element={<EditImagePage/>}/>
                        <Route path="no-connection" element={<NoConnectionPage/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        ) : (
            <NoConnectionPage/>
        )
    )
}

export default App
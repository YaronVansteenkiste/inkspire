import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {CollabPage} from "./pages/CollabPage.jsx";
import {PictureDetails} from "./pages/PictureDetails.jsx";
import {COLLAB_DATA, IMAGES_DATA} from "./data/data.js";
import {AnimatedBackground} from "./components/AnimatedBackground.jsx";
import {SearchResultsPage} from "./pages/SearchResultsPage.jsx";
import {CollabDetails} from "./pages/CollabDetails.jsx";

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


const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [{
        path: '/',
        element: <App images={IMAGES_DATA}/>
    }, {
        path: '/collab',
        element: <CollabPage collaborations={COLLAB_DATA}/>
    },
        {
            path: '/post/:id',
            element: <PictureDetails images={IMAGES_DATA}/>
        }, {
            path: '/search/:searchQuery',
            element: <SearchResultsPage images={IMAGES_DATA}/>
        },{
            path: '/collab/:id',
            element: <CollabDetails collaborations={COLLAB_DATA}/>
        },
    ]
}])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

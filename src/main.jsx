import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {CollabPage} from "./pages/CollabPage.jsx";
import {PictureDetails} from "./pages/PictureDetails.jsx";
import {IMAGES_DATA} from "./data/data.js";
import {AnimatedBackground} from "./components/AnimatedBackground.jsx";

const Layout = () => {
    return (
        <div>
            <AnimatedBackground/>
            <Header/>
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
        element: <CollabPage/>
    },
        {
            path: '/post/:id',
            element: <PictureDetails images={IMAGES_DATA}/>
        }]
}])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

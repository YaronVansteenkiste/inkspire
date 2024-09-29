import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Collab} from "./pages/Collab.jsx";
import {PictureDetails} from "./pages/PictureDetails.jsx";
import {IMAGES_DATA} from "./data/data.js";

const Layout = () => {
    return (
        <div>
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
        element: <Collab/>
    },
        {
            path: '/post/:id',
            element: <PictureDetails images={IMAGES_DATA}/>
        }]
}])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

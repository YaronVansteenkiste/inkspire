import {useState} from 'react'
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/custom.scss'
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)
  const arr = [1, 24, 52, 23];


  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App

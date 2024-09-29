import {useState} from 'react'
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/custom.scss'
import './App.css'
import Trending from "./components/Trending.jsx";
import YourWorks from "./components/YourWorks.jsx";


function App() {
  const [count, setCount] = useState(0)
  const arr = [1, 24, 52, 23];


  return (
    <div>
        <Trending />
        <YourWorks />
    </div>
  )
}

export default App

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/custom.scss'
import './App.css'
import {HomePage} from "./pages/HomePage.jsx";


function App(props) {
  const {images} = props;

  return (
    <div>
        <HomePage images={images}/>
    </div>
  )
}

export default App

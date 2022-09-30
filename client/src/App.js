import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbaar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import {Routes, Route} from "react-router-dom";
import Details from './components/Details';


function App() {
  return (
    <div className='container'>
    <Navbaar />
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Edit/:id' element={<Edit/>} />
      <Route path='/view/:id' element={<Details/>} />
    </Routes>

    </div>
  );
}

export default App;

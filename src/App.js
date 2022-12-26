import './App.css';
import Mainhome from './Mainhome';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<><Login/></>}></Route>
          <Route path='/checkout' element={<><Checkout/></>}></Route>
          <Route path='/' element={<><Home/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

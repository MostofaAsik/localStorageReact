import { useState } from "react";

import "./App.css";

import Login from "./components/Login/Login";

import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [watchTime, setWatchTime] = useState('')

  const handelWatchTime = (time) => {
    const previousWtchTime = JSON.parse(localStorage.getItem('watchTime'))

    if (previousWtchTime) {
      const newWatchTime = previousWtchTime + time;
      localStorage.setItem('watchTime', newWatchTime)
      setWatchTime(newWatchTime)
    }
    else {
      localStorage.setItem('watchTime', time)
      setWatchTime(time)
    }
  }


  return (
    <div>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8 card">
          <Home handelWatchTime={handelWatchTime}></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart watchTime={watchTime}></SideCart>

        </div>
      </div>
      <Contact></Contact>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;

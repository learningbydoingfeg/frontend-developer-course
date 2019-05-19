import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"; // importarlo
import Main from "./components/Main"; // importarlo
import Footer from "./components/Footer"; // importarlo
import Gallery from "./components/Gallery"; 
import Video from "./components/Video";
import Audio from "./components/Audio";
import Comment from "./components/Comment";
import Sidebar from "./components/Sidebar"



const App = () => {
  return (
  <div className="body">
  
  <Header />

  <Main />  

  <Footer />

         
  </div>
  )

}

export default App;
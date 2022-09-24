import React from 'react';
import './App.css';
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/sidebar';



function App() {
  return (

  <div className="App">

     <Header></Header>

    <div className='main-page'>

     <Sidebar></Sidebar>

     <RecommendedVideos></RecommendedVideos>

    </div>
     
  </div>
  );
}

export default App;

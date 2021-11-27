import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RawPost from './Components/RawPost/RawPost';
import {action, originals, comedy} from './url'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost url={originals} title="Netfix Originals" />
      <RawPost url={action} title="Action" isSmall />
      <RawPost url={comedy} title="Comedy" isSmall />
      
    </div>
  );
}

export default App;

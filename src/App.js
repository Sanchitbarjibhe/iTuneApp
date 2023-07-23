import './App.css';
import React, { useState, useEffect } from 'react';
import Topsongs from './Components/SongTable';


function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await fetch(`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=20/json`)
      .then(response => response.json())
      .then(data => setSongs(data['feed']['entry']))
  }
  return (
    <div className="App">
      <h1>Top 20 Songs on iTunes</h1>
      <Topsongs songs={songs} />
    </div>
  );
}

export default App;

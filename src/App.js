import './App.css';
import { useState, useEffect } from 'react';
function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };


  useEffect(() => {
    const song = new Audio("https://firebasestorage.googleapis.com/v0/b/harmony-2ed98.appspot.com/o/Counting%20Stars%20-%20OneRepublic_320-%20%5BPagalWorld.NL%5D.mp3?alt=media&token=12a0a40b-f82b-462a-9b55-47c16c5f379f")

    if (isPlaying) {
      song.play();
    } else {
      song.pause();
    }

    return () => {
      song.pause();
    };
  }, [isPlaying]);





  return (
    <div className="App">
      <h1>Harmony</h1>


      <div className='sidebar'>
        <h2>Library</h2>
        <h2>Liked Songs</h2>
        <h2>Upload a Song</h2>
      </div>

      <div className='player'>
        <h2>SONG</h2>
        <button onClick={toggleAudio}>{isPlaying ? 'Pause' : 'Play'}</button>
        <h2>etc...</h2>
      </div>
    </div>
  );
}

export default App;

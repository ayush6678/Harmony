import './App.css';
import { useState, useEffect } from 'react';
import Upload from './Upload';
import Recommend from './Recommend';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import Queue from './Queue.js';

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

      <div className='sidebar'>
        <IconButton>
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <IconButton>
          <FavoriteIcon />
        </IconButton>

        <IconButton>
          <AddIcon />
        </IconButton>

      </div>

      <div className='recommend'>
        <Recommend />
      </div>

      <div className='queue'><Queue />
        <Upload />
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

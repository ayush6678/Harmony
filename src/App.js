import './App.css';
import Recommend from './Recommend';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
function App() {
  return (
    <div className="App">

      <div className='sidebar'>
        

        <IconButton>
          <SearchIcon sx={{color:'white'}}/>
        </IconButton>

        <IconButton>
          <FavoriteIcon  sx={{color:'white'}}/>
        </IconButton>

        <IconButton>
          <AddIcon  sx={{color:'white'}}/>
        </IconButton>

      </div>

      <div className='recommend'>
        <Recommend />
      </div>

    </div>
  );
}

export default App;

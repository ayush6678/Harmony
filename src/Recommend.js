import "./Recommend.css";
import { Song } from "./Song.js";
import axios from "axios";
import { useEffect, useState } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { IconButton } from "@mui/material";
import Queue from "./Queue.js";

function Recommend() {
    // const axios=require('axios');
    const [songs, setSongs] = useState([]);
    const [filter, setFilter] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        axios.get("https://harmony-backend-1rjg.onrender.com/fetchData").then(res => {
            setSongs(res.data);
        });
    }, []);


    useEffect(() => {
        setFilter(songs);

        const filtered = songs.filter((song) => {
            return song.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilter(filtered);

    }, [searchQuery, songs])


    const searchResults = (e) => {
        setSearchQuery(e.target.value);
    }

    const [songLink, setSongLink] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [current, setCurrent] = useState(["Song", "Artist", "https://t4.ftcdn.net/jpg/03/93/23/51/360_F_393235111_ygEWm52rXjI72T7pyJUOcsDRvf8rY3ON.jpg"]);

    useEffect(() => {
        const song = new Audio(songLink);

        if (isPlaying) {
            song.play();
        } else {
            song.pause();
        }
        return () => {
            song.pause();
        };
    }, [isPlaying, songLink]);




    return (
        <div className="main">

            <div className="search">
                <input type="text" placeholder="Search here for songs" value={searchQuery} onChange={searchResults}></input>

                <h1>Recommendation for you</h1>
            </div>


            <div className="songs">

                {filter.map((song) => {

                    return (<div style={{ display: "flex", flexDirection: "column" }} onClick={() => {
                        setIsPlaying(!isPlaying);
                        setSongLink(song.accessToken);
                        setCurrent([song.name, song.auth, song.image])
                    }}>

                        <Song
                            auth={song.auth}
                            name={song.name}
                            image={song.image}
                            current={current}
                            isPlaying={isPlaying}
                        />
                    </div>)
                })}

            </div>


            <div className="Player">

                <div style={{ display: "flex" }}>
                    <img src={current[2]} width={50} alt="songArt" />
                    <div className="songListing">
                        {current[0]}
                        <br />
                        {current[1]}
                    </div>
                </div>

                <div>
                    <IconButton onClick={() => {
                        if (current.name !== "Song") {
                            setIsPlaying(!isPlaying)
                        }
                    }}
                    >
                        {!isPlaying ? <PlayCircleIcon fontSize="large" sx={{ color: "white" }} /> :
                            <PauseCircleFilledIcon fontSize="large" sx={{ color: "white" }} />}
                    </IconButton>
                </div>

                <div>
                    Etc<br />
                    icons here
                </div>
            </div>

            <div className="queue">
                <Queue songs={songs}/>
            </div>



        </div >
    )
}

export default Recommend;
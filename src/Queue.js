import { IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import './Queue.css';
import Upload from "./Upload.js";
function Queue({ songs }) {

    return (
        <div className="Q">

            <div style={{ display: "flex" }}>
                <IconButton sx={{ color: "white", borderRadius: "50%" }}>
                    <ChatIcon />
                </IconButton>
                <IconButton sx={{ color: "white", borderRadius: "50%" }}>
                    <NotificationsIcon />
                </IconButton>
                <IconButton sx={{ color: "white", borderRadius: "50%" }}>
                    <PersonIcon />
                </IconButton>
                <div className="logo">
                    <h1>Harmony</h1>
                </div>
            </div>

            <Upload />

            <div className="Lib">
                <h2>Your Library</h2>

                <div className="Library">
                    {songs.map((song) => {
                        return (
                            <div className="miniList">
                                <img src={song.image} width={"20%"} height={"20%"} />
                                <div style={{fontSize:"smaller"}}>
                                    {song.name}<br/>
                                    {song.auth}
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default Queue;
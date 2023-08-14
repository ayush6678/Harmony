import { IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
function Queue() {

    return (
        <div style={{display:"flex",justifyContent:"end",margin:"10px"}}>
            <IconButton   sx={{ color: "white", borderRadius: "50%" }}>
                <ChatIcon />
            </IconButton>
            <IconButton sx={{ color: "white", borderRadius: "50%" }}>
                <NotificationsIcon />
            </IconButton>
            <IconButton sx={{ color: "white", borderRadius: "50%" }}>
                <PersonIcon />
            </IconButton>

        </div>
    )
}
export default Queue;
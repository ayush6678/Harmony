
import "./Song.css";

export function Song({ auth, image, name, isPlaying,current }) {

    return (
        <div style={{ cursor: "pointer" }}>

            <div className="song" style={{
                margin: "10px",
                borderRadius: "3px",
                overflow: "hidden",
                boxShadow: ((current[0]===name)&&isPlaying) ? "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" : ""
            }} >
                <img src={image} width={"170px"} alt="song art" />
                <h3 style={{ color: "white" }}>{name}</h3>
                <h4>{auth}</h4>
            </div>
        </div >
    )
}
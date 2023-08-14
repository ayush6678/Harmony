function Song({ auth, image, name }) {
    return (
        <div style={{cursor:"pointer",margin:"10px"}}>
            <img src={image} width={"200px"} alt="song art"/>
            <h3 style={{ color: "white" }}>{name}</h3>
            <h4 style={{ color: "gray", marginTop:"-10px" }}>{auth}</h4>
        </div>
    )
}
export default Song;
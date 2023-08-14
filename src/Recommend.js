import "./Recommend.css";
import Song from "./Song.js";

function Recommend() {
    return (
        <div className="main">
            <input type="text" placeholder="Search here for songs"></input>

            <h1>Recommendation for you</h1>

            <div style={{ display: "flex", webkitScrollbar: "display: none" }}>
                <Song auth="Ruth.B" name="Dandelion" image="https://m.media-amazon.com/images/I/81xafvChFiL._SS500_.jpg" />
                <Song auth="Ruth.B" name="Dandelion" image="https://m.media-amazon.com/images/I/81xafvChFiL._SS500_.jpg" />



            </div>
        </div >
    )
}

export default Recommend;
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import "./Upload.css"
import axios from "axios";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://qhfeezkilpoxrueywxsz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoZmVlemtpbHBveHJ1ZXl3eHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNjY1OTYsImV4cCI6MjAwODg0MjU5Nn0.O8GRQD0S3eNL9rFyD_-7omHzs_p4X1awTEI6Crtoq80')

function Upload() {

    const [disp, setDisp] = useState(false);
    const [file, setFile] = useState(null);
    const [percent, setPercent] = useState(0);
    const [name, setName] = useState("Song");
    const [auth, setAuth] = useState("Anonymous");
    const [image, setImage] = useState("https://t4.ftcdn.net/jpg/03/93/23/51/360_F_393235111_ygEWm52rXjI72T7pyJUOcsDRvf8rY3ON.jpg");

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }



        async function handleUpload(file) {
            if (!file) {
                alert("Please upload an image first!");
            }

            const { data, error } = await supabase.storage.from('harmonySongStorage').upload('/home/ayyushh/Downloads/believer.mp3', file)
            if (error) {
                console.log("nope"+error+data);
            } else {
                // Handle success
                console.log("YUpp");

            }
        }

        //     const storageRef = ref(storage, `/${file.name}`);
        //     const uploadTask = uploadBytesResumable(storageRef, file);

        //     uploadTask.on(
        //         "state_changed",
        //         (snapshot) => {
        //             const percent = Math.round(
        //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //             );
        //             setPercent(percent);
        //         },
        //         (err) => console.log(err),
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        //                 console.log(url);

        //                 axios.post("https://harmony-backend-1rjg.onrender.com/songData", {
        //                     name: name,
        //                     auth: auth,
        //                     image: image,
        //                     accessToken: url
        //                 })
        //             });
        //         }
        //     );

    return (
        <div className="Upload" style={{ padding: disp ? "20px" : "0" }}>
            <div className="visible" >
                <button onClick={e => { setDisp(!disp) }}>{disp ? "Collapse" : "Upload Song"}</button>
            </div>

            <div className="expanded" style={{ display: disp ? "" : "none" }}>
                <h1>Upload A Song</h1>
                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name of the song" /><br />
                <input type="text" onChange={(e) => { setAuth(e.target.value) }} placeholder="Artist" /><br />
                <input type="text" onChange={(e) => { setImage(e.target.value) }} placeholder="Link to Song Art" /><br />

                <input type="file" onChange={handleChange} style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    borderRadius: "5px"
                }} />

                <button type="submit" onClick={handleUpload} style={{ margin: "10px" }}>Upload to Firebase</button>
                <p>{percent === 0 ? "" : `${percent}% done`}</p>
            </div>

        </div>
    );
};

export default Upload;

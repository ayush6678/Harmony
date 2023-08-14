import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import "./Upload.css"

const firebaseConfig = {
    apiKey: "AIzaSyAINyNbt7xoNUzjmsUR-WxxSLnAPmN8PNU",
    authDomain: "harmony-2ed98.firebaseapp.com",
    projectId: "harmony-2ed98",
    storageBucket: "harmony-2ed98.appspot.com",
    messagingSenderId: "1039945448650",
    appId: "1:1039945448650:web:05f8eda461d599db058833"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Upload() {
    const [file, setFile] = useState(null);
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };

    return (
        <div className="Upload">
            <h1>Upload A Song</h1>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent === 0 ? "" : `${percent}% done`}</p>
        </div>
    );
};

export default Upload;
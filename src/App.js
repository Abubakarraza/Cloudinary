import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const onUploadImageHandler = () => {
    const data = new FormData();
    data.append("file", image);

    data.append("upload_preset", "upload-preset");
    data.append("cloud_name", "cloudname");

    fetch("https://api.cloudinary.com/v1_1/cloudname/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(res => setUrl(res.url)).
      catch(err => console.log(err))
  }
  return (
    <>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={onUploadImageHandler} style={{ color: "goldenrod" }}>Upload</button>
      {/* image will be displayed here */}
      <img style={{ height: "300px", width: "auto" }} src={url.toString()} alt="abuakar" />



    </>
  );
}

export default App;

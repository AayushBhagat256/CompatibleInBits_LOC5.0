import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Upload } from '@mui/icons-material';
function ImageUpload() {
  const [image, setImage] = useState(null);
  // const []

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    iupload()
  };

  const iupload=()=>{
    var bear="Bearer "+localStorage.getItem("access");
    var myHeaders = new Headers();
myHeaders.append("Authorization", bear);

var formdata = new FormData();
formdata.append("image", image, "/C:/Users/shahv/Pictures/Screenshots/Screenshot_20230110_194135.png");

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/account/images/", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result);
    console.log("vatsal");
  })
  .catch(error => console.log('error', error));
    
  }

  const navi = useNavigate()
    const [data,setData]=useState();
    useEffect(() => {

        var bear="Bearer "+localStorage.getItem("access");
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '//127.0.0.1:8000/account/profile/',
            headers: {
                'Authorization':bear
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setData(response.data)
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });


            var config1 = {
              method: 'get',
            maxBodyLength: Infinity,
              url: '//127.0.0.1:8000/account/images/',
              headers: { 
                'Authorization': bear
              }
            };
            
            axios(config1)
            .then(function (response) {
              console.log((response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
            
    }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the uploaded image (e.g. send it to a server)
    console.log(image);
  };

  return (
    <>
    {data?(<><div>
      <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
      
      </div></>):(<div></div>)}
    
    </>
    
  );
}

export default ImageUpload;

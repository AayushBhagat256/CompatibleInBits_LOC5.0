import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Upload } from '@mui/icons-material';
import Grid from '@mui/system/Unstable_Grid/Grid';
function ImageUpload() {
  const [image, setImage] = useState(null);
  const [id,setId]=useState();
  // const []
  var name;
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    name = selectedImage.name;
    setImage(selectedImage);
    iupload()
  };

  const iupload = () => {
    var bear = "Bearer " + localStorage.getItem("access");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", bear);

    var formdata = new FormData();
    formdata.append("image", image, name);

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
      .catch(error => console.log('error', error, "hi"));

  }

  const navi = useNavigate()
  const [data, setData] = useState();
  useEffect(() => {

    var bear = "Bearer " + localStorage.getItem("access");
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: '//127.0.0.1:8000/account/profile/',
      headers: {
        'Authorization': bear
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data)
        console.log(response.data)
      })
      .then(() => {
        axios.get('//127.0.0.1:8000/account/images/',
        {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("access")
          }, 
          validateStatus: function (status) {
          return true;
      }})
        .then((res) => {
          console.log(res.data)
          setId(res.data);
        })
        .catch((err) => console.error(err))
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", bear);

        // var formdata = new FormData();

        // var requestOptions = {
        //   method: 'GET',
        //   headers: myHeaders,
        //   body: formdata,
        //   redirect: 'follow'
        // };

        // fetch("127.0.0.1:8000/account/images/", requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));

      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the uploaded image (e.g. send it to a server)
    console.log(image);
  };
let imgurl='http://127.0.0.1:8000'
var i;
  return (
    <>
    {console.log(id)}
      {data ? (<><div>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button type="submit">Upload</button>
        </form>

      </div></>) : (<div></div>)}
      {id?(<><div>
        
        {
            id.map(c=>(
              <>
                <img src={imgurl+c.image} ></img>
                {/* <img src={i}></img> */}
                {/* <h2>Hello</h2> */}
                <br></br>
              
              </>
            ))

        }
        
        </div></>):(<div>hii</div>)}

    </>

  );
}

export default ImageUpload;

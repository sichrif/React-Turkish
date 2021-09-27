import './Location.module.css';
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Room, Star } from '@material-ui/icons';
import axios from 'axios';
import { Icon } from '@iconify/react';
import deleteFilled from '@iconify/icons-ant-design/delete-filled';
 import { format } from 'timeago.js';
import authHeader from 'src/services/auth-header';
import ImageSlider from './ImageSlider';

const dotenv = require('dotenv');
dotenv.config();
import {   Button   } from '@material-ui/core';

const LocationStyle = styled.header`
@import "~react-image-gallery/styles/css/image-gallery.css";

  .card {
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .labelClass {
    width: max-content;
    color: tomato;
    font-size: 13px;
    border-bottom: 0.5px solid tomato;
    margin: 3px 0;
  }

  .image-item {
    display: flex;
    margin: 10px 0;
  }
  .image-item__btn-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .desc {
    font-size: 14px;
  }

  .star {
    color: gold;
  }

  .username {
    font-size: 14px;
  }

  .date {
    font-size: 12px;
  }

  .formclass {
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: rgb(88, 87, 87);
  }

  .inputclass {
    border: none;
    border-bottom: 1px solid gray;
  }

  .inputclass::placeholder,
  .textareaclass::placeholder {
    font-size: 12px;
    color: rgb(185, 184, 184);
  }

  .inputclass:focus,
  .textareaclass:focus,
  select:focus {
    outline: none;
  }

  .textareaclass {
    border: none;
    border-bottom: 1px solid gray;
  }
  .mapboxgl-popup-content {
    height: 100%;
    position: relative;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 20px 20px rgb(0 0 0 / 10%);
    padding: 10px 10px 15px;
    pointer-events: auto;
  }
  .submitButton {
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: white;
    background-color: tomato;
    cursor: pointer;
  }

  .buttons,
  .logout {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .allstyle {
    height: fill-content;
  }
  .button {
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    cursor: pointer;
  }

  .button:focus {
    outline: none;
  }

  .logout {
    background-color: tomato;
  }

  .login {
    background-color: teal;
    margin-right: 10px;
  }

  .register {
    background-color: slateblue;
  }
`;
function Location() {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(JSON.parse(localStorage.getItem('user')));
  const [pins, setPins] = useState([]);
  const [showi, setShowi] = useState(false);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [selectedFile, setSelectedFile] = useState('');
  const [star, setStar] = useState(0);
  const [role, setRole] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 41.00527,
    longitude: 28.97696,
    zoom: 8
  });
  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };
const  toggleModal = () => {
   if (showModal==true)
{  setShowModal(false);}
  else{
    setShowModal(true);
  }
} 
  const onFileChange = (e) => {
    setSelectedFile({ imgCollection: e.target.files });
  };
  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude
    });
  };
  const handleImage = () =>{
    setShowi(true);
    }
  const handleDelete = (id) => {
    console.log(id);
    let url = process.env.REACT_APP_BACKEND_URL + '/api/pins/' + id;
    axios
      .delete(url, { headers: authHeader() })
      .then((resp) => {
        console.log(resp);
        setPins(pins.filter((pin) => pin._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUsername,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
      photo: selectedFile
    };
    const formData = new FormData();
    for (let i = 0; i < selectedFile['imgCollection'].length; i++) {
      formData.append('imgCollection', selectedFile['imgCollection'][i]);
    }
    formData.append('username', currentUsername);
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('rating', star);
    formData.append('lat', newPlace.lat);
    formData.append('long', newPlace.long);
    //   var object = {};
    // formData.forEach(function(value, key){
    //     object[key] = value;
    // });
    // let json = JSON.stringify(object);
    try {
      let url = process.env.REACT_APP_BACKEND_URL + '/api/pins';
      const res = await axios
        .post(url, formData)
        .then((res) => {
          console.log(res.data);
          setPins([...pins, res.data]);
          setNewPlace(null);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        if (currentUsername.isAdmin) {
          setRole(true);
          console.log(role);
        } else {
          setRole(false);
          console.log(role);
        }

        let url = process.env.REACT_APP_BACKEND_URL + '/api/pins';

        const allPins = await axios.get(url);
        setPins(allPins.data);
        console.log(allPins);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem('user');
  };

  return (
    
    <LocationStyle>
      <div style={{ height: '100vh', width: '100%' }}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          width="100%"
          height="100%"
          transitionDuration="10"
          mapStyle="mapbox://styles/chrif000/ckt4z6kg51jnd17p5zm976mem"
          onViewportChange={(viewport) => setViewport(viewport)}
          onDblClick={currentUsername && handleAddClick}
        >
          {pins.map((p) => (
            <>
              <Marker
                latitude={p.lat}
                longitude={p.long}
                offsetLeft={-3.5 * viewport.zoom}
                offsetTop={-7 * viewport.zoom}
              >
                <Room
                  style={{
                    fontSize: 7 * viewport.zoom,
                    color: currentUsername === p.username ? 'tomato' : 'slateblue',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                />
              </Marker>
              {p._id === currentPlaceId && (
                <Popup
                  key={p._id}
                  latitude={p.lat}
                  className="allstyle"
                  longitude={p.long}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => setCurrentPlaceId(null)}
                  anchor="left"
                >
                  <Icon icon={deleteFilled} color="red" onClick={() => handleDelete(p._id)} />
                  <div className="card">
                    <label className="labelClass">Place</label>
                    <h4 className="place">{p.title}</h4>
                    <label className="labelClass">Review</label>
                    <p className="desc">{p.desc}</p>
                    <label className="labelClass">Rating</label>
                    <div className="stars">{Array(p.rating).fill(<Star className="star" />)}</div>
                    <label className="labelClass">Information</label>
                    <span className="username">
                      Created at <b>{p.username}</b>
                    </span>
                    <span className="date">{format(p.createdAt)}</span>
                    <label>images</label>
                     
                    <Button onClick={()=>toggleModal()} > Show images </Button>
                    {
                      showModal &&
                        <ImageSlider 
                        isOpen={ showModal} 
                        toggle={ toggleModal} 
                        slides={p.imgCollection} />  

                     }
                  </div>
                </Popup>
              )}
            </>
          ))}
          {newPlace && (
            <>
              <Marker
                latitude={newPlace.lat}
                longitude={newPlace.long}
                offsetLeft={-3.5 * viewport.zoom}
                offsetTop={-7 * viewport.zoom}
              >
                <Room
                  style={{
                    fontSize: 7 * viewport.zoom,
                    color: 'tomato',
                    cursor: 'pointer'
                  }}
                />
              </Marker>
              <Popup
                latitude={newPlace.lat}
                longitude={newPlace.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setNewPlace(null)}
                anchor="left"
              >
                <div>
                  <form className="formclass" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <label className="labelClass">Title</label>
                    <input
                      className="inputclass"
                      placeholder="Enter a title"
                      autoFocus
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className="labelClass">Description</label>
                    <textarea
                      className="textareaclass"
                      placeholder="Say us something about this place."
                      onChange={(e) => setDesc(e.target.value)}
                    />
                    <label className="labelClass">Rating</label>
                    <select onChange={(e) => setStar(e.target.value)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <div className="form-group">
                      <label htmlFor="file">File upload</label>
                      <div className="form-group">
                        <input type="file" name="imgCollection" onChange={onFileChange} multiple />
                      </div>
                    </div>

                    <button type="submit" className="submitButton">
                      Add Pin
                    </button>
                  </form>
                </div>
              </Popup>
            </>
          )}
          <NavigationControl />
          <ScaleControl />
          <GeolocateControl />
        </ReactMapGL>
      </div>
    </LocationStyle>
  );
}

export default Location;

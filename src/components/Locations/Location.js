import "./Location.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import { Room, Star, StarBorder } from "@material-ui/icons";
 import axios from "axios";
import { format } from "timeago.js";
   const dotenv = require("dotenv");
dotenv.config();

function Location() {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
   const [selectedFile, setSelectedFile] = useState(null);
  const [star, setStar] = useState(0);
  const [viewport, setViewport] = useState({
    latitude: 41.00527,
    longitude: 28.97696,
    zoom: 8,
  }); 

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handlePhoto = (e) => {
      console.log(e.target.files[0]);
      setSelectedFile(e.target.files);
}
  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
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
      photo: selectedFile,
    };
    const formData = new FormData();

    formData.append("username",currentUsername);
    formData.append("title",title);
    formData.append("desc",desc);
    formData.append("rating",star);
    formData.append("lat",newPlace.lat);
    formData.append("long",newPlace.long);
    formData.append("photo",selectedFile);
    var object = {};
formData.forEach(function(value, key){
    object[key] = value;
});
let json = JSON.stringify(object);
    try {
  
        let url = process.env.REACT_APP_BACKEND_URL +"/api/pins"
      const res = await axios.post(url, object);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        let url = process.env.REACT_APP_BACKEND_URL +"/api/pins"

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
    myStorage.removeItem("user");
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
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
                  color:
                    currentUsername === p.username ? "tomato" : "slateblue",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>
            {p._id === currentPlaceId && (
              <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor="left"
              >
                <div className="card">
                  <label className="labelClass" >Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label className="labelClass" >Review</label>
                  <p className="desc">{p.desc}</p>
                  <label className="labelClass" >Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<Star className="star" />)}
                  </div>
                  <label className="labelClass" >Information</label>
                  <span className="username">
                    Created at <b>{p.username}</b>
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                  <img src={p.photo}></img>
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
                  color: "tomato",
                  cursor: "pointer",
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
                <form className="formclass" encType='multipart/form-data' onSubmit={handleSubmit}>
                  <label className="labelClass" >Title</label>
                  <input
                  className="inputclass"
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className="labelClass" >Description</label>
                  <textarea
                  className="textareaclass"
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <label className="labelClass" >Rating</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />


                  <button type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form>
              </div>
            </Popup>
          </>
        )}
        
      </ReactMapGL>
    </div>
  );
}

export default Location;

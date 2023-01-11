import React, { useState, useEffect } from "react";
import MediaContainer from "./components/MediaContainer";
import NavigationBar from "./components/NavigationBar";
import MediaForm from "./components/MediaForm";
import MediaFavorites from "./components/MediaFavorites";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const URL = "http://localhost:3000/media";

function App() {
  const [myFavs, setMyFavs] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => setMedia(data));
  }, []);

  const [searchText, setSearchText] = useState("");

  const filteredMediaArray = media.filter((mediaObj) => {
    return mediaObj.title.toLowerCase().includes(searchText.toLowerCase());
  });

  const addNewMedia = (newMedia) => {
    setMedia([...media, newMedia]);
  };

  return (
    <div className="App">
      <NavigationBar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route exact path="/">
          <MediaContainer
            media={filteredMediaArray}
            myFavs={myFavs}
            setMyFavs={setMyFavs}
          />
        </Route>
        <Route exact path="/form">
          <MediaForm addNewMedia={addNewMedia} />
        </Route>
        <Route exact path="/favorites">
          <MediaFavorites myFavs={myFavs} />
        </Route>
      </Switch>
    </div>
  );
}
export default App;

// SWITCH, ROUTE, LINK

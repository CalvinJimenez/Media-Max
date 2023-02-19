import React, { useState } from "react";

function MediaCard({ mediaObj, setMyFavs, myFavs }) {
  const [favMedia, setFavMedia] = useState(true);

  const handleButton = () => {
    setFavMedia(!favMedia);
    setMyFavs([...myFavs, mediaObj]);
  };

  return (
    <>
      <div className="media">
        <h1> {mediaObj.title}</h1>
        <img src={mediaObj.image} alt={mediaObj.title} />
        <p> {mediaObj.description}</p>
        <h2> {mediaObj.services}</h2>
        <button onClick={handleButton} class="button-2">
          {favMedia ? "+ Add To Favorites" : "Added to Favorites"}
        </button>
      </div>
    </>
  );
}
export default MediaCard;
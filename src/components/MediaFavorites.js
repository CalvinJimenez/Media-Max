import React from "react";
import MediaCard from "./MediaCard";

function MediaFavorites({ setMyFavs, myFavs, mediaObj }) {
  return (
    <div className="movie-container">
      {myFavs.map((faveObj) => (
        <MediaCard key={faveObj.id} mediaObj={faveObj} />
      ))}
    </div>
  );
}
export default MediaFavorites;

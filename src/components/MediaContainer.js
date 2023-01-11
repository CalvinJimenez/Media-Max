import MediaCard from "./MediaCard.js";

function MediaContainer({ media, myFavs, setMyFavs }) {
  return (
    <div className="movie-container">
      {media.map((mediaObj) => (
        <MediaCard
          key={mediaObj.id}
          mediaObj={mediaObj}
          myFavs={myFavs}
          setMyFavs={setMyFavs}
        />
      ))}
    </div>
  );
}
export default MediaContainer;

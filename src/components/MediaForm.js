import React, { useState } from "react";

const URL = "http://localhost:4000/media";

function MediaForm({ addNewMedia }) {
  const [title, setTitle] = useState("");
  const [mediatype, setMediaType] = useState("");
  const [image, setImage] = useState("");
  const [services, setServices] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let postMedia = {
      title: title,
      mediatype: mediatype,
      image: image,
      services: services,
      description: description,
    };
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postMedia),
    })
      .then((r) => r.json())
      .then(() => addNewMedia(postMedia));
  };

  return (
    <div className="formContainer">
      <div className="form">
        <h3>Add Media</h3>
        <form onSubmit={handleSubmit}>
          <input
            label="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            label="mediatype"
            placeholder="Media Type"
            value={mediatype}
            onChange={(e) => setMediaType(e.target.value)}
          />
          <input
            label="image"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            label="services"
            placeholder="Streaming Service"
            value={services}
            onChange={(e) => setServices(e.target.value)}
          />
          <input
            label="description"
            placeholder="Media Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />
          <input type="Submit" value="Add Media" className="button" />
        </form>
      </div>
    </div>
  );
}
export default MediaForm;

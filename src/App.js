import "./css/App.css";
import "./css/ImageList.css";
import axios from "axios";
import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const URL = "https://api.giphy.com/v1/gifs/search";
  const key = process.env.REACT_APP_API_KEY;
  console.log(key)
  const limit = 9;

  const [images, setImages] = useState([]);

  const searchimage = async (term) => {
    try {
      const response = await axios.get(URL, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          api_key: key,
          q: term,
          limit: limit,
          rating: "pg-13",
        },
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = async (term) => {
    const response = await searchimage(term);
    console.log(response);
    setImages(response); 
  };

  return (
    <div className="main_container">
      <div className="navigator_container">
        <div className="navigator_container-content">
        <SearchBar onSubmit={handleSubmit} />
        <br/>
        <ImageList images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/APOD/Gallery";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [imagesUrl, setImagesUrl] = useState([]);

  function handleToggleModel() {
    console.log("toggle click");
    setShowModel(!showModel);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=" +
        `${API_KEY}`;

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        const photos = apiData.photos;
        const urls = photos.map((photo: { img_src: any; }) => photo.img_src);
        setImagesUrl(urls);
        setData(apiData);
        console.log("Fetched from API today");
      } catch (error) {
        console.log(error);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      <Header />

      <div className="bodyRoot">
        {data ?(<Gallery data={imagesUrl} />) : (
          <div className="loadingState">
          <i className="fa-solid fa-sun"></i>
        </div>
        )}
      </div>      
    </>
  );
};

export default Homepage;

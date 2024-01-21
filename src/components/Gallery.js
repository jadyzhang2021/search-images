/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import classes from "./Gallery.module.css";
import { PictureContext } from "../store/PictureContext";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
export default function ItemsGallery() {
  const [images, setImages] = useState([]);
  const ctx = useContext(PictureContext);

  const title = ctx.title;
  console.log({ ctx });

  async function fetchPicture() {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${JSON.stringify(
        title
      )}&per_page=24&format=json&nojsoncallback=1`
    );
    console.log({ title });
    const resData = await response.json();
    setImages(resData.photos.photo);
  }
  useEffect(() => {
    fetchPicture();
  }, [title]);

  return (
    <div className={classes.container}>
      {images.length === 0 ? (
        <p>Fetching place data....</p>
      ) : (
        <ul className={classes.picContainer}>
          {images.map((image) => (
            <li className={classes.image} key={image.id}>
              <img
                className={classes.image}
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                alt={image.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { useContext } from "react";
import Gallery from "./Gallery";
import { PictureContext } from "../store/PictureContext";

const Items = () => {
  const ctx = useContext(PictureContext);
  return (
    <div>
      <p>{ctx.title} Pictures</p>
      <Gallery />
    </div>
  );
};

export default Items;

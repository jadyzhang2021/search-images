import Gallery from "./Gallery";

import { useParams } from "react-router-dom";

const Search = () => {
  const params = useParams();
  return (
    <div>
      <p>{params.picture} Images</p>
      <Gallery />
    </div>
  );
};

export default Search;

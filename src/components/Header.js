import { PictureContext } from "../store/PictureContext";
import "./Header.module.css";
import classes from "./Header.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const ctx = useContext(PictureContext);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const onClickHandler = () => {
    ctx.setTitle(searchTitle);
    navigate(`/search/${ctx.title}`);
  };
  return (
    <div>
      <h1>SnapShot</h1>
      <div className={classes.header}>
        <input
          className={`${
            searchTitle.trim() === "" ? null : classes.inputactive
          }`}
          onChange={onChange}
          type="text"
          placeholder="Search..."
          name="search"
          value={searchTitle}
        ></input>
        <Link
          to={`/search/${ctx.title}`}
          className={` ${searchTitle.trim() === "" ? null : classes.active}`}
          disabled={!searchTitle.trim()}
          onClick={onClickHandler}
        >
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#ffffff"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default Header;

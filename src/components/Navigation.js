import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import { PictureContext } from "../store/PictureContext";
const Navigation = () => {
  const ctx = useContext(PictureContext);

  const onClickHandlerMount = () => {
    ctx.setTitle("mountains");
  };
  const onClickHandlerBea = () => {
    ctx.setTitle("beaches");
  };
  const onClickHandlerBir = () => {
    ctx.setTitle("Birds");
  };
  const onClickHandlerF = () => {
    ctx.setTitle("Food");
  };
  return (
    <div className={classes.nabar}>
      <ul className={classes.list}>
        <li>
          <NavLink
            className={classes.link}
            to="/mountains"
            onClick={onClickHandlerMount}
          >
            Mountains
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classes.link}
            to="/beach"
            onClick={onClickHandlerBea}
          >
            Beaches
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classes.link}
            to="/bird"
            onClick={onClickHandlerBir}
          >
            Birds
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classes.link}
            to="/food"
            onClick={onClickHandlerF}
          >
            Food
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;

import { createContext, useState } from "react";

export const PictureContext = createContext({
  title: "",
  setTitle: () => {},
  // titleChange: () => {},
});

const PictureContextProvide = ({ children }) => {
  const [title, setTitle] = useState("");

  // const titleChangeHandler = (event) => {
  //   setTitle(event);
  // };

  const ctxValue = {
    title: title,
    setTitle: setTitle,
    //   titleChange: titleChangeHandler,
  };

  return (
    <PictureContext.Provider value={ctxValue}>
      {children}
    </PictureContext.Provider>
  );
};

export default PictureContextProvide;

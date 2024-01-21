import { Outlet } from "react-router-dom";
import Form from "../components/Form";

const RootLayout = () => {
  return (
    <>
      <Form />
      <Outlet />
    </>
  );
};

export default RootLayout;

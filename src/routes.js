import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";

export default function GalleryRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>All images</>}>
          <Route index element={<>All images</>} />
          <Route path="/montains" element={<div>montains images</div>} />
          <Route path="/beach" element={<div>beach images</div>} />
          <Route path="/iii" element={<div>5</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

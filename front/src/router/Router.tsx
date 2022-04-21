import { Route, Routes } from "react-router-dom";
import { Uploaded, UploadForm } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UploadForm />} />
      <Route path="uploaded" element={<Uploaded />} />
    </Routes>
  );
};

export default Router;

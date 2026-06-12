import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import BlogDetail from "../pages/BlogDetail/BlogDetail";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/post/:slug"
        element={<BlogDetail />}
      />

    </Routes>
  );
}

export default AppRoutes;
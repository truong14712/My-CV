import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ClientLayout from "./layouts/ClientLayout";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

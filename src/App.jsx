import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import MainLayout from "./Layouts/MainLayout";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

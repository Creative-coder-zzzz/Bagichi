import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";

import ContactUs from "./pages/ContactUs";
import BookNow from "./pages/BookNow";
import About from "./pages/About";
import NotFound from "./Common/NotFound";
import Layout from "./Common/Layout";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import SocialTab from "./pages/Social";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="facilities" element={<Facilities />} />

          <Route path="contact" element={<ContactUs />} />
          <Route path="book" element={<BookNow />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <div className="w-full ">
        <SocialTab />
      </div>
    </>
  );
}

export default App;

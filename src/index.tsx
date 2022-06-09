import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CV from "./components/CV";
import Contact from "./components/Contact";
import About from "./components/About";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<App />}>
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

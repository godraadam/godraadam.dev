import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CV from "./components/CV";
import Contact from "./components/Contact";
import About from "./components/About";
import { Provider } from "react-redux";
import { store } from "./store";
import Landing from "./components/Landing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./components/Header/Head";
import Validation from "./components/ValidationPage/Validation";
import "./App.css";
import ValidateSearch from "./components/ValidationPage/ValidateSearch";

function App() {
  return (
    <Router>
      <div className="main-cont">
        <Head />
        <Routes>
          <Route path="/" element={<ValidateSearch />} />
          <Route path="/validate/:id" element={<Validation />} />
        </Routes>
        <p className="visit">
          Visit
          <br />{" "}
          <a href="https://group.bureauveritas.com/">Bureau Veritas Website</a>
        </p>
      </div>
    </Router>
  );
}

export default App;

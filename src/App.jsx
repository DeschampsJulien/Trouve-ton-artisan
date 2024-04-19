// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/Home";
import ArtisansCategory from "./pages/ArtisansCategory";
import ArtisansContact from "./pages/ArtisansContact";
import ArtisansSearch from "./pages/ArtisansSearch";
import Error404 from "./pages/Error404";

import UpPage from "./assets/pictures/upPage.png";

import "./App.scss";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App" id="hautDePage">
      <Header onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/results"
          element={<ArtisansSearch searchValue={search} />}
        />
        <Route
          path="/category/:artisansCategory"
          element={<ArtisansCategory />}
        />
        <Route path="/contact/:artisanId" element={<ArtisansContact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <div className="container text-end my-4">
        <a href="#hautDePage">
          <img
            src={UpPage}
            alt="Logo pour remonter en haut de page"
            className="up-page-logo"
          />
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default App;

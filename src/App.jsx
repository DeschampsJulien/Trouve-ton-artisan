// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import ArtisansCategory from "./pages/artisansCategory";
import ArtisansContact from "./pages/artisansContact";
import ArtisansSearch from "./pages/artisansSearch";
import Error404 from './pages/error404';
import UpPage from "./assets/pictures/upPage.png";

import "./App.scss";

function App() {

  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch (value);
  }

  return (
    <div className="App"  id="hautDePage">
      <Header onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ArtisansSearch searchValue={search} />} />
        <Route path="/category/:artisansCategory" element={<ArtisansCategory />} />
        <Route path="/contact/:artisanId" element={<ArtisansContact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <div className="container text-end my-4">
        <a href="#hautDePage">
          <img src={UpPage} alt="Logo pour remonter en haut de page" className="up-page-logo"  />
        </a>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

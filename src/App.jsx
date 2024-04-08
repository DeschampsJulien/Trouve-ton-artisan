// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import ArtisansCategory from "./pages/artisansCategory";
import ArtisansContact from "./pages/artisansContact";
import SearchResult from "./pages/artisansSearch";


import './App.css';

function App() {

  const [search, setSearch] = useState("")

  const handleSearch = (value) => {
    setSearch (value);
  }

  return (
    <div className="App">
      <Header onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResult searchValue={search} />} />
        <Route path="/category/:artisansCategory" element={<ArtisansCategory />} />
        <Route path="/contact/:artisanId" element={<ArtisansContact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

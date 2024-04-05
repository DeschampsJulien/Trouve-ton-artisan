// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import ArtisansCategory from "./pages/artisansCategory";
import ArtisansCardContact from "./components/artisansCardContact";
import Batiment from "./pages/batiment";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batiment" element={<Batiment />} />
        <Route path="/category/:artisanCategory" element={<ArtisansCategory />} />
        <Route path="/contact/:artisanId" element={<ArtisansCardContact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

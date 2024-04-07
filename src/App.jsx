// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import ArtisansCategory from "./pages/artisansCategory";
import ArtisansContact from "./pages/artisansContact";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:artisansCategory" element={<ArtisansCategory />} />
        <Route path="/contact/:artisanId" element={<ArtisansContact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

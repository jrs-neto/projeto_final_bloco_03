import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar/Navbar";
import Home from "./assets/components/home/Home";
import Footer from "./assets/components/footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
import Footer from "./assets/components/footer/Footer";
import Home from "./assets/components/home/Home";
import Navbar from "./assets/components/navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
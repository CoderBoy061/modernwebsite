import "./App.css";
import Appartments from "./components/Appartments";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import Investment from "./components/Investment";
import Location from "./components/Location";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <Investment />
      <Location />
      <Appartments />
      <Footer />
    </>
  );
}

export default App;

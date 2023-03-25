import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./component/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/PreNavbar.css";
import Slider from "./component/Slider.js"
import banner from "./data/banner.json"
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start = {banner.banner.start}/>
    </Router>
  );
}

export default App;

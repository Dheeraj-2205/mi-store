import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./component/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/PreNavbar.css";
import Slider from "./component/Slider.js"
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider/>
    </Router>
  );
}

export default App;

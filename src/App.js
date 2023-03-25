import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./component/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/PreNavbar.css";
import Slider from "./component/Slider.js"
import Offers from "./component/Offers.js"
import data from "./data/banner.json"
import Heading from "./component/Heading.js"
function App() {
  console.log(data.offer.offers);
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start = {data.banner.start}/>
      <Offers offer = {data.offer.offers}/>
      <Heading star = "Star Products"/>
    </Router>
  );
}

export default App;

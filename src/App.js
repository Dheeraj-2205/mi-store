import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./component/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/PreNavbar.css";
import Slider from "./component/Slider.js"
import Offers from "./component/Offers.js"
import data from "./data/banner.json"
import Heading from "./component/Heading.js"
import StarProduct from "./component/StarProduct.js"
function App() {
  console.log(data.starProduct.stars);
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start = {data.banner.start}/>
      <Offers offer = {data.offer.offers}/>
      <Heading text = "Star Products"/>
      <StarProduct starProduct = {data.starProduct.stars}/>
    </Router>
  );
}

export default App;

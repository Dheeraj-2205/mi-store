import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./component/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/PreNavbar.css";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
    </Router>
  );
}

export default App;

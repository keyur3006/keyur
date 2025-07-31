import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeHomepage from "./components/RecipeHomepage";
import { RecipeDetail } from "./components/RecipeDetail";
import WelcomePage from "./components/WelcomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<RecipeHomepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<AboutUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;

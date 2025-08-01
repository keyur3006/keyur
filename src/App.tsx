import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeHomepage from "./components/RecipeHomepage";
import { RecipeDetail } from "./components/RecipeDetail";
import WelcomePage from "./components/WelcomePage";
import ContactPage from "./components/ContactPage";
import AddRecipe from "./components/AddRecipe";
import AboutUs from "./components/AboutUs";
import SearchResults from "./components/SearchResults";  // नया import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<RecipeHomepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/search" element={<SearchResults />} />  {/* नया route */}
      </Routes>
    </Router>
  );
}

export default App;

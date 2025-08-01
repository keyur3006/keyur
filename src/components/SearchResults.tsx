import React from "react";
import { useLocation, Link } from "react-router-dom";

const dummyRecipes = [
  { id: 1, name: "Popular Indian Dishes" },
  { id: 2, name: "Top Italian Main Course Dishes" },
  { id: 3, name: "Popular Drinks" },
 
];

// URL से query param निकालने के लिए helper function
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults: React.FC = () => {
  const query = useQuery();
  const searchTerm = query.get("query")?.toLowerCase() || "";

  // Filter recipes based on search term
  const filteredRecipes = dummyRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Search Results for "{searchTerm}"</h1>
      {filteredRecipes.length > 0 ? (
        <ul className="list-disc list-inside text-xl">
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="mb-3">
              {/* Recipe detail page पर ले जाने वाला लिंक */}
              <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:underline">
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl">कोई recipe नहीं मिली।</p>
      )}
    </div>
  );
};

export default SearchResults;

import React, { useState } from "react";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // यहाँ आप सबमिट होने के बाद जो करना चाहो वो कर सकते हो, जैसे API कॉल या console.log
    alert(`Recipe Submitted!\nTitle: ${title}\nIngredients: ${ingredients}\nInstructions: ${instructions}`);

    // फॉर्म क्लियर करना
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Your Recipe</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-2 rounded"
          rows={4}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="border p-2 rounded"
          rows={6}
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;

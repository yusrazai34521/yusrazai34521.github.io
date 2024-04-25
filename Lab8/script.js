document.addEventListener("DOMContentLoaded", function () {
  const recipeForm = document.getElementById("recipeForm");
  const recipeList = document.getElementById("recipeList");
  let recipes = [
    {
      title: "Biryani",
      ingredients: "Rice, Chicken, Spices",
      instructions:
        "Cook rice, Cook chicken with spices, Layer rice and chicken, Cook together",
      image: "biryani.png",
    },
    {
      title: "Chai",
      ingredients: "Water, Tea leaves, Milk, Sugar",
      instructions:
        "Boil water, Add tea leaves, Add milk and sugar, Strain and serve",
      image: "chai.png",
    },
    {
      title: "Karahi",
      ingredients: "Meat, Tomatoes, Onions, Spices",
      instructions:
        "Cook meat with spices, Add tomatoes and onions, Cook until tender",
      image: "karahi.png",
    },
  ];

  // Function to render recipes
  // Function to render recipes
  function renderRecipes() {
    recipeList.innerHTML = "";
    recipes.forEach((recipe, index) => {
      console.log("Image URL for recipe", index, ":", recipe.image); // Add this line
      const recipeItem = document.createElement("div");
      recipeItem.classList.add("recipe");
      recipeItem.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      <img src="${recipe.image}" alt="${recipe.title}">
      <button class="edit-button" data-index="${index}">Edit</button>
      <button class="delete-button" data-index="${index}">Delete</button>
    `;
      recipeList.appendChild(recipeItem);
    });

    // Attach event listeners for edit and delete buttons
    const editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = parseInt(button.getAttribute("data-index"));
        editRecipe(index);
      });
    });

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = parseInt(button.getAttribute("data-index"));
        deleteRecipe(index);
      });
    });
  }

  // // Function to add a new recipe
  // function addRecipe(title, ingredients, instructions, image) {
  //   // Read the image file and create a data URL to display it
  //   const reader = new FileReader();
  //   const newRecipe = {
  //     title,
  //     ingredients,
  //     instructions,
  //     image,
  //   };
  //   recipes.push(newRecipe);
  //   renderRecipes();
  // }

  // Function to delete a recipe
  function deleteRecipe(index) {
    recipes.splice(index, 1);
    renderRecipes();
  }

  // // Function to edit a recipe
  // function editRecipe(index) {
  //   const recipe = recipes[index];
  //   document.getElementById("title").value = recipe.title;
  //   document.getElementById("ingredients").value = recipe.ingredients;
  //   document.getElementById("instructions").value = recipe.instructions;
  //   document.getElementById("imaage").value = recipe.image;

  //   // Store the index of the recipe being edited as a data attribute in the form
  //   recipeForm.setAttribute("data-edit-index", index);
  // }

  // Function to add a new recipe
  function addRecipe(title, ingredients, instructions, imageFile) {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function () {
      const imageDataURL = reader.result;
      const newRecipe = {
        title,
        ingredients,
        instructions,
        image: imageDataURL,
      };
      recipes.push(newRecipe);
      renderRecipes();
    };
  }

  // Function to edit a recipe (modified)
  function editRecipe(index) {
    const recipe = recipes[index];
    document.getElementById("title").value = recipe.title;
    document.getElementById("ingredients").value = recipe.ingredients;
    document.getElementById("instructions").value = recipe.instructions;
    // Set the image field to empty, as you can't prefill it with file path
    document.getElementById("image").value = "";
    // Display the image of the recipe being edited
    document.getElementById("imagePreview").src = recipe.image;
    // Store the index of the recipe being edited as a data attribute in the form
    recipeForm.setAttribute("data-edit-index", index);
  }
  // Function to update a recipe
  function updateRecipe(index, title, ingredients, instructions, image) {
    const updatedRecipe = {
      title,
      ingredients,
      instructions,
      image,
    };
    recipes.splice(index, 1, updatedRecipe);
    renderRecipes();
  }

  // Event listener for form submission
  recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById("instructions").value;
    const imageFile = document.getElementById("image").files[0];

    // Check if title exists to determine if it's a new recipe or an update
    if (title.trim() === "") {
      // If title is empty, it's a new recipe
      addRecipe(title, ingredients, instructions, imageFile);
    } else {
      // If title exists, it's an update
      const recipeIndex = parseInt(
        recipeForm.getAttribute("data-edit-index"),
        10
      );
      updateRecipe(recipeIndex, title, ingredients, instructions, imageFile);
    }
    recipeForm.reset();
  });

  // Function to preview image
  function previewImage(event) {
    const imagePreview = document.getElementById("imagePreview");
    imagePreview.src = URL.createObjectURL(event.target.files[0]);
    imagePreview.onload = function () {
      URL.revokeObjectURL(imagePreview.src); // Free memory
    };
  }
  // Initial rendering of recipes
  renderRecipes();
  // Attach onchange event listener to image input
  document.getElementById("image").addEventListener("change", previewImage);
});

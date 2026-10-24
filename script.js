
/* Food Data */
const foods = [
    {
        name: "Kimchi Fried Rice",
        description: "Korean fried rice cooked with spicy kimchi.",
        price: 120,
        image: "KimchiFriedRice.jpg"
    },
    {
        name: "Teriyaki Chicken",
        description: "Juicy chicken glazed with sweet teriyaki sauce.",
        price: 150,
        image: "TeriyakiChicken.jpg"
    },
    {
        name: "Katsu Curry",
        description: "Crispy Japanese pork cutlet served with curry rice.",
        price: 180,
        image: "KatsuCurry.jpg"
    },
    {
        name: "Hamburger Steak",
        description: "Juicy hamburger steak served with savory sauce.",
        price: 160,
        image: "HamburgerSteak.jpg"
    },
    {
        name: "Hiyamugi Noodles",
        description: "Thin Japanese wheat noodles served chilled.",
        price: 100,
        image: "HiyamugiNoodles.jpg"
    }
];

/* Get HTML Elements */
const foodImage = document.getElementById("foodImage");
const foodName = document.getElementById("foodName");
const foodDescription = document.getElementById("foodDescription");
const foodPrice = document.getElementById("foodPrice");
const randomButton = document.getElementById("randomButton");

/* Display Selected Food */
function displayFood(food) {
    foodImage.src = food.image;
    foodImage.alt = food.name;

    foodName.textContent = food.name;
    foodDescription.textContent = food.description;
    foodPrice.textContent = "Price: " + food.price + " Baht";
}

/* Random Food Function */
function randomFood() {
    const randomIndex = Math.floor(Math.random() * foods.length);
    const selectedFood = foods[randomIndex];

    displayFood(selectedFood);
}

/* Button Event */
randomButton.addEventListener("click", randomFood);

/* Display a Random Food When Opening the Website */
randomFood();

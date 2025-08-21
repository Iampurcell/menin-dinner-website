document.addEventListener("DOMContentLoaded", function () {
  function updateContent() {
    if (window.matchMedia("(max-width: 991px)").matches) {
      // background-img-1
      document.querySelector(".background-img-1 h3").textContent = "Grilled Chicken";
      document.querySelector(".background-img-1 p").textContent = "A perfectly grilled whole chicken seasoned with a special spice blend and garnished with fresh pomegranate.";

      // background-img-2
      document.querySelector(".background-img-2 h3").textContent = "Seafood Paella";
      document.querySelector(".background-img-2 p").textContent = "A traditional Spanish rice dish loaded with a generous selection of fresh shrimp, mussels, and clams.";

      // background-img-3
      document.querySelector(".background-img-3 h3").textContent = "Braised Fish";
      document.querySelector(".background-img-3 p").textContent = "A whole fish, gently braised with cherry tomatoes, olives, and capers, served with a side of rustic bread.";
    } else {
      // Restore original content
      document.querySelector(".background-img-1 h3").textContent = "Cheese Board";
      document.querySelector(".background-img-1 p").textContent = "An elegant platter featuring a selection of fine cheeses, paired with crackers, grapes, and a drizzle of honey.";

      document.querySelector(".background-img-2 h3").textContent = "Gourmet Burger";
      document.querySelector(".background-img-2 p").textContent = "A juicy beef patty topped with melted cheese, fresh lettuce, and tomato, served with crispy fries.";

      document.querySelector(".background-img-3 h3").textContent = "Tuna Tartare";
      document.querySelector(".background-img-3 p").textContent = "Fresh tuna sashimi dressed with caviar, creamy avocado, and microgreens for a refined and flavorful appetizer.";
    }
  }

  // Run on page load
  updateContent();

  // Run on window resize
  window.addEventListener("resize", updateContent);
});

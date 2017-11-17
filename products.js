var products = [
  fairyOne = {
    name: "Basic Fairy",
    description: "Fairy for people on a budget",
    price: 19.99,
    URL: "#"
  },
  fairyTwo = {
    name: "Place Holder Name",
    description: "Description",
    price: 39.99,
    URL: "#"
  },
  fairyThree = {
    name: "Place Holder Name",
    description: "Description",
    price: 59.99,
    URL: "#"
  },
  fairyFour = {
    name: "Place Holder Name",
    description: "Description",
    price: 89.99,
    URL: "#"
  },
  fairyFive = {
    name: "Place Holder Name",
    description: "Description",
    price: 199.99,
    URL: "#"
  },
  fairySix = {
    name: "Place Holder Name",
    description: "Description",
    price: 479.99,
    URL: "#"
  },
  fairySeven = {
    name: "Place Holder Name",
    description: "Description",
    price: 698.99,
    URL: "#"
  },
  fairyEight = {
    name: "Place Holder Name",
    description: "Description",
    price: 1999.99,
    URL: "#"
  }
]

var productsCount = products.length;

var productsElement = document.getElementById("newProducts");

for (var i = 0; i < productsCount; i += 1) {
  productsElement.innerHTML += `<p>${products[i]["name"]}</p>`;
  productsElement.innerHTML += `<p>${products[i]["description"]}</p>`;
  productsElement.innerHTML += `<p>${products[i]["price"]}</p>`;
  productsElement.innerHTML += `<p>${products[i]["URL"]}</p>`;
}
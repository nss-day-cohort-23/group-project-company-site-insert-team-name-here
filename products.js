var products = [
  fairyOne = {
    name: "Basic Fairy",
    description: "Fairy for people on a budget",
    price: 19.99,
    URL: "example.com"
  },
  fairyTwo = {
    name: "Basic Fairy",
    description: "Description",
    price: 19.99,
    URL: "example.com"
  },
  fairyThree = {
    name: "Basic Fairy",
    description: "Description",
    price: 19.99,
    URL: "example.com"
  },
  fairyFour = {
    name: "Basic Fairy",
    description: "Description",
    price: 19.99,
    URL: "example.com"
  },
  fairyFive = {
    name: "Basic Fairy",
    description: "Description",
    price: 19.99,
    URL: "example.com"
  },
  fairySix = {
    name: "Basic Fairy",
    description: "Description",
    price: 19.99,
    URL: "example.com"
  },
  fairySeven = {
    name: "Basic Fairy",
    description: "Description",
    price: 19.99,
    URL: "example.com"
  },
  fairyEight = {
    name: "Basic Fairy",
    description: "Description",
    price: 19.99,
    URL: "example.com"
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






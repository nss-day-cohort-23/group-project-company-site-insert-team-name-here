var products = [
  fairyOne = {
    name: "Navi",
    description: "Navi is a fairy who annoyingly, persistently, naggingly guides Link throughout Hyrule. Her navigation skills are unparalleled.",
    price: 5750,
    URL: "assets/navi.png"
  },
  fairyTwo = {
    name: "Tinker Bell",
    description: "Tinker Bell is a fairy who assists and protects Peter Pan from Captain Hook. Her pixie dust gives one the power of flight.",
    price: 7500,
    URL: "assets/tinkerbell.gif"
  },
  fairyThree = {
    name: "Thumbelina",
    description: "Thumbelina is a tiny girl well-known for her misadventures with appearance- and marriage-minded toads, moles, and cockchafers. Her looks are deadly.",
    price: 4300,
    URL: "assets/thumbelina.jpg"
  },
  fairyFour = {
    name: "Fairy Godmother",
    description: "The Fairy Godmother endows Cinderella with the most exotic, unique, wild night of her life. Her cobbling and ideas about sufficient transportation could be improved",
    price: 2000,
    URL: "assets/godmother.jpg"
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

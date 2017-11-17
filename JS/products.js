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

//----------------- First Card ---------------------
var container = document.getElementById("newProducts");
var cardOne = document.createElement("div");
cardOne.className += "card";
container.appendChild(cardOne);
var cardOneDiv = document.createElement("div");
cardOneDiv.className += "product-name";
cardOne.appendChild(cardOneDiv);
var cardOneName = document.createElement("h3");
cardOneDiv.appendChild(cardOneName);
var firstCardText = document.createTextNode(`${products[i]["name"]}`);
cardOneName.appendChild(firstCardText);
//--------image section-------
var imgDivOne = document.createElement("div");
imgDivOne.className += "image";
cardOne.appendChild(imgDivOne);
var cOneImg = document.createElement("img");
imgDivOne.appendChild(cOneImg);
cOneImg.src = `${products[i]["URL"]}`;
cOneImg.setAttribute("alt", "Fairy One for Sale");
//-----------item description----------
var cOneDivTwo = document.createElement("div");
cOneDivTwo.className += "description";
cardOne.appendChild(cOneDivTwo);
var descriptionOne = document.createElement("p");
cOneDivTwo.appendChild(descriptionOne);
var descriptionTextOne = document.createTextNode(`${products[i]["description"]}`);
descriptionOne.appendChild(descriptionTextOne);
//--------------$PRICE$--------------------
var cOneDivThree = document.createElement("div");
cOneDivThree.className += "price";
cardOne.appendChild(cOneDivThree);
var priceOne = document.createElement("p");
cOneDivThree.appendChild(priceOne);
var numPriceOne = document.createTextNode("$" + `${products[i]["price"]}`);
priceOne.appendChild(numPriceOne);
}
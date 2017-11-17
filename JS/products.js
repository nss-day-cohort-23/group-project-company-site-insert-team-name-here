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
var numPriceOne = document.createTextNode(`${products[i]["price"]}`);
priceOne.appendChild(numPriceOne);
}

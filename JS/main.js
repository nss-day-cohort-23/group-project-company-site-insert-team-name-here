
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
var firstCardText = document.createTextNode("Fairy #");
cardOneName.appendChild(firstCardText);
//--------image section-------
var imgDivOne = document.createElement("div");
imgDivOne.className += "image";
cardOne.appendChild(imgDivOne);
var cOneImg = document.createElement("img");
imgDivOne.appendChild(cOneImg);
cOneImg.src = "http://clipartix.com/wp-content/uploads/2016/07/Fairy-clip-art-images-illustrations-photos-7.jpg";
cOneImg.setAttribute("alt", "Fairy One for Sale");
//-----------item description----------
var cOneDivTwo = document.createElement("div");
cOneDivTwo.className += "description";
cardOne.appendChild(cOneDivTwo);
var descriptionOne = document.createElement("p");
cOneDivTwo.appendChild(descriptionOne);
var descriptionTextOne = document.createTextNode("description");
descriptionOne.appendChild(descriptionTextOne);
//--------------$PRICE$--------------------
var cOneDivThree = document.createElement("div");
cOneDivThree.className += "price";
cardOne.appendChild(cOneDivThree);
var priceOne = document.createElement("p");
cOneDivThree.appendChild(priceOne);
var numPriceOne = document.createTextNode("Price");
priceOne.appendChild(numPriceOne);



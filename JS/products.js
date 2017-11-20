var products = [
  fairyOne = {
    name: ["Navi", "h3", "product-name"],
    img: ["assets/navi.png", "img", "image"],
    description: ["Navi is a fairy who annoyingly, persistently, naggingly guides Link throughout Hyrule. Her navigation skills are unparalleled.", "p", "description"],
    price: ["Price: $5750", "p", "price"]
  },
  fairyTwo = {
    name: ["Tinker Bell", "h3", "product-name"],
    img: ["assets/tinkerbell.gif", "img", "image"],
    description: ["Tinker Bell is a fairy who assists and protects Peter Pan from Captain Hook. Her pixie dust gives one the power of flight.", "p", "description"],
    price: ["Price: $7500", "p", "price"]
  },
  fairyThree = {
    name: ["Thumbelina", "h3", "product-name"],
    img: ["assets/thumbelina.jpg", "img", "image"],
    description: ["Thumbelina is a tiny girl well-known for her misadventures with appearance- and marriage-minded toads, moles, and cockchafers. Her looks are deadly.", "p", "description"],
    price: ["Price: $4300", "p", "price"]
  },
  fairyFour = {
    name: ["Fairy Godmother", "h3", "product-name"],
    img: ["assets/godmother.jpg", "img", "image"],
    description: ["The Fairy Godmother endows Cinderella with the most exotic, unique, wild night of her life. Her cobbling and ideas about sufficient transportation could be improved", "p", "description"],
    price: ["Price: $2000", "p", "price"]
  },
  fairyFive = {
    name: ["Blue Fairy", "h3", "product-name"],
    img: ["assets/Bluefairy.png", "img", "image"],
    description: ["The Blue Fairy transformed Pinocchio into a living being, and later into a real boy. She also helped Pinocchio and Jiminy Cricket throughout their adventures, both directly and from afar.", "p", "description"],
    price: ["Price: 199.99", "p", "price"]
  },
  fairySix = {
    name: ["Puck", "h3", "product-name"],
    img: ["assets/Puck.jpg", "img", "image"],
    description: ["What the Puck do you know?", "p", "description"],
    price: ["Price: $479.99", "p", "price"]
  },
  fairySeven = {
    name: ["Wanda", "h3", "product-name"],
    img: ["assets/Wanda.jpg", "img", "image"],
    description: ["Wanda is the 'fairly odd' mother of Timmy Turner in the cartoon 'The Fairly Odd Parents.' She helps to grant Timmy's wishes and ultimately keeps Timmy and her husband Cosmo out of trouble.", "p", "description"],
    price: ["Price: $698.99", "p", "price"]
  },
  fairyEight = {
    name: ["Cosmo", "h3", "product-name"],
    img: ["assets/Cosmo.jpg", "img", "image"],
    description: ["Cosmo is the 'fairly odd' father of Timmy Turner in the cartoon 'The Fairly Odd Parents.' He enjoys indulging Timmy's wishes that probably shouldn't be granted...but also helps to get him out of trouble and give him anything he wants!", "p", "description"],
    price: ["Price: $1999.99", "p", "price"]
  }
];

  const container = document.getElementById("newProducts");

  for (let i = 0; i < products.length; i += 1) {
    let cardElm = document.createElement("div");
    cardElm.className = "card"
    container.appendChild(cardElm);

    for (const prop in products[i]) {
      let firstDiv = document.createElement("div");
      firstDiv.className = products[i][prop][2];

      let contentDiv = document.createElement(`${products[i][prop][1]}`);

      if (`${products[i][prop][1]}` === "img") {
        contentDiv.src = `${products[i]["img"][0]}`;
        contentDiv.setAttribute("alt", `Image of ${products[i]["name"][0]}`);
      } else {
        let textNode = document.createTextNode(`${products[i][prop][0]}`);
        contentDiv.appendChild(textNode);
      }

      firstDiv.appendChild(contentDiv);
      cardElm.appendChild(firstDiv);
    }
}

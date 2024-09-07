let products = [
  {
    id: 1,
    productImage: "./images/meat.png",
    productText: "Beef Meat",
    productParagraph: "₦2000.00",
  },
  {
    id: 2,
    productImage: "./images/meat.png",
    productText: "Beef Meat",
    productParagraph: "₦2000.00",
  },
  {
    id: 3,
    productImage: "./images/meat.png",
    productText: "Beef Meat",
    productParagraph: "₦2000.00",
  },
  {
    id: 4,
    productImage: "./images/meat.png",
    productText: "Beef Meat",
    productParagraph: "₦2000.00",
  },
  {
    id: 5,
    productImage: "./images/meat.png",
    productText: "Beef Meat",
    productParagraph: "₦2000.00",
  },
  {
    id: 6,
    productImage: "./images/meat.png",
    productText: "Beef Meat",
    productParagraph: "₦2000.00",
  },
];

let Cards = document.querySelector(".cards");

for (let i = 0; i < products.length; i++) {
  const element = products[i];

  let Card = document.createElement("div");
  Card.className = "card";

  let imageBlog = document.createElement("div");
  imageBlog.className = "card_image";

  let image = document.createElement("img");
  image.className = "img";

  let textBlog = document.createElement("div");
  textBlog.className = "card_text";

  let text = document.createElement("h3");
  text.className = "heading";

  let paragraph = document.createElement("p");
  paragraph.className = "paragraph";

  let weight = document.createElement("p");
  weight.className = "weight";

  image.setAttribute("src", element.productImage);
  text.textContent = element.productText;
  paragraph.textContent = element.productParagraph;
  weight.textContent = element.productWeight;

  imageBlog.appendChild(image);
  textBlog.appendChild(text);
  textBlog.appendChild(paragraph);
  textBlog.appendChild(weight);

  Card.appendChild(imageBlog);
  Card.appendChild(textBlog);

  Cards.appendChild(Card);
}

let category = [
  {
    id: 1,
    categoryImage: "./images/salad.png",
    categoryText: "Vegetables",
  },
  {
    id: 2,
    categoryImage: "./images/salad.png",
    categoryText: "Vegetables",
  },
  {
    id: 3,
    categoryImage: "./images/salad.png",
    categoryText: "Vegetables",
  },
  {
    id: 4,
    categoryImage: "./images/salad.png",
    categoryText: "Vegetables",
  },
  {
    id: 5,
    categoryImage: "./images/salad.png",
    categoryText: "Vegetables",
  },
  {
    id: 6,
    categoryImage: "./images/salad.png",
    categoryText: "Vegetables",
  },
];

let Container = document.querySelector(".container");

let Cards_category = document.querySelector(".cards_category");

for (let i = 0; i < products.length; i++) {
  const element_category = products[i];

  let Card = document.createElement("div");
  Card.className = "card";

  let imageBlog = document.createElement("div");
  imageBlog.className = "card_image";

  let image = document.createElement("img");
  image.className = "img";

  let textBlog = document.createElement("div");
  textBlog.className = "card_text";

  let text = document.createElement("h3");
  text.className = "heading";

  let paragraph = document.createElement("p");
  paragraph.className = "paragraph";

  let weight = document.createElement("p");
  weight.className = "weight";

  image.setAttribute("src", element_category.categoryImage);
  text.textContent = element_category.categoryText;

  imageBlog.appendChild(image);
  textBlog.appendChild(text);
  textBlog.appendChild(paragraph);
  textBlog.appendChild(weight);

  Card.appendChild(imageBlog);
  Card.appendChild(textBlog);

  Cards.appendChild(Card);
}

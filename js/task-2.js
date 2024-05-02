const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];



// Варіант 1

const list = document.querySelector(".gallery");

const markup = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}" width="360" height="300"></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

console.log(list);


// Варіант 2

// const list = document.querySelector(".gallery");

// images.forEach((image) => {
//   const listItem = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   img.width = 360;
//   img.height = 300;
//   img.style.objectFit = "cover";
//   img.style.display = "block";
//   list.append(listItem);
//   listItem.append(img);
// });

// console.log(list);

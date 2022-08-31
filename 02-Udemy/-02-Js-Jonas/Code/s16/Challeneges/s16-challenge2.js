"use strict";

const imageContainer = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    imgEl.src = imgPath;

    imgEl.addEventListener("load", () => {
      resolve(imgEl);
    });

    imgEl.addEventListener("error", () => {
      reject(new Error("image not found!"));
    });
  });
};

let currentImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    imageContainer.append(img);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";

    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    imageContainer.append(img);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";

    return createImage("img/img-3.jpg");
  })
  .then((img) => {
    currentImg = img;
    imageContainer.append(img);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));

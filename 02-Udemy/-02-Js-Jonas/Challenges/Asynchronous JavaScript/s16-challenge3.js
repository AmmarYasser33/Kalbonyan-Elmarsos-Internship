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

//
const loadNPause = async function () {
  try {
    const img1 = await createImage("img/img-1.jpg");
    imageContainer.append(img1);
    await wait(2);
    img1.style.display = "none";

    const img2 = await createImage("img/img-2.jpg");
    imageContainer.append(img2);
    await wait(2);
    img2.style.display = "none";

    const img3 = await createImage("img/img-3.jpg");
    imageContainer.append(img3);
    await wait(2);
    img3.style.display = "none";
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

//
const imagesPath = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (p) => await createImage(p));
    // console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    // console.log(imgsEl);
    imageContainer.append(...imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.log(err);
  }
};

loadAll(imagesPath);

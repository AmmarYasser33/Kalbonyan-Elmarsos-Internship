console.log("Exporting module");

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 777;
const totalQuantity = 99;
export { totalPrice, totalQuantity as tq };

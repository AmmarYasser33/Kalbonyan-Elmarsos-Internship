console.log("Client side js loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
///

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  message1.textContent = "Loading...";
  message2.textContent = "";

  getData(location);
});

///
const getData = async function (loc) {
  const res = await fetch(`/weather?address=${loc}`);
  const data = await res.json();

  if (data.error) {
    message1.textContent = data.error;
  } else {
    message1.textContent = data.location;
    message2.textContent = data.forecast;
  }
};

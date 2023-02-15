const socket = io();

// Elements
const messageForm = document.querySelector(".message-form");
const locationBtn = document.querySelector(".btn-location");
const formBtn = document.querySelector(".btn-form");
const messageInput = document.querySelector(".message-input");
const messages = document.querySelector(".messages");
const sidebar = document.querySelector(".chat__sidebar");

// Options
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

///////

const autoScroll = () => {
  // New message element
  newMessage = messages.lastElementChild;

  // Height of the new message
  newMessageStyles = getComputedStyle(newMessage);
  newMessageMargin = parseInt(newMessageStyles.marginBottom);
  newMessageHight = newMessage.offsetHeight + newMessageMargin;

  // Visible height
  const visibleHight = messages.offsetHeight;

  // Height of messages container
  const containerHeight = messages.scrollHeight;

  // How far have I scrolled?
  scrollOffset = messages.scrollTop + visibleHight;

  if (containerHeight - newMessageHight <= scrollOffset) {
    messages.scrollTop = messages.scrollHeight;
  }
};

socket.on("newMessage", (message) => {
  const html = `
          <div class="message">
          <p>
            <span class="message__name">${message.username}</span>
            <span class="message__meta">${moment(message.createdAt).format(
              "h:mm a"
            )}</span>
          </p>
            <p>${message.text}</p>
          </div>`;

  messages.insertAdjacentHTML("beforeend", html);

  autoScroll();
});

socket.on("locationMessage", (location) => {
  const html = `
          <div class="message">
          <p>
            <span class="message__name">${location.username}</span>
            <span class="message__meta">${moment(location.createdAt).format(
              "h:mm a"
            )}</span>
          </p>
        <p><a target="_blank" href="${location.url}">My current location</a></p>
          </div>`;

  messages.insertAdjacentHTML("beforeend", html);

  autoScroll();
});

socket.on("roomData", ({ room, users }) => {
  sidebar.innerHTML = "";
  const html = `
    <h2 class="room-title">${room}</h2>
    <h3 class="list-title">Users</h3>
    <ul class="users">
    </ul>
  `;
  sidebar.insertAdjacentHTML("beforeend", html);

  const usersList = document.querySelector(".users");
  users.forEach((user) => {
    usersList.insertAdjacentHTML("beforeend", `<li>${user.username}</li>`);
  });
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formBtn.setAttribute("disabled", "disabled");

  const text = messageInput.value;

  socket.emit("sendMessage", text, (error) => {
    formBtn.removeAttribute("disabled");
    messageInput.value = "";
    messageInput.focus();

    if (error) {
      return console.log(error);
    }

    console.log("Message delivered!");
  });
});

locationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!navigator.geolocation) {
    return alert("Geolocation isn't supported by your browser.");
  }

  locationBtn.setAttribute("disabled", "disabled");

  navigator.geolocation.getCurrentPosition((position) => {
    const userLocation = {
      long: position.coords.longitude,
      lat: position.coords.latitude,
    };

    socket.emit("sendLocation", userLocation, () => {
      console.log("Location shared!");
      locationBtn.removeAttribute("disabled");
    });
  });
});

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");

btn.addEventListener("click", function () {
  const text = textarea.textContent;
  if (text !== "") {
    splitWords(text);
  } else {
    console.log("write something!");
  }
});

function splitWords(str) {
  const arr = str.split("\n");
  for (let e = 0; e < arr.length; e++) {
    const [f, s] = arr[e].split("_");
    const concat = f + s.replace(s[0], s[0].toUpperCase());
    console.log(concat.padEnd(20, " ") + "✅".repeat(e + 1));
  }
}

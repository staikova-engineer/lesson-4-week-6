function changeWords() {
  h1.innerHTML = `Try it`;
}

let h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", changeWords);

const colors = ["#000080", "#00008B", "#0000CD", "#0000FF","#006400", "#008000", "#008080", "#008B8B","#00BFFF","#00CED1",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
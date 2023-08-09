function getAttr() {
  // console.log(event.target.dataset["clientid"]);
  // console.log(event.target.dataset["environment"]);
  // console.log(event.target.dataset["metadata"]);

  const attr = document.getElementById("runner-button");
  console.log(attr);
  console.log(attr?.dataset.metadata);
  console.log(attr?.dataset.clientid);
  console.log(attr?.dataset.environment);

  alert("getAttr execute");
}

const addEventButton = () => {
  const button = document.getElementById("runner-button");
  const img = document.createElement("img");
  img.style.width = "32px";
  img.style.height = "32px";
  img.setAttribute(
    "src",
    "https://icons-for-free.com/iconfiles/png/512/logo+twitter+twitter+logo+icon-1320167831451644641.png"
  );
  button.appendChild(img);
  button.addEventListener("click", getAttr);
};
window.onload = addEventButton;

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
  const imageSource = button.dataset.img;

  if (imageSource) {
    const img = document.createElement("img");
    img.style.width = "32px";
    img.style.height = "32px";

    img.setAttribute("src", imageSource);
    button.appendChild(img);
  }

  button.addEventListener("click", getAttr);
};
window.onload = addEventButton;

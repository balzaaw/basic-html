function getAttr() {
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
  const buttonStyle = button.dataset.style;

  if (buttonStyle) {
    button.style.cssText = buttonStyle;
  } else {
    button.style.backgroundColor = "background-color:#10528d";
    button.style.color = "white";
    button.style.fontSize = "14";
    button.style.fontWeight = "700";
    button.style.textAlign = "center";
    button.style.display = "flex";
    button.style.flexDirection = "row-reverse";
    button.style.rowGap = "10px";
  }

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

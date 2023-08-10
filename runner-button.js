const success = "1";

function getAttr() {
  const attr = document.getElementById("runner-button");
  console.log(attr);
  console.log(attr?.dataset.metadata);
  console.log(attr?.dataset.clientid);
  console.log(attr?.dataset.environment);

  alert("getAttr execute");
}

function setDefaultStylesButton(button) {
  button.style.padding = "0.6em 1.2em";
  button.style.display = "flex";
  button.style.flexDirection = "row-reverse";
  button.style.justifyContent = "space-evenly";
  button.style.alignItems = "center";
  button.style.gap = "5px";
  button.style.cursor = "pointer";
  button.style.borderRadius = "8px";
  button.style.fontSize = "1em";
}

function setStyleButton(button, styles) {
  if (styles) {
    button.style.cssText += styles;
  } else {
    button.style.backgroundColor = "#10528d";
    button.style.color = "white";
    button.style.fontWeight = "600";
    button.style.textAlign = "center";
    button.style.transition = "border-color 0.25s";
  }
}

function setLogoButton(button, imgSource) {
  if (imgSource) {
    const img = document.createElement("img");
    img.style.width = "32px";
    img.style.height = "32px";
    img.style.marginLeft = "5px";
    img.style.marginRight = "5px";
    img.style.objectFit = "contain";

    img.setAttribute("src", imgSource);
    button.appendChild(img);
  }
}

function getAttrFromNode() {
  const button = document.getElementById("runner-button");
  const imageSource = button.dataset.img;
  const buttonStyle = button.dataset.style;
  const ignoreStyle = button.dataset.ignorestyle;

  return {
    imageSource,
    buttonStyle,
    ignoreStyle,
    button,
  };
}

const addEventButton = () => {
  const { button, buttonStyle, ignoreStyle, imageSource } =
    getAttrFromNode(button);

  if (ignoreStyle === success) {
    setDefaultStylesButton(button);
    setStyleButton(button, buttonStyle);
  }

  setLogoButton(button, imageSource);
  button.addEventListener("click", getAttr);
};

window.onload = addEventButton;

const runner = {
  getAttr: async function getAttr() {
    // const attr = document.getElementById("runner-button");
    // console.log(attr);
    // console.log(attr?.dataset.metadata);
    // console.log(attr?.dataset.clientid);
    // console.log(attr?.dataset.environment);

    const data = await fetch("https://api.nationalize.io/?name=nathaniel").then(
      (data) => data.json()
    );
    console.log({ data });
    alert("getAttr execute");
  },
  setDefaultStylesButton: function (button) {
    button.style.padding = "0.6em 1.2em";
    button.style.display = "flex";
    button.style.flexDirection = "row-reverse";
    button.style.justifyContent = "space-evenly";
    button.style.alignItems = "center";
    button.style.gap = "5px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "8px";
    button.style.fontSize = "1em";
  },
  setStyleButton: function (button, styles) {
    if (styles) {
      button.style.cssText += styles;
    } else {
      button.style.backgroundColor = "#10528d";
      button.style.color = "white";
      button.style.fontWeight = "600";
      button.style.textAlign = "center";
      button.style.transition = "border-color 0.25s";
    }
  },
  setLogoButton: function (button, imgSource) {
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
  },
  getAttrFromNode: async function () {
    let resolveId = new Promise(function (myResolve) {
      setTimeout(function () {
        myResolve("runner-button");
      }, 50);
    });

    const button = await resolveId.then(function (value) {
      return document.getElementById(value);
    });

    if (button) {
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

    return {
      imageSource: null,
      buttonStyle: null,
      ignoreStyle: null,
      button: null,
    };
  },
  // waitelement: function waitForElementToExist(selector) {
  //   const body = document.getElementsByClassName("sesimat");
  //   return new Promise((resolve) => {
  //     if (document.querySelector(selector)) {
  //       return resolve(document.querySelector(selector));
  //     }

  //     const observer = new MutationObserver(() => {
  //       if (document.querySelector(selector)) {
  //         resolve(document.querySelector(selector));
  //         observer.disconnect();
  //       }
  //     });
  //     console.log(body);
  //     observer.observe(body.childNodes[1], {
  //       subtree: true,
  //       childList: true,
  //     });
  //   });
  // },
  addEventButton: async function () {
    const { button, buttonStyle, ignoreStyle, imageSource } =
      await this.getAttrFromNode();
    if (button) {
      if (!ignoreStyle) {
        this.setDefaultStylesButton(button);
        this.setStyleButton(button, buttonStyle);
      }

      this.setLogoButton(button, imageSource);
      button.addEventListener("click", this.getAttr);
    }
  },
};

window.onload = runner.addEventButton();

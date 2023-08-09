import "./runner-button.css";

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

// (function () {
//   document.querySelector('#runner-button').addEventListener("onClick", test2());
// })();

const addEventButton = () => {
  document?.getElementById("runner-button")?.addEventListener("click", getAttr);
};
window.onload = addEventButton;

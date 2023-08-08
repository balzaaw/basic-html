function test2() {
  // console.log(event.target.dataset["clientid"]);
  // console.log(event.target.dataset["environment"]);
  // console.log(event.target.dataset["metadata"]);

  const attr = document.getElementById("runner-button");
  console.log(attr);
  console.log(attr?.dataset.metadata);
  console.log(attr?.dataset.clientid);
  console.log(attr?.dataset.environment);

  alert("test2 execute");
}

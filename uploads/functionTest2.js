function test2(event) {
  console.log(event.target.dataset["clientid"]);
  console.log(event.target.dataset["environment"]);
  console.log(event.target.dataset["metadata"]);
  alert("test2 execute");
}

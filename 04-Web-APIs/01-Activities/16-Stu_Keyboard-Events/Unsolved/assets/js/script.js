function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event)
  console.log(event.key)
  console.log(event.code)

  document.querySelector("#key").textContent = event.key
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction)


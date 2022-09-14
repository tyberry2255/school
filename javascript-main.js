function mainScript() {
  let id = null;
  const elem = document.getElementById("sidebar");   
  let pos = 316; // top of the sidebar
  id = setInterval(shiftSidebar, 20);
  function shiftSidebar() {
    if (pos >= 1016) {
      pos = 316;
    } else {
      pos++; 
      elem.style.top = pos + "px";  // basically moves the sidebar down
    }
  }
}
function button() {
  const elem = document.getElementById("rhs-logo");
  elem.style.display = "inline"; // changes the rhs logo from hidden to showing
}
function hover() { // when you hover over the button you get this
  const elem = document.getElementById("rhs-logo");
  elem.style.cursor = "pointer";
}
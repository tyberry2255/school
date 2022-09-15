function mainScript() {
  let id = null;
  const elem = document.getElementById("sidebar");   
  let pos = 201; // top of the sidebar
  id = setInterval(shiftSidebar, 20);
  function shiftSidebar() {
    if (pos >= 1016) {
      pos = 201; // once the sidebar is all the way down, it puts it back up
    } else {
      pos = pos + 10; 
      elem.style.top = pos + "px";  // basically moves the sidebar down
    }
  }
}
function button() {
  const elem = document.getElementById("rhs-logo");
  if (time == true) {
    elem.style.display = "none"; // changes it back
    var time = false;
  } else {
    var time = true;
    elem.style.display = "inline"; // changes the rhs logo from hidden to showing
  } 
}
function hover() { // when you hover over the button you get this
  const elem = document.getElementById("rhs-logo");
  elem.style.cursor = "pointer";
}
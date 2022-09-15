var time = false 
function mainScript() {
  const elem = document.getElementById("sidebar");  
  let id = null;
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
  if (time == false) {
    elem.style.display = "inline"; // changes the rhs logo from hidden to showing
    time = true;
  } else {
    elem.style.display = "none"; // changes it back
    time = false;
  } 
}
function hover() { // when you hover over the button you get this
  const elem = document.getElementById("rhs-logo");
  elem.style.cursor = "pointer";
}
function mainScript() {
  let id = null;
  const elem = document.getElementById("sidebar");   
  let pos = 316; // top of the sidebar
  id = setInterval(shiftSidebar, 20);
  function shiftSidebar() {
    if (pos == 1016) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px";  
    }
  }
}
function button() {
  const elem = document.getElementById("rhs-logo");
  elem.style.display = "inline";
}
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
  const elem = document.getElementById("rhs-logo")
  elem.outerHTML.src = "https://pbs.twimg.com/profile_images/378800000370800996/0b6aa5001e6d72c5294b4681cf1cd193_400x400.jpeg"
}
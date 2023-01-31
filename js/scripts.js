function hideResults() {
  document.getElementById("faves").setAttribute("class", "hidden");
}

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
 
  const nameInput = document.getElementById("name").value;
  const colorInput = document.getElementById("color").value;
  const seasonInput = document.getElementById("season").value;
  const petInput = document.getElementById("pet").value;

  document.querySelector("span#name").innerText = nameInput;
  document.querySelector("span#color").innerText = colorInput;
  document.querySelector("span#season").innerText = seasonInput;
  document.querySelector("span#pet").innerText = petInput;

  };
}


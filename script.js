
document.querySelectorAll("input[type=checkbox]").forEach(element => {
  
  const checked = localStorage.getItem(element.name);
  
  if (checked == "true") {
    element.checked = true;
  }

  element.addEventListener("change", (event) => {
    localStorage.setItem(event.target.name, event.target.checked);
  });
});

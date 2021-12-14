const hourFields = document.querySelectorAll(".hour-field");
hourFields.forEach((field) => {
  field.addEventListener("click", cancel);
  function cancel() {
    this.classList.toggle("error");
  }
});

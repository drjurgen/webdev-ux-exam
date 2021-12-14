// Create assignments whilst logged in as a teacher

document.querySelector(".publish").addEventListener("click", newItem);
const textArea = document.querySelector("#textarea");
const dueDate = document.querySelector("#due_date");
const dueTime = document.querySelector("#timepicker");
const assignName = document.querySelector("#assign-name");
const selectInput = document.querySelector("#class-select");
function newItem() {
  const divCount = document.querySelectorAll(".created-assignments .assignment-subject").length;

  const newAssignment = `<article class="assignment-subject col s10 offset-s1 offset-m1 m4 subject-wd l5 ${divCount % 2 == 0 ? "offset-l1" : ""}">
    <div class="assignment-subject-title row">
      <img class="col s3" src="images/romeo.png" />
      <div class="subject-title-text">
        <h4>${selectInput.value}</h4>
        <p class="subject-title-time">Just now</p>
      </div>
    </div>
    <div class="assignment-subject-description">
      <p class="description-deadline">Deadline: ${dueDate.value}, ${dueTime.value}</p>
      <p class="description-title">Assignment: ${assignName.value}</p>
      <p class="description-text">
        ${textArea.value}
      </p>
    </div>
    <div class="assignment-subject-material">
      <p class="material-title">Material:</p>
      <button class="material-button modal-trigger" href="#modal1">PDF</button>
      <button class="material-button modal-trigger" href="#modal1">PDF</button>
    </div>
  </article>`;

  document.querySelector(".created-assignments").insertAdjacentHTML("beforeend", newAssignment);
}

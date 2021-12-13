document.querySelector(".publish").addEventListener("click", newItem);
function newItem() {
  const newAssignment = `<article class="assignment-subject col s10 offset-s1 offset-m1 m4 subject-wd l5">
    <div class="assignment-subject-title row">
      <img class="col s3" src="images/romeo.png" />
      <div class="subject-title-text">
        <h4>User experience</h4>
        <p class="subject-title-time">8 minutes ago</p>
      </div>
    </div>
    <div class="assignment-subject-description">
      <p class="description-deadline">Deadline: 24/11, 23:59</p>
      <p class="description-title">Assignment</p>
      <p class="description-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, quae. Aliquid veritatis, dolorum quas earum a voluptas eaque esse
        tempore labore neque odit.
      </p>
    </div>
    <div class="assignment-subject-material">
      <p class="material-title">Material:</p>
      <button class="material-button modal-trigger" href="#modal1">PDF</button>
      <button class="material-button modal-trigger" href="#modal1">PDF</button>
    </div>
  </article>`;

  document.querySelector(".created-assignments").insertAdjacentHTML("beforeend", newAssignment);
  // document.querySelector(".created-assignments > article").classList.add("offset-l1");
}

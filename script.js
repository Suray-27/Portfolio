function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function filterProjects(category) {
  let projects = document.querySelectorAll(".project");
  let buttons = document.querySelectorAll(".filters button");

  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  buttons.forEach((button) => button.classList.remove("active"));
  document
    .querySelector(`button[data-category="${category}"]`)
    .classList.add("active");
}
function openModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = "Skill Badge"; // You can customize this caption if needed
}

function closeModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
}

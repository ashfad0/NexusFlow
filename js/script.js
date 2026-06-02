// register form active events

talentFormBtn.addEventListener("click", function () {
  isInactive(talentFormModal);
});
closeTalentForm.addEventListener("click", function () {
  isInactive(talentFormModal);
});
addTalentBtn.addEventListener("click", function () {
  isActive(talentFormModal);
});

addProjectBtn.addEventListener("click", function () {
  isActive(projectFormModal);
});
projectFormBtn.addEventListener("click", function () {
  isInactive(projectFormModal);
});
closeProjectForm.addEventListener("click", function () {
  isInactive(projectFormModal);
});

// register form active events
addTalentBtn.addEventListener("click", function () {
  isActive(talentFormModal);
});
closeTalentForm.addEventListener("click", function () {
  isInactive(talentFormModal);
});

addProjectBtn.addEventListener("click", function () {
  isActive(projectFormModal);
});
closeProjectForm.addEventListener("click", function () {
  isInactive(projectFormModal);
});
// projectFormBtn.addEventListener("click", function () {
//   isInactive(projectFormModal);
// });

// adding roles to select fields
for (role of roles) {
  let roleOption = document.createElement("option");
  roleOption.setAttribute("value", role);
  roleOption.innerText = role;
  rolesSelection.appendChild(roleOption);
}

// talents output
talentsList.innerHTML = "";

for (talent of talents) {
  addTalent(talent);
}
talentCount();

// add talent
talentFormBtn.addEventListener("click", function () {
  if (
    talentName.value != "" &&
    talentRole.value != "" &&
    talentStatus.value != "" &&
    talentRate.value != ""
  ) {
    let newTalent = {
      id: self.crypto.randomUUID(),
      name: talentName.value,
      role: talentRole.value,
      ratePerHour: parseFloat(talentRate.value),
      status: talentStatus.value,
    };
    talents.push(newTalent);
    addTalent(newTalent);
    talentCount();
    isInactive(talentFormModal);
  }
});

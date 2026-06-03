

// register form active events
addTalentBtn.addEventListener("click", function () {
  isActive(talentFormModal);
  talentFormBtn.innerText = "Add Talent"
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
closeUpdateTalentForm.addEventListener("click", function () {
  isInactive(updateTalentFormModal);
});


// adding roles to select fields
for (role of roles) {
  let roleOption = document.createElement("option");
  roleOption.setAttribute("value", role);
  roleOption.innerText = role;
  rolesSelection.appendChild(roleOption);
  updateFormRolesSelection.appendChild(roleOption);
}

// talents output
talentsList.innerHTML = "";

for (talent of talents) {
  addTalent(talent);
}
talentCount();

// add talent
addTalentBtn.addEventListener("click", function () {
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



// projets 
backlogsWrap.innerHTML = "";
inFlightsWrap.innerHTML = "";
deliveredWrap.innerHTML = "";

for (let project of projects) {
  if (project.status === projectStatus[0]) {
    addProjet(project, backlogsWrap)
  }
  else if (project.status === projectStatus[1]) {
    addProjet(project, inFlightsWrap)
  }
  else {
    addProjet(project, deliveredWrap)
  }
}

// add projet 
projectFormBtn.addEventListener("click", function () {
  if (
    talentName.value != "" &&
    talentRole.value != "" &&
    talentStatus.value != "" &&
    talentRate.value != ""
  ) {

  }
});

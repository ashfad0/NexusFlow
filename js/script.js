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



// adding roles to select fields
for(role of roles){
    let roleOption = document.createElement('option')
    roleOption.setAttribute('value', role);
    roleOption.innerText = role;
    rolesSelection.appendChild(roleOption)
}

// adding talents 

talentsList.innerHTML = "";

for(talent of talents){
  addTalent(talent)
}

headCount.innerText = talents.length

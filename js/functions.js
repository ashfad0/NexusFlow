// form toggles

function isActive(element) {
  element.classList.add("active");
}

function isInactive(element) {
  element.classList.remove("active");
}

// talent count
function talentCount() {
  headCount.innerText = talents.length;
}

// talents output function
function addTalent(person) {
  let statusClass = person.status.toLowerCase().replace(" ", "-");
  let talentTr = `<tr id="${person.id}">
                  <td>${person.name}</td>
                  <td>${person.role}</td>
                  <td>$${person.ratePerHour}</td>
                  <td>
                    <span class="status-badge ${statusClass}">
                      <ion-icon name="checkmark-circle"></ion-icon>
                      ${person.status}
                    </span>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn-secondary btn-small edit-btn">
                        <ion-icon name="pencil-outline"></ion-icon>
                        Edit
                      </button>
                      <button class="btn btn-danger btn-small dlt-btn">
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>`;

  talentsList.insertAdjacentHTML("beforeend", talentTr);

  //   remove talent
  talentsList.lastElementChild
    .querySelector(".dlt-btn")
    .addEventListener("click", function () {
      talents = talents.filter((talent) => talent.id != person.id);
      document.getElementById(person.id).remove();
      console.log("removed : " + person.name);
      talentCount();
    });

  // edit talent
  talentsList.lastElementChild.querySelector('.edit-btn').addEventListener('click', function () {
    updateTalentName.value = person.name
    updateTalentRole.value = person.role
    updateTalentStatus.value = person.status
    updateTalentRate.value = person.ratePerHour
    isActive(updateTalentFormModal);

    updateTalentFormBtn.addEventListener('click', function () {

      if (
        updateTalentName.value != "" &&
        updateTalentRole.value != "" &&
        updateTalentStatus.value != "" &&
        updateTalentRate.value != ""
      ) {
        person.name = talentName.value
        person.role = talentRole.value
        person.status = talentStatus.value
        person.ratePerHour = talentRate.value
        isInactive(updateTalentFormModal);

        //   name: talentName.value,
        // role: talentRole.value,
        // ratePerHour: parseFloat(talentRate.value),
        // status: talentStatus.value,
      }
    })
  })

}


// console.log(projectStatus[1])

function addProjet(project, wrapper) {
  let projectCard = `<div class="project-card">
                  <div class="project-header">
                    <h4>${project.project_name}</h4>
                    <div class="client-name">
                     <ion-icon name="business-outline"></ion-icon>
                      ${project.client}
                    </div>
                  </div>
                  <div class="project-meta">
                   <ion-icon name="calendar-outline"></ion-icon>
                    Deadline: ${project.date}
                  </div>
                  <div class="project-team">
                    <div class="team-label">Assigned Team</div>
                    <div class="no-team">${project.assigned_team}</div>
                  </div>
                  <div class="project-actions">
                  <button class="btn btn-secondary btn-small back-btn">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                      Back
                    </button>
                    <button class="btn btn-primary btn-small start-btn">
                     <ion-icon name="arrow-forward-outline"></ion-icon>
                      Start
                    </button>
                    <button class="btn btn-secondary btn-small assign-btn">
                      <ion-icon name="people-outline"></ion-icon>
                      Assign
                    </button>
                    <button class="btn btn-secondary btn-small reopen-btn">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                      Reopen
                    </button>
                    <button class="btn btn-danger btn-small arhive-btn">
                      <ion-icon name="archive-outline"></ion-icon>
                      Archive
                    </button>
                  </div>
                </div>`


  wrapper.insertAdjacentHTML('beforeend', projectCard)
  // remove unnecesary buttons 
  if (project.status === projectStatus[0]) {
    wrapper.lastElementChild.querySelector('.back-btn').remove()
    wrapper.lastElementChild.querySelector('.reopen-btn').remove()
    wrapper.lastElementChild.querySelector('.arhive-btn').remove()
  }
  else if (project.status === projectStatus[1]) {
    wrapper.lastElementChild.querySelector('.start-btn').remove()
    wrapper.lastElementChild.querySelector('.reopen-btn').remove()
    wrapper.lastElementChild.querySelector('.arhive-btn').remove()
  }
  else if (project.status === projectStatus[2]) {
    wrapper.lastElementChild.querySelector('.back-btn').remove()
    wrapper.lastElementChild.querySelector('.start-btn').remove()
    wrapper.lastElementChild.querySelector('.assign-btn').remove()
  }
}


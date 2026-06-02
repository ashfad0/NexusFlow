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
                      <ion-icon name="checkmark-circle" role="img" class="md hydrated"><template shadowrootmode="open"><div class="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path></svg></div></template></ion-icon>
                      ${person.status}
                    </span>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn-secondary btn-small">
                        <ion-icon name="pencil-outline" role="img" class="md hydrated"><template shadowrootmode="open"><div class="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path stroke-linecap="round" stroke-linejoin="round" d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z" class="ionicon-fill-none ionicon-stroke-width"></path></svg></div></template></ion-icon>
                        Edit
                      </button>
                      <button class="btn btn-danger btn-small">
                        <ion-icon name="trash-outline" role="img" class="md hydrated"><template shadowrootmode="open"><div class="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path><path stroke-linecap="round" stroke-miterlimit="10" d="M80 112h352" class="ionicon-stroke-width"></path><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path></svg></div></template></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>`;

  talentsList.insertAdjacentHTML("beforeend", talentTr);

  //   remove talent
  talentsList.lastElementChild
    .querySelector(".btn-danger")
    .addEventListener("click", function () {
      talents = talents.filter((talent) => talent.id != person.id);
      document.getElementById(person.id).remove();
      console.log("removed : " + person.name);
      talentCount();
    });
}


console.log(projectStatus[1])
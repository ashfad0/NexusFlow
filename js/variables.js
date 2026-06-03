// register talent form

const talentName = document.getElementById('talentName');
const talentRole = document.getElementById('talentRole');
const talentStatus = document.getElementById('talentStatus');
const talentRate = document.getElementById('talentRate');

const addTalentBtn = document.getElementById('addTalentBtn')
const talentFormModal = document.getElementById('talentFormModal')
const talentFormBtn = document.querySelector('#talentForm button')
const closeTalentForm = document.getElementById('closeTalentForm')

let rolesSelection = document.getElementById('talentRole')
let talentsList = document.getElementById('talentTableBody');



// update talent form

const updateTalentName = document.getElementById('editTalentName');
const updateTalentRole = document.getElementById('editTalentRole');
const updateTalentStatus = document.getElementById('editTalentStatus');
const updateTalentRate = document.getElementById('editTalentRate');

const updateTalentFormModal = document.getElementById('editTalentModal')
const updateTalentFormBtn = document.querySelector('#editTalentForm button')
const closeUpdateTalentForm = document.getElementById('closeEditTalentForm')

let updateFormRolesSelection = document.getElementById('editTalentRole')




// project form 
const addProjectBtn = document.getElementById('addProjectBtn')
const projectFormModal = document.getElementById('projectFormModal')
const projectFormBtn = document.querySelector('#projectForm button')
const closeProjectForm = document.getElementById('closeProjectForm')

const projectTitle = document.getElementById('projectTitle')


// role selection 


// head count 

let headCount = document.getElementById('totalHeadcount');


let backlogsWrap = document.getElementById('backlogColumn')
let inFlightsWrap = document.getElementById('inFlightColumn')
let deliveredWrap = document.getElementById('deliveredColumn')
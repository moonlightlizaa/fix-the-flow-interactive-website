// navbar dingen

const navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

// load more knop

function myFunction() {
  const content = document.getElementById("moreContent");
  const btnText = document.getElementById("loadMore");
  const moveBtn = document.getElementById("loadMore");

  if (content.style.display === "none") {
    content.style.display = "grid";
    btnText.innerHTML = "Laad meer";
    moreContent.style.display = "none";
  } else {
    content.style.display = "none";
    btnText.innerHTML = "Laad minder";
    moreContent.style.display = "grid";
  }
}

function myFunction() {
  const content = document.getElementById("moreContent");
  const btnText = document.getElementById("loadMore");

  if (content.style.display === "grid") {
    content.style.display = "none";
    btnText.innerHTML = "Laad meer";
    moreContent.style.display = "none";
  } else {
    content.style.display = "grid";
    btnText.innerHTML = "Laad minder";
    moreContent.style.display = "grid";
  }
}

// 1 Filter Content: Onderzoeken en Begrijpen

let filterOnderzoek = document.getElementById("filter-onderzoeken-begrijpen");
let btnFilterOnderzoek = document.getElementById("btn-filter-onderzoek");

let mainContent = document.getElementById("mainContent");
let moreContent = document.getElementById("loadMore");

let filterJezelf = document.getElementById("filter-leren-jezelf");
let btnFilterJezelf = document.getElementById("btn-filter-jezelf");

let filterCreatief = document.getElementById("filter-creatief-denken");
let btnFilterCD = document.getElementById("btn-filter-creatief-denken");

let filterOrganiserenPlannen = document.getElementById(
  "filter-organiseren-plannen"
);
let btnFilterOrganiseren = document.getElementById(
  "btn-filter-organiseren-plannen"
);

let filterPresenteren = document.getElementById("filter-presenteren");
let btnFilterPresenteren = document.getElementById("btn-filter-presenteren");

let filterAnderen = document.getElementById("filter-leren-anderen");
let btnFilterAnderen = document.getElementById("btn-filter-anderen");

btnFilterOnderzoek.addEventListener("click", filterOnderzoekenBegrijpen);
function filterOnderzoekenBegrijpen() {
  if (filterOnderzoek.style.display === "none") {
    mainContent.style.display = "grid";
    moreContent.style.display = "grid";
  } else {
    mainContent.style.display = "none";
    moreContent.style.display = "none";
  }
}

btnFilterOnderzoek.addEventListener("click", showFilterOnderzoeken);
function showFilterOnderzoeken() {
  document.getElementById("filter-onderzoeken-begrijpen").style.display =
    "grid";

  moreContent.style.display = "none";
  mainContent.style.display = "none";
  document.getElementById("filter-leren-jezelf").style.display = "none";
  document.getElementById("filter-creatief-denken").style.display = "none";
  document.getElementById("filter-organiseren-plannen").style.display = "none";
  document.getElementById("filter-presenteren").style.display = "none";
}

// 2 Filter Content: Leren over jezelf

btnFilterJezelf.addEventListener("click", filterLerenJezelf);
function filterLerenJezelf() {
  if (filterJezelf.style.display === "none") {
    mainContent.style.display = "grid";
    moreContent.style.diplay = "grid";
  } else {
    mainContent.style.display = "none";
    moreContent.style.display = "none";
  }
}

btnFilterJezelf.addEventListener("click", showFilterJezelf);
function showFilterJezelf() {
  document.getElementById("filter-leren-jezelf").style.display = "grid";
  document.getElementById("filter-onderzoeken-begrijpen").style.display =
    "none";
  document.getElementById("filter-creatief-denken").style.display = "none";
  document.getElementById("filter-organiseren-plannen").style.display = "none";
  document.getElementById("filter-presenteren").style.display = "none";
  moreContent.style.display = "none";
  mainContent.style.display = "none";
}

// 3 Filter Content: Creatief Denken

btnFilterCD.addEventListener("click", filterCreatiefDenken);
function filterCreatiefDenken() {
  if (filterCreatief.style.display === "none") {
    mainContent.style.display = "grid";
    moreContent.style.diplay = "grid";
  } else {
    mainContent.style.display = "none";
    moreContent.style.display = "none";
  }
}

btnFilterCD.addEventListener("click", showFilterCreatiefDenken);
function showFilterCreatiefDenken() {
  document.getElementById("filter-creatief-denken").style.display = "grid";
  document.getElementById("filter-leren-jezelf").style.display = "none";
  document.getElementById("filter-onderzoeken-begrijpen").style.display =
    "none";
  document.getElementById("filter-organiseren-plannen").style.display = "none";
  document.getElementById("filter-presenteren").style.display = "none";
  moreContent.style.display = "none";
  mainContent.style.display = "none";
}

// 4 Filter Content: Organiseren en Plannen

btnFilterOrganiseren.addEventListener("click", filterOrganiseren);
function filterOrganiseren() {
  if (filterOrganiserenPlannen.style.display === "none") {
    mainContent.style.display = "grid";
    moreContent.style.display = "grid";
  } else {
    mainContent.style.display = "none";
    moreContent.style.display = "none";
  }
}

btnFilterOrganiseren.addEventListener("click", showFilterOrganiseren);
function showFilterOrganiseren() {
  document.getElementById("filter-organiseren-plannen").style.display = "grid";
  document.getElementById("filter-creatief-denken").style.display = "none";
  document.getElementById("filter-leren-jezelf").style.display = "none";
  document.getElementById("filter-onderzoeken-begrijpen").style.display =
    "none";
  document.getElementById("filter-presenteren").style.display = "none";
  moreContent.style.display = "none";
  mainContent.style.display = "none";
}

// 5 Filter Content: Communiceren en Presenteren

btnFilterPresenteren.addEventListener("click", filterPresenterenCom);
function filterPresenterenCom() {
  if (filterPresenteren.style.display === "none") {
    mainContent.style.display = "grid";
    moreContent.style.display = "grid";
  } else {
    mainContent.style.display = "none";
    moreContent.style.display = "none";
  }
}

btnFilterPresenteren.addEventListener("click", showFilterPresenteren);
function showFilterPresenteren() {
  document.getElementById("filter-presenteren").style.display = "grid";
  document.getElementById("filter-organiseren-plannen").style.display = "none";
  document.getElementById("filter-creatief-denken").style.display = "none";
  document.getElementById("filter-leren-jezelf").style.display = "none";
  document.getElementById("filter-onderzoeken-begrijpen").style.display =
    "none";
  moreContent.style.display = "none";
  mainContent.style.display = "none";
}

// 6 Filter Content: Leren over Anderen

btnFilterAnderen.addEventListener("click", filterLerenAnderen);
function filterLerenAnderen() {
  if (filterAnderen.style.display === "none") {
    mainContent.style.display = "grid";
    moreContent.style.display = "grid";
  } else {
    mainContent.style.display = "none";
    moreContent.style.display = "none";
  }
}

btnFilterAnderen.addEventListener("click", showFilterLerenAnderen);
function showFilterLerenAnderen() {
  document.getElementById("filter-leren-anderen").style.display = "grid";
  document.getElementById("filter-presenteren").style.display = "none";
  document.getElementById("filter-organiseren-plannen").style.display = "none";
  document.getElementById("filter-creatief-denken").style.display = "none";
  document.getElementById("filter-leren-jezelf").style.display = "none";
  document.getElementById("filter-onderzoeken-begrijpen").style.display =
    "none";
  moreContent.style.display = "none";
  mainContent.style.display = "none";
}

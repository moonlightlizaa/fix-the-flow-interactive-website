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
let mainContent = document.getElementById("mainContent");
let moreContent = document.getElementById("loadMore");
let btnFilterOnderzoek = document.getElementById("btn-filter-onderzoek");

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
}

// 2 Filter Content: Leren over jezelf

let filterJezelf = document.getElementById("filter-leren-jezelf");
let btnFilterJezelf = document.getElementById("btn-filter-jezelf");

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
  moreContent.style.display = "none";
  mainContent.style.display = "none";
}

// 3 Filter Content: Creatief Denken

let filterCreatiefDenken = document.getElementById("filter-creatief-denken");
let btnFilterCreatiefDenken = document.getElementById(
  "btn-filter-creatief-denken"
);

btnFilterCreatiefDenken.addEventListener("click", filterCreatief);
function filterCreatief() {
  if (filterCreatiefDenken.style.display === "none") {
    mainContent.style.display = "grid";
    moreContent.style.diplay = "grid";
  } else {
    mainContent.style.display = "none";
    moreContent.style.display = "none";
  }
}

btnFilterCreatiefDenken.addEventListener("click", showFilterCreatief);
function showFilterCreatief() {
  document.getElementById("filter-creatief-denken").style.display = "grid";
  document.getElementById("filter-onderzoeken-begrijpen").style.display =
    "none";
  moreContent.style.display = "none";
  mainContent.style.display = "none";
}

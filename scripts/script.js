const navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

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

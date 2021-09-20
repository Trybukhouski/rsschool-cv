console.log("Hello");

// BUSINESS-LOGIC

const sertificates = document.querySelectorAll(".sertificate");
const cover = document.querySelector(".cover");
const content = cover.querySelector(".content");

sertificates.forEach(el => el.addEventListener("click", showCover))
cover.addEventListener("click", hideCover);

function showCover(el) {
  cover.style.display = "block";
  const courseName = el.target.parentNode.childNodes[1].innerText;
  const sertificate = loadSertificate(courseName);
  content.style.backgroundImage = `url("assets/imgs/${sertificate}.jpg")`;
}

function hideCover() {
  cover.style.display = "none";
}

function loadSertificate(el) {
  for(i = 0; i < education.length; i++) {
    if(education[i][0] === el) return education[i][1];
  }
}



// DATA

const education = [
  ["Course EPAM UPSkill Lab - EPAM", "UpSkillLab_Certificate"],
  ["Course JS/FE Pre-school (JavaScript) - RS SCHOOL", "JS_FE_Pre_School_Certificate"]
]

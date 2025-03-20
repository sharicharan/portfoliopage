const data = {
  en: {
    helo: "HELLO I Am",
    Name: "port",
    name2: "Folio",
    home: "Home",
    about: "About",
    pro: "Projects",
    ski: "Skills",
    con: "Contact Us",
    fullname: "Hari Charan",
    btn1: "Hire me",
    btn2: "Resume",
    ainfo: "About",
    paragraph: "Hello! I'm Hari Charan, a passionate Computer Science and Engineering student...",
    Contactinfo: "Contact me",
    Mno: "Mobile",
    Mail: "Mail",
    skill: "Skills",
    project: "Projects",
    button: "Check",
    nameofproject1: "Basic Attendance Calculator Webpage:",
    nameofproject2: "Blood Donation Webpage:",
    disofproject1: "Input total classes and attended classes, calculate attendance percentage, and display results.",
    disofproject2: "A platform for donors and recipients to connect, featuring blood type search, registration forms, and donor eligibility guidelines."
  },
  ja: { /* Japanese translations */ }
};

let lang = "en";

function changelan() {
  const elementsMap = [
    { key: "helo", selectors: ["#helo"] },
    { key: "about", selectors: [".about", "#a-small"] },
    { key: "home", selectors: [".home", "#h-small"] },
    { key: "pro", selectors: [".pro", "#p-small"] },
    { key: "con", selectors: [".con", "#c-small"] },
    { key: "fullname", selectors: ["#fullname"] },
    { key: "btn1", selectors: ["#btn1"] },
    { key: "btn2", selectors: ["#btn2"] },
    { key: "skill", selectors: ["#s-info"] },
    { key: "project", selectors: ["#pro-infos"] },
    { key: "button", selectors: [".check1", ".check2"] }
  ];

  const currentLangData = lang === "en" ? data.ja : data.en;
  
  elementsMap.forEach(({ key, selectors }) => {
    selectors.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) element.innerHTML = currentLangData[key];
    });
  });

  lang = lang === "en" ? "ja" : "en";
}

document.getElementById("load").addEventListener("click", changelan);
document.getElementById("load-small").addEventListener("click", changelan);

document.getElementById("menu-icon").addEventListener("click", () => {
  const menu = document.getElementById("menu-small");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});

document.getElementById("nav").style.transition = "background-color 0.3s ease-in-out";
window.addEventListener("scroll", () => {
  document.getElementById("nav").style.backgroundColor = window.scrollY > 50 ? "rgba(0, 0, 0, 0.5)" : "transparent";
});


function change_data(serv) {

  const skillsData = {
    frontend: { title: "Front-End", skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"] },
    backend: { title: "Back-End", skills: ["Python", "Flask", "SQL", "REST API", "Java"] },
    uiux: { title: "UI-UX", skills: ["Framer", "Figma", "others"] },
    tools: { title: "Tools", skills: ["Git", "GitHub", "Vercel", "Vite"] }
  };

  let container = document.getElementById("skills-info");
  container.classList.remove("show");
  container.classList.add("fade");
  setTimeout(() => {
    document.getElementById("title").innerHTML = skillsData[serv].title;
    let root = document.getElementById("root");
    root.innerHTML = "";
    let ul = document.createElement("ul");
    skillsData[serv].skills.forEach(skill => {
      let li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });
    root.appendChild(ul);
  }, 400);
  setTimeout(() => {
    container.classList.remove("fade");
    container.classList.add("show");
  }, 500);
}
change_data('frontend')
document.querySelectorAll('.box').forEach(box => box.addEventListener('click',function(){
document.querySelectorAll(".box").forEach(e => e.classList.remove("active"));
event.currentTarget.classList.add("active");
}))

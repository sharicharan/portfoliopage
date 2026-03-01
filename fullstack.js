
var data = {
  en: {
    helo: "HELLO I Am",
    Name: "Hari",
    name2: "Charan",
    home: "Home",
    about: "About",
    pro: "Projects",
    ski: "Skills",
    con: "Contact Us",
    fullname: "Hari Charan",
    btn1: "Hire me",
    btn2: "Resume",
    ainfo: "About",
    ser: "My services",
    paragraph:
      "Hello! I'm Hari Charan, a passionate Computer Science and Engineering student currently pursuing my B.Tech, set to graduate in 2027. With a solid foundation from my diploma and a growing expertise in web development and Python programming, I am committed to leveraging technology to create innovative solutions.",
    Contactinfo: "Contact me",
    Mno: "Mobile",
    front: "Front end",
    back: "Back end",
    web: "Web Development",
    fixbug: "Bug Fixing",
    python: "Python Development",
    ui: "uiux",
    to: "tools",
    Mail: "Mail",
    skill: "Tech Stack",
    project: "Projects",
    button: "Check",
    cer: "Certificates",
    nameofproject1: "Basic Attendance Calculator Webpage:",
    nameofproject2: "Blood Donation Webpage:",
    nameofproject3: "Nihon Indo Foods",
    nameofproject4: "ReelSpot",
    info_para1: " A passionate Computer Science and Engineering student focused on designing modern and scalable web applications",
    info_para2: "I enjoy crafting clean user interfaces, writing efficient code, and transforming ideas into real-world digital solutions",
    info_para3: "Currently working toward becoming a full-stack developer with strong expertise in JavaScript, Python, and modern frameworks",


  },
  ja: {
    helo: "こんにちは、私は",
    Name: "ハリ",
    name2: "チャラン",
    home: "ホーム",
    about: "プロフィール",
    ainfo: "プロフィール",
    pro: "プロジェクト",
    ski: "スキル",
    con: "お問い合わせ",
    fullname: "ハリ・チャラン",
    btn1: "お問い合わせ",
    btn2: "履歴書",
    Contactinfo: "連絡先",
    ser: "私のサービス",
    cer: "証明書",
    front: "フロントエンド",
    back: "バックエンド",
    ui: "UI・UX",
    to: "ツール",
    web: "ウェブ開発",
    fixbug: "バグ修正",
    python: "Python 開発",
    paragraph:
      "こんにちは。私はハリ・チャランです。現在、2027年卒業予定のコンピューターサイエンスおよびエンジニアリングを専攻するB.Techの学生です。Web開発やPythonプログラミングに取り組み、技術を活用して実用的で革新的なソリューションを開発することに情熱を持っています。",
    Mno: "携帯",
    Mail: "メール",
    skill: "技術スタック",
    project: "プロジェクト",
    button: "詳細を見る",
    nameofproject1: "基本的な出席計算ウェブページ:",
    nameofproject2: "献血ウェブページ:",
    nameofproject3: "日本インドフーズ",
    nameofproject4: "リールスポット",
    info_para1: " モダンでスケーラブルなWebアプリケーションの設計に重点を置いた、熱心なコンピュータサイエンスとエンジニアリングの学生",
    info_para2: "私は、きれいなユーザーインターフェースを作り、効率的なコードを書いて、アイデアを現実世界のデジタルソリューションに変換することを楽しんでいます。",
    info_para3: "現在、JavaScript、Python、最新のフレームワークに精通したフルスタック開発者を目指しています。"
  },
};

let lang = "en";

function changelan() {
  const elementsMap = [
    { key: "helo", selectors: ["#helo"] },
    { key: "about", selectors: [".about", "#a-small"] },
    { key: "home", selectors: [".home", "#h-small"] },
    { key: "pro", selectors: [".pro", "#p-small", ".pro-heading"] },
    { key: "con", selectors: [".con", "#c-small"] },
    { key: "fullname", selectors: ["#fullname", ".cn"] },
    { key: "btn1", selectors: ["#btn1"] },
    { key: "btn2", selectors: ["#btn2"] },
    { key: "Name", selectors: ["#Name"] },
    { key: "name2", selectors: ["#name2"] },
    { key: "ainfo", selectors: ["#a-inf"] },
    { key: "paragraph", selectors: [".paragraph"] },
    { key: "Contactinfo", selectors: [".Contact-info"] },
    { key: "Mno", selectors: [".M-no"] },
    { key: "Mail", selectors: [".Mail"] },
    { key: "ski", selectors: [".skil"] },
    { key: "skill", selectors: ["#s-info"] },
    { key: "project", selectors: ["#pro-infos"] },
    { key: "nameofproject1", selectors: ["#nameofpro1"] },
    { key: "nameofproject2", selectors: ["#nameofpro2"] },
    { key: "nameofproject3", selectors: ["#nameofpro3"] },
    { key: "nameofproject4", selectors: ["#nameofpro4"] },

    { key: "button", selectors: [".check1", ".check2"] },
    { key: "ser", selectors: ["#service-heading"] },
    { key: "cer", selectors: [".cer-headings"] },
    { key: "front", selectors: ["#front-heading"] },
    { key: "back", selectors: ["#back-heading"] },
    { key: "ui", selectors: ["#uiux-heading"] },
    { key: "to", selectors: ["#tools-heading"] },
    { key: "web", selectors: [".ser-web"] },
    { key: "fixbug", selectors: [".ser-Bugfixing"] },
    { key: "python", selectors: [".ser-python"] },
    { key: "info_para1", selectors: ["#info-para1"] },
    { key: "info_para2", selectors: ["#info-para2"] },
    { key: "info_para3", selectors: ["#info-para3"] },

  ];

  const currentLangData = lang === "en" ? data.ja : data.en;

  elementsMap.forEach(({ key, selectors }) => {
    selectors.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = currentLangData[key];
      }
    });
  });

  lang = lang === "en" ? "ja" : "en";
}

document.getElementById("load").addEventListener("click", changelan);
document.getElementById("load-small").addEventListener("click", changelan);

document.getElementById("menu-icon").addEventListener("click", () => {
  const menu = document.getElementById("menu-small");
  menu.classList.toggle("show-style")

});

document.querySelector("#btn2").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "Hari.pdf";
  link.download = "Hari.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".pop-box").classList.remove("pop-box_show");
});
document.getElementById("number").innerHTML = "7901439616";

document.querySelector("#btn1").addEventListener("click", () => {
let box = document.getElementById("Contact-box");
  box.classList.toggle("pop-box_show");
});

document.querySelector(".close-btn2").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});

document.getElementById("con").addEventListener("click", () => {
  let box = document.getElementById("Contact-box");
  box.classList.toggle("pop-box_show");
});
document.getElementById("emailbox").addEventListener("click", () => {
  let box = document.getElementById("Contact-box");
  box.classList.add("pop-box_show");


});
let scores = [95, 90, 75, 70, 80, 70, 80];
let elements = document.querySelectorAll(".percentage");

elements.forEach((element, index) => {
  element.innerText = scores[index];
});
let names = ["programmer", "webdeveloper"];
let i = 0;
let changen = document.getElementById("change-name");

function changeName() {
  changen.style.opacity = 0;
  setTimeout(() => {
    changen.textContent = names[i];
    changen.style.opacity = 1;
    i = (i + 1) % names.length;
  }, 1000);
}


changen.textContent = names[i];
i++;


setInterval(changeName, 5000);

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
});

function change_data(serv) {
  let container = document.getElementById("skills-info");
  container.classList.remove("show");
  container.classList.add("fade");
  setTimeout(() => {
    const service = document.getElementById("title");
    let root = document.getElementById("root");
    root.innerHTML = "";
    const data = {
      frontend: {
        title: ["Front-End", "フロントエンド"],
        skills: ["Html", "Css", "JavaScript", "Bootstrap", "React"],
        poster: [
          "devicon-html5-plain colored",
          "devicon-css3-plain colored",
          "devicon-javascript-plain colored",
          "devicon-bootstrap-plain colored",
          "devicon-react-original colored",
        ],
      },
      backend: {
        title: ["Back-End", "バックエンド"],
        skills: ["Python", "Flask", "Sql", "Rest API", "Java(intermidiate)"],
        poster: [
          "devicon-python-plain colored",
          "devicon-flask-original colored",
          "devicon-mysql-plain colored",
          "devicon-linux-plain colored",
          "devicon-java-plain colored",
        ],
      },
      uiux: {
        title: ["UI-UX", "UI-UX"],
        skills: ["Framer", "Figma", "others"],
        poster: [
          "devicon-javascript-plain colored",
          "devicon-figma-plain colored",
          "devicon-devicon-plain colored",
        ],
      },
      tools: {
        title: ["Tools", "ツール"],
        skills: ["git", "git hub", "vercal", "vite"],
        poster: [
          "devicon-git-plain colored",
          "devicon-github-original colored",
          "fas fa-rocket",
          "devicon-vitejs-plain colored",
        ],
      },
    };
    const cal = serv;
    service.innerHTML = lang === "en" ? data[cal].title[0] : data[cal].title[1];
    let ul = document.createElement("ul");

    data[cal].skills.forEach((value, index) => {
      let icon = document.createElement("i");
      icon.className = data[cal].poster[index];
      let li = document.createElement("li");
      icon.style.marginRight = "8px";
      li.appendChild(icon);
      li.appendChild(document.createTextNode(value));
      ul.appendChild(li);
    });

    root.appendChild(ul);
  }, 400);
  setTimeout(() => {
    container.classList.remove("fade");
    container.classList.add("show");
  }, 500);
}
document.addEventListener("DOMContentLoaded", function () {
  change_data("frontend");

  const shift = document.querySelectorAll(".box");
  shift.forEach((element) =>
    element.addEventListener("click", function (e) {
      shift.forEach((ele) => ele.classList.remove("active"));
      element.classList.add("active");
    })
  );
});
const skillstForDevice = [
  "html",
  "css",
  "js",
  "python",
  "java",
  "react ",
  "bootstrap",
  "tailwindcss",
  "flask",
];
skillstForDevice.forEach((ele, index) => {
  let diver = document.createElement("div");
  let per = document.createElement("div");
  let content = document.createElement("div");
  content.className = "title_names";
  diver.className = "minibox";
  per.id = `stack-${index}`;
  per.className = "stacks";
  content.innerText = ele;
  const direction = index % 2 === 0 ? "fade-right" : "fade-left";
  diver.setAttribute("data-aos", direction);
  diver.setAttribute("data-aos-delay", index * 100);
  diver.appendChild(content);
  diver.appendChild(per);

  document.getElementById("skillboxs").appendChild(diver);
});
function expand(e) {
  if (e.innerText == "see more") {
    let sibling = e.previousElementSibling;

    sibling.style.height = "auto";
    e.innerText = "see Less"
  }
  else {
    let sibling = e.previousElementSibling;

    sibling.style.height = 85 + "px";
    e.innerText = "see more"
  }



}

let nav_ele = document.querySelectorAll("#menu li a");

nav_ele.forEach(link => {
  link.addEventListener("click", () => {

    nav_ele.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});
(function () {
  emailjs.init("Khzr1v7EoSeZDd1mc");
})();

const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (sendBtn.classList.contains("loading")) return;
  sendBtn.classList.add("loading");
  const params = {
    name: document.getElementById("user_name").value,
    email: document.getElementById("user_email").value,
    message: document.getElementById("user_message").value,
  };
  emailjs
    .send("service_z15blyb", "template_j4rzfji", params)
    .then(() => {
      sendBtn.classList.remove("loading");
      form.reset();
      document.querySelector(".pop-box").classList.remove("pop-box_show");

      document.getElementById("successPopup").classList.add("show");
    })
    .catch((error) => {
      console.error(error);
      sendBtn.classList.remove("loading");

      alert("Failed to send message");
    });
});
document.querySelector(".close-btn2").addEventListener("click", () => {
  document.getElementById("successPopup").classList.remove("show");
});
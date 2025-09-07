var data = {
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
    ser: "Myservices",
    paragraph:
      "Hello! I'm Hari Charan, a passionate Computer Science and Engineering student currently pursuing my B.Tech, set to graduate in 2027. With a solid foundation from my diploma and a growing expertise in web development and Python programming, I am committed to leveraging technology to create innovative solutions.",
    Contactinfo: "Contact me",
    Mno: "Mobile",
    front: "Front end",
    back: "Back end",
    web:"Web Development",
    fixbug:"Bug Fixing",
    python:"Python Development",
    ui: "uiux",
    to: "tools",
    Mail: "Mail",
    skill: "Skills",
    project: "Projects",
    button: "Check",
    cer: "Certificates",
    nameofproject1: "Basic Attendance Calculator Webpage:",
    nameofproject2: "Blood Donation Webpage:",
    nameofproject3:"Nihon Indo Foods",
    nameofproject4:"ReelSpot",
    disofproject1:
      "Input total classes and attended classes, calculate attendance percentage, and display results with simple formatting.",
    disofproject2:
      "A platform for donors and recipients to connect, featuring blood type search, registration forms, and donor eligibility guidelines.",
      disofproject3:"A restaurant food ordering website that enables customers to place orders online easily and conveniently, without the need to interact with staff",
      disofproject4:"A responsive web page that showcases trending and top-rated movies by fetching data from an IMDb-compatible API. Features include search, ratings, posters, and pagination for smooth browsingbuild a webpage that shows trending and top rated movies, api initgrated (imdb)",
      
  },
  ja: {
    helo: "こんにちは 私は",
    Name: "ポート",
    name2: "フォリオ",
    home: "家",
    about: "について",
    pro: "プロジェクト",
    ski: "スキル",
    con: "お問い合わせ",
    fullname: "ハリ・チャランです。",
    btn1: "私を雇ってください",
    btn2: "再開する",
    ainfo: "について",
    ser: "私のサービス",
    cer: "証明書",
    front: "フロントエンド",
    back: "バックエンド",
    ui: "うい、う",
    to: "ツール",
     web:"ウェブ開発",
    fixbug:"バグ修正",
    python:"Python 開発",
    paragraph:
      "こんにちは！私は Hari Charan です。コンピューター サイエンスとエンジニアリングに熱心に取り組んでいる学生で、現在は B.Tech を取得して 2027 年に卒業する予定です。学位で得た確固たる基礎と、Web 開発と Python プログラミングの専門知識を活かして、テクノロジーを活用して革新的なソリューションを生み出すことに尽力しています。",
    Contactinfo: "連絡してください",
    Mno: "携帯",
    Mail: "郵便",
    skill: "スキル",
    project: "プロジェクト",
    button: "チェック",
    nameofproject1: "基本的な出席計算ウェブページ:",
    nameofproject2: "献血ウェブページ:",
    nameofproject3:"日本インドフーズ",
    nameofproject4:"リールスポット",
    disofproject1:
      "総クラス数と出席クラス数を入力し、出席率を計算し、結果を簡単なフォーマットで表示します。",
    disofproject2:
      "血液型の検索、登録フォーム、ドナー資格ガイドラインを備えた、ドナーと受信者をつなぐプラットフォームです。",
    disofproject3:"スタッフとやり取りすることなく、顧客がオンラインで簡単かつ便利に注文できるレストランの食品注文ウェブサイト",
    disofproject4:"IMDb互換APIからデータを取得し、人気映画や評価の高い映画を紹介するレスポンシブなウェブページです。検索、評価、ポスター、ページネーションなどの機能により、スムーズな閲覧が可能です。",
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
    { key: "fullname", selectors: ["#fullname"] },
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
    { key: "disofproject1", selectors: ["#disofpro1"] },
    { key: "disofproject2", selectors: ["#disofpro2"] },
        { key: "disofproject3", selectors: ["#disofpro3"] },
    { key: "disofproject4", selectors: ["#disofpro4"] },
    { key: "button", selectors: [".check1", ".check2"] },
    { key: "ser", selectors: [".service-heading"] },
    { key: "cer", selectors: [".cer-headings"] },
    { key: "front", selectors: ["#front-heading"] },
    { key: "back", selectors: ["#back-heading"] },
    { key: "ui", selectors: ["#uiux-heading"] },
    { key: "to", selectors: ["#tools-heading"] },
    { key: "web", selectors: [".ser-web"] },
    { key: "fixbug", selectors: [".ser-Bugfixing"] },
    { key: "python", selectors: [".ser-python"] },
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
  menu.style.display = menu.style.display === "none" ? "block" : "none";
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
  document.querySelector(".pop-box").style.display = "none";
});
document.getElementById("number").innerHTML = "7901439616";

document.querySelector("#btn1").addEventListener("click", () => {
  document.querySelector(".pop-box").style.display = "block";
});
document.querySelector(".send-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const info = document.querySelector(".name-in").value;
  if (
    info != "" &&
    document.querySelector(".email-in").value.slice(-10) === "@gmail.com"
  ) {
    document.querySelector(".pop-box").style.display = "none";
    document.querySelector(".popup").style.display = "block";
  } else {
    alert("Enter valid information");
  }
});
document.querySelector(".close-btn2").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});
document.addEventListener("wheel", () => {
  let a = document.getElementById("menu-small");
  if (a.style.display == "block") {
    a.style.display = "none";
  }
});
document.getElementById("con").addEventListener("click", () => {
  let box = document.getElementById("Contact-box");
  if (box.style.display == "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});
document.getElementById("emailbox").addEventListener("click", () => {
  let box = document.getElementById("Contact-box");
  if (box.style.display == "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
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
        title: ["UI-UX", "うい、う"],
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
function expand(e){
  if (e.innerText =="see more"){
    let sibling = e.previousElementSibling;
    
   sibling.style.height = "auto";
   e.innerText="see Less"
  }
   else{
     let sibling = e.previousElementSibling;
    
   sibling.style.height = 85 +"px";
   e.innerText="see more"
  }
  
   

}

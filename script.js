let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
  let body = document.body;

  // ナビゲーションバーの表示状態をトグル
  nav.classList.toggle("is-active");

  // bodyのスクロールを無効にするクラスをトグル
  if (nav.classList.contains("is-active")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
};

mask.onclick = () => {
  nav.classList.toggle("open");
};

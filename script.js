let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");
let navLinks = nav.querySelectorAll("a");

btn.onclick = () => {
  toggleNav();
};

mask.onclick = () => {
  toggleNav();
};

// navArea の項目をクリックしたときに実行される関数
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNav();
  });
});

function toggleNav() {
  nav.classList.toggle("open");
  nav.classList.toggle("is-active");

  // body のスクロールを無効/有効にする
  document.body.classList.toggle(
    "no-scroll",
    nav.classList.contains("is-active")
  );
}

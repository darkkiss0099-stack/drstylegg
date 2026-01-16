<script>
/* =========================
   DOM ELEMENTS
========================= */
const bg        = document.getElementById("bg");
const badge     = document.getElementById("badge");
const adminBtn  = document.getElementById("adminBtn");
const loginBox  = document.getElementById("login");
const admin     = document.getElementById("admin");

const mainText  = document.getElementById("mainText");
const subText   = document.getElementById("subText");
const btn1      = document.getElementById("btn1");
const btn2      = document.getElementById("btn2");

const font      = document.getElementById("font");
const bgInput   = document.getElementById("bgInput");
const badgeInput= document.getElementById("badgeInput");
const badgeBg   = document.getElementById("badgeBg");
const mainInput = document.getElementById("mainInput");
const mainColor = document.getElementById("mainColor");
const b1t       = document.getElementById("b1t");
const b1l       = document.getElementById("b1l");
const b2t       = document.getElementById("b2t");
const b2l       = document.getElementById("b2l");

const user      = document.getElementById("user");
const pass      = document.getElementById("pass");

/* =========================
   LOAD DATA
========================= */
let d = JSON.parse(localStorage.site || "{}");

/* =========================
   APPLY DATA TO PAGE
========================= */
function apply(){

  /* FONT */
  document.body.style.fontFamily = d.font || "'Orbitron', sans-serif";

  /* BACKGROUND */
  if(d.bg){
    bg.style.background = d.bg.startsWith("http")
      ? `url(${d.bg}) center / cover no-repeat`
      : d.bg;
  }

  /* BADGE */
  badge.innerText = d.badge || "588";
  badge.style.background = d.badgeBg || "#2f5bff";

  /* MAIN TEXT */
  mainText.innerText = d.main || "WINTERFELL AWAKE";
  mainText.style.color = d.mainColor || "#3ff";

  /* BUTTONS */
  btn1.innerText = d.b1t || "DERNREANG";
  btn1.href      = d.b1l || "#";

  btn2.innerText = d.b2t || "TESTE'D";
  btn2.href      = d.b2l || "#";
}
apply();

/* =========================
   ADMIN LOGIN
========================= */
adminBtn.onclick = () => {
  loginBox.style.display = "flex";
};

function login(){
  if(user.value === "admin" && pass.value === "dernrean911"){
    loginBox.style.display = "none";
    admin.style.display = "block";

    font.value       = d.font || "";
    bgInput.value    = d.bg || "";
    badgeInput.value = d.badge || "";
    badgeBg.value    = d.badgeBg || "";
    mainInput.value  = d.main || "";
    mainColor.value  = d.mainColor || "";
    b1t.value        = d.b1t || "";
    b1l.value        = d.b1l || "";
    b2t.value        = d.b2t || "";
    b2l.value        = d.b2l || "";
  }else{
    alert("LOGIN FAILED");
  }
}

/* =========================
   SAVE & LIVE UPDATE
========================= */
document.querySelectorAll("#admin input").forEach(input=>{
  input.addEventListener("input",()=>{
    d = {
      font: font.value,
      bg: bgInput.value,
      badge: badgeInput.value,
      badgeBg: badgeBg.value,
      main: mainInput.value,
      mainColor: mainColor.value,
      b1t: b1t.value,
      b1l: b1l.value,
      b2t: b2t.value,
      b2l: b2l.value
    };

    localStorage.site = JSON.stringify(d);
    apply();
  });
});
</script>

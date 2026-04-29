const gallery = document.getElementById("fj-gallery");

/* ===============================
   IMAGENS
================================ */
const imagens = [
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1200",
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200"
];

/* ===============================
   CONFIG
================================ */
const repeticoes = 12;
const autoVel = 0.45;
const damping = 0.94;
const smooth = 0.08;

/* ===============================
   MONTAR
================================ */
function montar() {
  gallery.innerHTML = "";

  for(let r = 0; r < repeticoes; r++) {
    imagens.forEach(src => {

      const item = document.createElement("div");
      item.className = "fj-item";

      const img = document.createElement("img");
      img.src = src;
      img.draggable = false;

      item.appendChild(img);
      gallery.appendChild(item);

    });
  }
}

montar();

/* ===============================
   VARIÁVEIS
================================ */
let target = 0;
let current = 0;
let velocity = 0;

let dragging = false;
let startX = 0;
let startScroll = 0;

let direcao = 1;
let timer = 0;

/* ===============================
   UTIL
================================ */
function lerp(a,b,t){
  return a + (b-a)*t;
}

function larguraBloco(){
  return gallery.scrollWidth / repeticoes;
}

/* ===============================
   START
================================ */
function iniciar(){

  const bloco = larguraBloco();

  target = bloco * 6;
  current = target;

  gallery.scrollLeft = current;
}

setTimeout(iniciar,150);

/* ===============================
   WHEEL
================================ */
window.addEventListener("wheel", e => {

  e.preventDefault();

  velocity += e.deltaY * 0.45;

  if(velocity > 80) velocity = 80;
  if(velocity < -80) velocity = -80;

  timer = 0;

},{ passive:false });

/* ===============================
   DRAG
================================ */
gallery.addEventListener("pointerdown", e => {

  dragging = true;
  startX = e.clientX;
  startScroll = target;

  velocity = 0;
  timer = 0;

  gallery.style.cursor = "grabbing";

});

window.addEventListener("pointermove", e => {

  if(!dragging) return;

  const dx = startX - e.clientX;
  target = startScroll + dx;

});

window.addEventListener("pointerup", () => {

  dragging = false;
  gallery.style.cursor = "grab";

});

/* ===============================
   LOOP INFINITO
================================ */
function infinito(){

  const bloco = larguraBloco();

  if(target <= bloco * 2){
    target += bloco;
    current += bloco;
  }

  if(target >= bloco * (repeticoes - 2)){
    target -= bloco;
    current -= bloco;
  }

}

/* ===============================
   AUTOPLAY
================================ */
function autoplay(){

  timer++;

  if(timer > 600){
    direcao *= -1;
    timer = 0;
  }

  target += autoVel * direcao;

}

/* ===============================
   PARALLAX
================================ */
function parallax(){

  const itens = document.querySelectorAll(".fj-item");
  const centro = window.innerWidth / 2;

  itens.forEach(item => {

    const img = item.querySelector("img");
    const rect = item.getBoundingClientRect();

    let offset =
      (centro - (rect.left + rect.width/2)) / 7;

    if(offset > 70) offset = 70;
    if(offset < -70) offset = -70;

    img.style.transform =
      `translate(calc(-50% + ${offset}px), -50%) scale(1.08)`;

  });

}

/* ===============================
   LOOP
================================ */
function animate(){

  if(!dragging){

    autoplay();

    target += velocity;
    velocity *= damping;

    if(Math.abs(velocity) < 0.02){
      velocity = 0;
    }

  }

  infinito();

  current = lerp(current, target, smooth);

  gallery.scrollLeft = current;

  parallax();

  requestAnimationFrame(animate);
}

gallery.style.cursor = "grab";

animate();

window.addEventListener("resize", iniciar);
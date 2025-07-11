function handleYes() {
  document.getElementById("intro-box").classList.add("hidden");
  showCard();
}

function handleNo() {
  document.getElementById("intro-box").classList.add("hidden");
  document.getElementById("naughty-box").classList.remove("hidden");
}

function showCard() {
  document.getElementById("naughty-box").classList.add("hidden");
  document.getElementById("card-area").classList.remove("hidden");

  const card = document.querySelector(".card");
  setTimeout(() => {
    card.classList.add("flipped");
    startTyping();
  }, 500);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

window.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.play().catch(() => {});
}, { once: true });

function startTyping() {
  const text = "Wishing you all the love, joy, and happiness in the world. You are my sunshine and my everything. Happy birthday, my beautiful girl 💖";
  let i = 0;
  const speed = 50;
  const target = document.getElementById("typed-text");
  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

let animationStarted = false;
function startAnimation() {
  if (animationStarted) return;
  animationStarted = true;

  setTimeout(() => {
    setTimeout(() => {
      const card = document.getElementById("flip-card-inner");
      if (card) card.style.transform = "rotateY(180deg)";
    }, 1500);
  }, 1000);

  setTimeout(() => {
    setTimeout(openEnvelope, 1000);
  }, 2000);
}

function openEnvelope() {
  const one = document.getElementById("one");
  const company = document.getElementById("companyName");
  if (one) one.style.transform = "rotate(180deg)";
  if (company) company.style.display = "none";

  setTimeout(letterUp, 2000);
}

function letterUp() {
  const letter = document.getElementById("letter");
  const one = document.getElementById("one");

  one.style.zIndex = 1;
  letter.style.zIndex = 2;
  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 500) {
      clearInterval(id);
    } else {
      letter.style.top = -i + "px";
      i++;
    }
  }, 5);

  setTimeout(letterDown, 3000);
}

function letterDown() {
  const letter = document.getElementById("letter");
  const card = document.getElementById("flip-card");

  letter.style.top = -500 + "px";
  letter.style.zIndex = 4;

  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 100) {
      clearInterval(id);
    } else {
      letter.style.top = -400 + i * 5 + "px";
      letter.style.transform = "rotate(" + -i / 18 + "deg)";

      card.style.transform = "rotate(" + i / 18 + "deg)";

      i++;
    }
  }, 10);
}

function yesResponse() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });

  // Show thank you overlay after a short delay
  setTimeout(() => {
    const overlay = document.getElementById("thankYouOverlay");
    if (overlay) {
      overlay.style.display = "flex";
      // Fade in effect
      setTimeout(() => {
        overlay.style.opacity = "1";
      }, 10);
    }
  }, 500);

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 2.5,
    });
  }, 1000);

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 2,
    });
  }, 1500);
}


let noClickCount = 0;

// Array of prompts that will appear on the No button
const noPrompts = [
  "No, I don't love you.",
  "Are you sure?",
  "Are you positive?",
  "Are you certain?",
  "Are you 100% sure?",
  "Really though?",
  "Think carefully...",
  "Last chance!",
  "No regrets?",
  "Final answer?",
  "You sure about that?",
  "Absolutely certain?",
  "No going back...",
  "Is that definite?",
  "Reconsider?",
  "Pretty please? 🥺",
];

function noResponse() {
  const no = document.getElementById("noButton");
  const yes = document.getElementById("yesButton");
  if (!no || !yes) return;

  noClickCount++;

  // Change the text on the No button
  if (noClickCount < noPrompts.length) {
    no.textContent = noPrompts[noClickCount];
  } else {
    // If they keep clicking, keep the last prompt
    no.textContent = noPrompts[noPrompts.length - 1];
  }

  // Grow/shrink dimensions
  const widthDelta = 30; // px to change width
  const heightDelta = 8; // px to change height
  const fontDelta = 1; // px to change font size

  const yesW = yes.offsetWidth || parseInt(getComputedStyle(yes).width) || 0;
  const noW = no.offsetWidth || parseInt(getComputedStyle(no).width) || 0;
  const yesH = yes.offsetHeight || parseInt(getComputedStyle(yes).height) || 0;
  const noH = no.offsetHeight || parseInt(getComputedStyle(no).height) || 0;

  // Get current font sizes
  const yesFontSize = parseInt(getComputedStyle(yes).fontSize) || 16;
  const noFontSize = parseInt(getComputedStyle(no).fontSize) || 16;

  // Calculate new dimensions
  const newYesW = yesW + widthDelta;
  const newNoW = Math.max(80, noW - widthDelta); // Minimum width of 80px

  const newYesH = yesH + heightDelta;
  const newNoH = Math.max(30, noH - heightDelta); // Minimum height of 30px

  const newYesFontSize = yesFontSize + fontDelta;
  const newNoFontSize = Math.max(8, noFontSize - fontDelta); // Minimum font size of 8px

  // Apply new dimensions
  yes.style.width = newYesW + "px";
  no.style.width = newNoW + "px";

  yes.style.height = newYesH + "px";
  no.style.height = newNoH + "px";

  yes.style.fontSize = newYesFontSize + "px";
  no.style.fontSize = newNoFontSize + "px";

  // Add a little shake animation to the No button
  no.style.animation = "shake 0.3s";
  setTimeout(() => {
    no.style.animation = "";
  }, 300);
}

// Attach handler when elements are available in DOM
document.addEventListener("DOMContentLoaded", () => {
  const tryAttach = () => {
    const no = document.getElementById("noButton");
    const yes = document.getElementById("yesButton");
    if (no) {
      no.addEventListener("click", noResponse);
    }
    if (yes) {
      yes.addEventListener("click", yesResponse);
    }
    if (no || yes) return true;
    return false;
  };

  if (!tryAttach()) {
    const attachInterval = setInterval(() => {
      if (tryAttach()) clearInterval(attachInterval);
    }, 250);
  }
  // Desktop view notice logic
  const desktopNotice = document.getElementById("desktopNotice");
  const noticeClose = document.getElementById("desktopNoticeClose");

  const shouldShowNotice = () => {
    if (!desktopNotice) return;
    const dismissed = localStorage.getItem("desktopNoticeDismissed");
    if (dismissed === "true") {
      desktopNotice.style.display = "none";
      return;
    }
    if (window.innerWidth >= 900) {
      desktopNotice.style.display = "none";
      return;
    }
    desktopNotice.style.display = "flex";
  };

  if (noticeClose) {
    noticeClose.addEventListener("click", () => {
      localStorage.setItem("desktopNoticeDismissed", "true");
      if (desktopNotice) desktopNotice.style.display = "none";
    });
  }

  shouldShowNotice();
  window.addEventListener("resize", shouldShowNotice);

  // Start the animation on any click in the DOM
  document.addEventListener("click", startAnimation, { once: true });
});
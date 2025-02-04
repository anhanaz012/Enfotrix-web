const referrals = [
  { id: 1, name: "Referral #1", locked: true },
  { id: 2, name: "Referral #2", locked: true },
  { id: 3, name: "Referral #3", locked: true },
  { id: 4, name: "Referral #4", locked: true },
  { id: 5, name: "Referral #5", locked: true },
  { id: 6, name: "Referral #6", locked: true },
  { id: 7, name: "Referral #7", locked: true },
];

function renderReferrals() {
  const container = document.getElementById("referralsList");
  container.innerHTML = "";

  referrals.forEach((referral) => {
    const card = document.createElement("div");
    card.className = `referral-card ${referral.locked ? "locked" : ""}`;
    card.innerHTML = `
     <div class = "levels-icons-container">
      <div class="icon-container">
        ${referral.locked ? `<i class="fa-solid fa-lock"></i>` : ""}
      </div>
      <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div class="text-container">
        <h5>Referral #${referral.id}</h5>
        <p>${referral.locked ? "Locked" : "Unlocked"}</p>
      </div>
      
    `;
    container.appendChild(card);
  });
}

function changeLevel(level) {
  document.getElementById("currentLevel").innerText = level;
  let progressWidth = level === 1 ? "50%" : level === 2 ? "75%" : "100%";
  document.querySelector(".progress").style.width = progressWidth;

  // Simulating unlocking next level
  if (level === 2) {
    document.querySelectorAll(".tab")[1].classList.remove("locked");
  } else if (level === 3) {
    document.querySelectorAll(".tab")[2].classList.remove("locked");
  }
}

renderReferrals();

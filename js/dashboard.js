const levels = [
  { id: 1, referrals: 2, total: 7, stars: 2, isActive: true },
  { id: 2, referrals: 0, total: 7, stars: 0, isActive: false },
  { id: 3, referrals: 0, total: 7, stars: 0, isActive: false },
  { id: 4, referrals: 0, total: 7, stars: 0, isActive: false },
  { id: 5, referrals: 0, total: 7, stars: 0, isActive: false },
  { id: 6, referrals: 0, total: 7, stars: 0, isActive: false },
  { id: 7, referrals: 0, total: 7, stars: 0, isActive: false },
];

const container = document.getElementById("referralContainer");

levels.forEach((level) => {
  const card = document.createElement("div");
  card.className = `level-card ${level.isActive ? "active" : ""}`;
  card.innerHTML = `
      <div class="level-header">
      <div class = "rounded-lvl">
      <p>
      ${level.id}
      </p>
      </div>
      Level: ${level.id}
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: ${
          (level.referrals / level.total) * 100
        }%"></div>
      </div>
      <div class="stars">
        ${[...Array(level.total)]
          .map((_, index) => {
            return `<div class="star ${index < level.stars ? "active" : ""}">
            <div class = "star-icon-container ${
              index < level.stars ? "active" : "inactive"
            }">
           ${
             index < level.stars
               ? '<i class="fa-solid fa-star active"></i>'
               : '<i class="fa-solid fa-lock inactive"></i>'
           }
           </div>
          </div>`;
          })
          .join("")}
      </div>
      <div class = "referrals-container">
      <div class="referrals">${level.referrals} / ${level.total} Referrals</div>
      <div class="view-ref-btn">View <i class="bi bi-chevron-right"></i></div>
      </div>    
      ${
        !level.isActive
          ? '<div class="locked-overlay"><i class="fa-solid fa-lock inactive"></i> Locked</div>'
          : ""
      }
    `;
  container.appendChild(card);
});
document.querySelector(".view-ref-btn").addEventListener("click", () => {
  window.location.href = "level.html"
});
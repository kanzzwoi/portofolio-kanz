document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONFIG === "undefined") {
    console.error("File config.js tidak ditemukan atau gagal dimuat.");
    return;
  }

  document.getElementById("year").innerText = new Date().getFullYear();
  document.getElementById("nav-brand").innerText = CONFIG.panggilan || CONFIG.nama;
  document.getElementById("footer-nama").innerText = CONFIG.nama;
  document.getElementById("user-nama").innerText = CONFIG.nama;
  document.getElementById("user-peran").innerText = CONFIG.peran;
  document.getElementById("user-asal").innerText = CONFIG.asal;
  document.getElementById("user-bio").innerText = CONFIG.bioSingkat;
  
  if (CONFIG.fotoProfil) {
    document.getElementById("profile-img").src = CONFIG.fotoProfil;
  }

  const waBtn = document.getElementById("btn-wa");
  if (CONFIG.kontak.whatsapp) {
    const waMsg = encodeURIComponent(`Halo ${CONFIG.panggilan}, saya lihat dari website portofolio kamu!`);
    waBtn.href = `https://wa.me/${CONFIG.kontak.whatsapp}?text=${waMsg}`;
  } else {
    waBtn.style.display = 'none';
  }

  const funfactContainer = document.getElementById("funfact-list");
  CONFIG.funFacts.forEach((fact, idx) => {
    funfactContainer.innerHTML += `
      <div class="glass-card p-4 rounded-2xl flex items-start gap-4">
        <span class="flex-shrink-0 w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm">
          0${idx + 1}
        </span>
        <p class="text-slate-300 text-sm leading-relaxed">${fact}</p>
      </div>
    `;
  });

  const hobiContainer = document.getElementById("hobi-list");
  CONFIG.hobi.forEach(h => {
    hobiContainer.innerHTML += `
      <div class="glass-card p-5 rounded-2xl">
        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
          <i data-lucide="${h.ikon || 'sparkles'}" class="w-5 h-5"></i>
        </div>
        <h4 class="font-semibold text-slate-100 text-sm mb-1">${h.nama}</h4>
        <p class="text-xs text-slate-400 leading-normal">${h.deskripsi}</p>
      </div>
    `;
  });

  const makananContainer = document.getElementById("makanan-list");
  CONFIG.makananFavorit.forEach(m => {
    makananContainer.innerHTML += `
      <div class="glass-card p-4 rounded-2xl flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="text-2xl">${m.emoji}</span>
          <div>
            <h4 class="font-medium text-slate-200 text-sm">${m.nama}</h4>
            <p class="text-xs text-slate-400">${m.ket}</p>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-semibold">
          ★ ${m.rating}
        </span>
      </div>
    `;
  });

  const gameContainer = document.getElementById("game-list");
  CONFIG.gameFavorit.forEach(g => {
    gameContainer.innerHTML += `
      <div class="glass-card p-4 rounded-2xl flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="text-2xl">${g.emoji}</span>
          <div>
            <h4 class="font-medium text-slate-200 text-sm">${g.nama}</h4>
            <p class="text-xs text-slate-400">${g.genre}</p>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">
          ${g.rank}
        </span>
      </div>
    `;
  });

  const socialContainer = document.getElementById("social-links");
  const socialItems = [
    { name: "Instagram", icon: "instagram", url: `https://instagram.com/${CONFIG.kontak.instagram}`, show: !!CONFIG.kontak.instagram },
    { name: "TikTok", icon: "video", url: `https://tiktok.com/@${CONFIG.kontak.tiktok}`, show: !!CONFIG.kontak.tiktok },
    { name: "Email", icon: "mail", url: `mailto:${CONFIG.kontak.email}`, show: !!CONFIG.kontak.email }
  ];

  socialItems.forEach(item => {
    if (item.show) {
      socialContainer.innerHTML += `
        <a href="${item.url}" target="_blank" class="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700/60 flex items-center gap-2 transition hover:scale-105">
          <i data-lucide="${item.icon}" class="w-4 h-4 text-indigo-400"></i> ${item.name}
        </a>
      `;
    }
  });

  lucide.createIcons();
});

// ubah ubah aja wok kalau mau, bebas yak... jangan hapus credit wok
// instagram: @kanzgt

const notifAudio = new Audio('https://a.top4top.io/m_3909ks6ua0.mp3');
notifAudio.preload = 'auto';
const unlockAudio = () => {
    notifAudio.play().then(() => {
        notifAudio.pause();
        notifAudio.currentTime = 0;
    }).catch(() => {});
    window.removeEventListener('touchstart', unlockAudio);
    window.removeEventListener('click', unlockAudio);
};
window.addEventListener('touchstart', unlockAudio, { once: true });
window.addEventListener('click', unlockAudio, { once: true });

function playNotifSound() {
    try {
        notifAudio.currentTime = 0;
        const playPromise = notifAudio.play();
        if (playPromise !== undefined) {
            playPromise.catch(err => console.log('Audio autoplay blocked:', err));
        }
    } catch (e) {}
}

function dismissNotif(notifBox) {
    if (!notifBox || notifBox.dataset.dismissed) return;
    notifBox.dataset.dismissed = "true";
    notifBox.style.transform = "translateY(-20px) scale(0.95)";
    notifBox.style.opacity = "0";
    setTimeout(() => notifBox.remove(), 400);
}

function showWaNotification(textMessage) {
    const container = document.getElementById('wa-notif-container');
    const notifBox = document.createElement('div');
    
    notifBox.className = "pointer-events-auto bg-[#2b2b2e]/95 backdrop-blur-md text-white rounded-2xl p-2.5 shadow-2xl border border-white/10 flex items-center gap-3 transform -translate-y-10 opacity-0 transition-all duration-500 ease-out cursor-pointer hover:bg-[#38383c] touch-pan-x";
    
    let startX = 0;
    let currentX = 0;

    notifBox.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    notifBox.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX;
        let diffX = currentX - startX;
        if (Math.abs(diffX) > 10) {
            notifBox.style.transform = `translateX(${diffX}px)`;
        }
    }, { passive: true });

    notifBox.addEventListener('touchend', () => {
        let diffX = currentX - startX;
        if (Math.abs(diffX) > 60 && startX !== 0) {
            dismissNotif(notifBox);
        } else {
            notifBox.style.transform = 'translateY(0)';
        }
        startX = 0;
        currentX = 0;
    });

    notifBox.onclick = function() {
        dismissNotif(this);
    };

    notifBox.innerHTML = `
        <div class="relative shrink-0">
            <img src="https://a.top4top.io/p_3909nh5kd1.jpg" 
                 alt="my bini" 
                 class="w-10 h-10 rounded-full object-cover border border-white/10"
                 onerror="this.src='https://placehold.co/100x100/333/fff?text=Bini'">
            <div class="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#25D366] rounded-full flex items-center justify-center text-[9px] text-white shadow">
                <i class="fa-brands fa-whatsapp"></i>
            </div>
        </div>
        <div class="flex-1 min-w-0 pr-1">
            <div class="flex justify-between items-center mb-0.5">
                <span class="text-xs font-bold text-white tracking-wide truncate">my bini♥️</span>
                <span class="text-[10px] text-gray-400 font-normal">sekarang</span>
            </div>
            <p class="text-[11.5px] text-gray-200 font-normal leading-tight break-words">${textMessage}</p>
        </div>
    `;

    container.appendChild(notifBox);

    // Bagian notifnya wok
    playNotifSound();

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            notifBox.classList.remove('-translate-y-10', 'opacity-0');
            notifBox.classList.add('translate-y-0', 'opacity-100');
        });
    });

    setTimeout(() => {
        dismissNotif(notifBox);
    }, 8000);
}

let sequenceStarted = false;

function startNotifSequence() {
    if (sequenceStarted) return;
    sequenceStarted = true;

    const messages = [
        "sayang?kamu dmna?",
        "kok chatku gak dibales😡",
        "kamu mau tidur di luar malam ini? okee kalau gitu🖕"
    ];

    setTimeout(() => {
        showWaNotification(messages[0]);
        setTimeout(() => {
            showWaNotification(messages[1]);
            setTimeout(() => {
                showWaNotification(messages[2]);
            }, 2200);

        }, 2200);

    }, 10000);
}

notifAudio.addEventListener('canplaythrough', startNotifSequence, { once: true });
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(startNotifSequence, 3000);
});

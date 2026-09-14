function switchTab(tabName) {
    const tabs = ['home', 'about', 'love', 'contact'];
    const profileHeader = document.getElementById('profile-header');

    if (tabName === 'home') {
        profileHeader.classList.remove('header-mini');
        profileHeader.classList.add('header-home');
    } else {
        profileHeader.classList.remove('header-home');
        profileHeader.classList.add('header-mini');
    }
    tabs.forEach(t => {
        const section = document.getElementById('tab-' + t);
        const button = document.getElementById('btn-' + t);
        
        if (t === tabName) {
            section.classList.add('active');
            button.classList.add('active');
        } else {
            section.classList.remove('active');
            button.classList.remove('active');
        }
    });
}

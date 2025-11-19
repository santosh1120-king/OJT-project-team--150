function updateNavigation() {
    const token = localStorage.getItem('access_token');
    const navLogin = document.getElementById('navLogin');
    const navRegister = document.getElementById('navRegister');
    const navProfile = document.getElementById('navProfile');
    const navLogout = document.getElementById('navLogout');

    if (token) {
        if (navLogin) navLogin.style.display = 'none';
        if (navRegister) navRegister.style.display = 'none';
        if (navProfile) navProfile.style.display = 'block';
        if (navLogout) navLogout.style.display = 'block';
    } else {
        if (navLogin) navLogin.style.display = 'block';
        if (navRegister) navRegister.style.display = 'block';
        if (navProfile) navProfile.style.display = 'none';
        if (navLogout) navLogout.style.display = 'none';
    }
}


const logoutBtn = document.getElementById('navLogout');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    });
}


const profileBtn = document.getElementById('navProfile');
if (profileBtn) {
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'profile.html';
    });
}


document.addEventListener('DOMContentLoaded', updateNavigation);

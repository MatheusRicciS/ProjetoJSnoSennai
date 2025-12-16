const btn = document.getElementById('btnMenu');
const sidebar = document.getElementById('sidebar');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
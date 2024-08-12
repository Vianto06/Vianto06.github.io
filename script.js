// Script ini bisa digunakan untuk animasi tambahan atau interaktivitas
// Contoh: Menambahkan animasi scroll ke section yang di-klik
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

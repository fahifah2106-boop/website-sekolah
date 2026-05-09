function pesan() {
    // Menambahkan efek visual pada tombol saat diklik
    const btn = document.getElementById('mainButton');
    btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        btn.style.transform = '';
        alert("Selamat! Deployment CI/CD SMK TI berhasil dijalankan.");
    }, 100);
}

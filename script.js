function pesan() {
    // Menambahkan efek visual pada tombol saat diklik
    const btn = document.getElementById('mainButton');
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            btn.style.transform = '';
            alert("Halo! Terima kasih telah mengunjungi website SMK Teknologi Indonesia.");
        }, 100);
    }
}

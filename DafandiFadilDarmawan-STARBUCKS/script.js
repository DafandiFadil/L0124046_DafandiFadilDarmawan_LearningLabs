// Fungsi untuk toggle tema
function toggleTheme() {
    // Cek apakah tema gelap sudah aktif
    const body = document.body;
  
    // Jika mode gelap aktif, matikan mode gelap
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light"); // Menyimpan tema terang
    } else {
      // Aktifkan mode gelap
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark"); // Menyimpan tema gelap
    }
  }
  
  // Memastikan tema dipertahankan saat halaman dimuat ulang
  window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  };
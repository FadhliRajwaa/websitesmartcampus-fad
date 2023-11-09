// Fungsi untuk mengubah tema
function toggleDarkMode() {
    const themeElement = document.getElementById("theme");

    // Cek apakah tombol switch diaktifkan
    if (document.getElementById("flexSwitchCheckDefault").checked) {
      // Aktifkan dark mode
      themeElement.classList.add("bg-dark");
      themeElement.classList.add("text-light");
    } else {
      // Matikan dark mode
      themeElement.classList.remove("bg-dark");
      themeElement.classList.remove("text-light");
    }
  }

  // Tangani perubahan toggle switch
  document
    .getElementById("flexSwitchCheckDefault")
    .addEventListener("change", toggleDarkMode);

  // Inisialisasi tema berdasarkan status toggle switch saat halaman dimuat
  toggleDarkMode();
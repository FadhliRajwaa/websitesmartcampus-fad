// Ambil semua elemen dengan class "portfolio-item"
const portfolioItems = document.querySelectorAll(".portfolio-item");
const fullscreenDescriptions = document.querySelectorAll(".fullscreen-description");
const closeIcons = document.querySelectorAll(".fas.fa-times.close-description"); // Tambahkan ini

// Loop melalui setiap elemen "portfolio-item"
portfolioItems.forEach((portfolioItem, index) => {
  const searchIcon = portfolioItem.querySelector(".fas.fa-search");

  // Tambahkan event listener untuk menampilkan ikon saat dihover
  portfolioItem.addEventListener("mouseenter", () => {
    searchIcon.style.display = "flex";
  });

  // Tambahkan event listener untuk menyembunyikan ikon saat tidak dihover
  portfolioItem.addEventListener("mouseleave", () => {
    searchIcon.style.display = "none";
  });

  // Tambahkan event listener untuk menampilkan deskripsi gambar saat ikon pencarian diklik
  searchIcon.addEventListener("click", () => {
    // Tampilkan deskripsi gambar dalam mode layar penuh
    fullscreenDescriptions[index].classList.add("active");
  });
});

// Loop melalui setiap ikon close
closeIcons.forEach((closeIcon, index) => {
  closeIcon.addEventListener("click", () => {
    // Sembunyikan deskripsi gambar saat ikon close diklik
    fullscreenDescriptions[index].classList.remove("active");
  });
});

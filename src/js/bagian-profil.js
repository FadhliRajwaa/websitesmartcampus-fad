alert(` Selamat Datang Di Smart Campus Unisbank`);
alert(`Dibuat Oleh Fadhli Ganteng ><`);

// Mendapatkan referensi ke tombol "scroll-button"
const scrollButton = document.getElementById("scroll-button");

// Menambahkan event listener untuk menangani klik pada tombol
scrollButton.addEventListener("click", function () {
  // Mendapatkan elemen tujuan yang ingin di-scroll
  const formElement = document.getElementById("form");

  // Menjalankan perintah scrollIntoView untuk menggulirkan elemen tujuan ke dalam tampilan
  formElement.scrollIntoView({ behavior: "smooth" });
});


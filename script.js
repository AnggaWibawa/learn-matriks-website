AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed("#answer", {
    strings: ["Sebenarnya...", "Cukup Mudah!"],
    typeSpeed: 70, // Kecepatan ketikan dalam milidetik
    backSpeed: 35, // Kecepatan penghapusan teks
    loop: true, // Mengulang teks setelah selesai
  });
});

// Mendapatkan semua elemen box, sections, dan tombol close
const boxes = document.querySelectorAll(".box");
const sections = document.querySelectorAll("section[data-section]");
const closeButtons = document.querySelectorAll(".close-btn");

// Menambahkan event listener ke setiap box untuk membuka section
boxes.forEach((box) => {
  box.addEventListener("click", function (event) {
    event.preventDefault();

    // Mendapatkan kategori yang sesuai dengan box yang diklik
    const category = box.getAttribute("data-category");

    // Menonaktifkan semua section
    sections.forEach((section) => section.classList.remove("active"));

    // Menampilkan section yang sesuai
    const targetSection = document.querySelector(
      `section[data-section="${category}"]`
    );
    targetSection.classList.add("active");
  });
});

// Menambahkan event listener ke setiap tombol silang untuk menutup section
closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Menonaktifkan semua section
    sections.forEach((section) => section.classList.remove("active"));
  });
});

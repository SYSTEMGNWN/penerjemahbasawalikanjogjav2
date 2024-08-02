// Fungsi untuk mengaktifkan atau menonaktifkan mode gelap
function toggleDarkMode() {
    const body = document.body;
    const modeToggle = document.getElementById("mode-toggle1");


    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        modeToggle.textContent = "Mode Gelap";
        modeToggle.style.backgroundColor = "#000";
        modeToggle.style.color = "#fff";
    } else {
        body.classList.add("dark-mode");
        modeToggle.textContent = "Mode Terang";
        modeToggle.style.backgroundColor = "#fff";
        modeToggle.style.color = "#000";
    }
}
// Menambahkan event listener untuk tombol mode gelap
document.getElementById("mode-toggle1").addEventListener("click", toggleDarkMode);

// Fungsi untuk menerjemahkan kata
function terjemahanKata() {
    let e = document.getElementById("kata").value,
        t = document.getElementById("hasil"),
        a = ["h", "n", "c", "r", "k"],
        n = ["d", "t", "s", "w", "l"],
        l = ["p", "dh", "j", "y", "ny"],
        i = ["m", "g", "b", "th", "ng"],
        s = "",
        d = "",
        o = "",
        m = "",
        u = "",
        c = "",
        r = "",
        g = "";

    e = e.toLowerCase();
    let p = e.split("");

    for (let $i = 0; $i < p.length; $i++) {
        d = a.indexOf(p[$i].toLowerCase());
        o = n.indexOf(p[$i].toLowerCase());
        m = l.indexOf(p[$i].toLowerCase());
        u = i.indexOf(p[$i].toLowerCase());
        c = e.slice($i, $i + 2);
        r = l.indexOf(c);
        g = i.indexOf(c);

        if (r >= 0) {
            s += a[r];
            $i += 1;
        } else if (g >= 0) {
            s += n[g];
            $i += 1;
        } else {
            s += d >= 0 ? l[d] :
                o >= 0 ? i[o] :
                m >= 0 ? a[m] :
                u >= 0 ? n[u] :
                p[$i];
        }
    }
    t.value = s;
}

// Fungsi untuk menyalin teks
function salinTeks() {
    let e = document.getElementById("hasil"),
        t = document.getElementById("hasil").value;

    if (t === "" || t == null) {
        document.getElementById("hasilSalin").innerHTML = '<span class="salinKataNo">Anda belum mengetik apa pun!</span>';
    } else {
        e.select();
        e.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(e.value);
        document.getElementById("hasilSalin").innerHTML = '<span class="salinKata">Teks disalin ke papan klip.</span>';
    }
}

// Event listener untuk terjemahan otomatis saat mengetik
document.getElementById("kata").onkeyup = function() {
    terjemahanKata();
};

// Event listener untuk tombol salin
document.getElementById("salin").onclick = function() {
    salinTeks();
};

// Event listener untuk tombol hapus
let hapusKata = document.getElementById("kata"),
    hapusHasilKata = document.getElementById("hasil"),
    btn = document.getElementById("hapus");

btn.addEventListener("click", () => {
    hapusKata.value = "";
    hapusHasilKata.value = "";
    document.getElementById("hasilSalin").innerHTML = "";
});

// Mengganti kelas tema berdasarkan pilihan radio
document.addEventListener("DOMContentLoaded", function() {
    let html = document.documentElement;  // Pilih elemen html
    let radios = document.getElementsByName('themes'); 

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Hapus kelas tema sebelumnya
            html.classList.remove('light-theme', 'dark-theme', 'black-theme');
            // Tambahkan kelas tema yang dipilih
            html.classList.add(this.id);
        });
    });
});

// Menyembunyikan elemen yang tidak diperlukan
document.getElementById("artikelTerkait")?.remove();
document.querySelector(".tanggalKomentar")?.remove();

// Menyembunyikan atau menghapus elemen dengan ID tertentu jika ada
document.querySelectorAll("[id^='artikelTerkait']").forEach(el => el.remove());
document.querySelectorAll(".tanggalKomentar").forEach(el => el.remove());

// Mengganti ikon dengan feather icons
feather.replace();

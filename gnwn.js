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

// Fungsi untuk mengaktifkan atau menonaktifkan mode gelap
function toggleDarkMode() {
    var body = document.body;
    var modeToggle = document.getElementById("mode-toggle");

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

// Fungsi untuk menyalin teks
function salinTeks() {
    let e = document.getElementById("hasil"),
        t = document.getElementById("hasil").value;
    
    if (t === "" || t === null) {
        document.getElementById("hasilSalin").innerHTML = '<span class="salinKataNo">Anda belum mengetik apa pun.</span>';
    } else {
        e.select();
        e.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(e.value);
        document.getElementById("hasilSalin").innerHTML = '<span class="salinKata">Teks disalin ke papan klip!</span>';
    }
}

// Event listeners
document.getElementById("kata").onkeyup = function() {
    terjemahanKata();
};

document.getElementById("salin").onclick = function() {
    salinTeks();
};

let hapusKata = document.getElementById("kata"),
    hapusHasilKata = document.getElementById("hasil"),
    btn = document.getElementById("hapus");

btn.addEventListener("click", () => {
    hapusKata.value = "";
    hapusHasilKata.value = "";
});

// Menambahkan event listener untuk tombol mode gelap
document.getElementById("mode-toggle").addEventListener("click", toggleDarkMode);

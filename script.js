const muhurBtn = document.getElementById("muhur-btn");
const zarfSahne = document.getElementById("zarf-sahne");
const kartSahne = document.getElementById("kart-sahne");
const detaySahne = document.getElementById("detay-sahne");

muhurBtn.addEventListener("click", function() {
    // 1. Zarf sahnesini yumuşakça kaybet
    zarfSahne.style.opacity = "0";
    
    setTimeout(() => {
        zarfSahne.classList.remove("aktif");
        
        // 2. Kart sahnesini aç ve büyütme animasyonunu tetikle
        kartSahne.classList.add("aktif");
        
        // Detayları da görünürlük moduna al ama henüz tam opak yapma
        detaySahne.style.display = "block";
        
        // 3. Kart açıldıktan hemen sonra detayları ve kaydırma iznini ver
        setTimeout(() => {
            detaySahne.style.opacity = "1";
            document.body.style.overflowY = "auto";
        }, 600);
        
    }, 500);
});

// Geri Sayım Sayacı (14 Kasım 2026)
const hedefTarih = new Date("November 14, 2026 19:00:00").getTime();
const sayac = setInterval(() => {
    const simdi = new Date().getTime();
    const fark = hedefTarih - simdi;

    const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
    const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
    const saniye = Math.floor((fark % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = gun < 10 ? "0" + gun : gun;
    document.getElementById("hours").innerText = saat < 10 ? "0" + saat : saat;
    document.getElementById("minutes").innerText = dakika < 10 ? "0" + dakika : dakika;
    document.getElementById("seconds").innerText = saniye < 10 ? "0" + saniye : saniye;

    if (fark < 0) {
        clearInterval(sayac);
        document.getElementById("countdown").innerHTML = "<h3>O Büyük Gün Geldi! 🎉</h3>";
    }
}, 1000);

document.getElementById("rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Katılım durumunuz başarıyla iletildi, teşekkür ederiz! 🎉");
    this.reset();
});

const muhurBtn = document.getElementById("muhur-btn");
const zarfSahne = document.getElementById("zarf-sahne");
const detaySahne = document.getElementById("detay-sahne");

muhurBtn.addEventListener("click", function() {
    // 1. Zarf açılma ve kartın yukarı fırlama animasyonunu başlat
    zarfSahne.classList.add("zarf-acildi");
    
    // 2. Kart havada süzülürken detay sahnesini arka planda hazırla
    setTimeout(() => {
        detaySahne.style.display = "block";
        
        // 3. Zarf sahnesini yumuşakça erit, detayları görünür yap
        setTimeout(() => {
            zarfSahne.style.opacity = "0";
            detaySahne.style.opacity = "1";
            
            // Ekranı detaylara pürüzsüzce kaydır
            detaySahne.scrollIntoView({ behavior: "smooth" });
        }, 100);
        
    }, 2200); // Kart fırladıktan tam 2.2 saniye sonra geçiş yap
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

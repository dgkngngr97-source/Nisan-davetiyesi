// HTML Elemanları
const muhurBtn = document.getElementById("muhur-btn");
const zarfSahne = document.getElementById("zarf-sahne");
const detaySahne = document.getElementById("detay-sahne");

// 1. Mühür Tıklandığında Zarfı Aç ve Diğer Sahneye Akışı Başlat
muhurBtn.addEventListener("click", function() {
    // Zarf açılma sınıfını ekle (CSS tetiklenir)
    zarfSahne.classList.add("zarf-acildi");
    
    // Zarf açılıp kart yukarı fırladıktan sonra (yaklaşık 3 saniye sonra) detay alanını göster
    setTimeout(() => {
        detaySahne.style.display = "block";
        
        // Ekranı pürüzsüzce detayların başladığı yere kaydır
        detaySahne.scrollIntoView({ behavior: "smooth" });
    }, 2800);
});

// 2. Geri Sayım Sayacı (14 Kasım 2026)
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

// Form Gönderme Bildirimi
document.getElementById("rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Katılım durumunuz başarıyla iletildi, teşekkür ederiz! 🎉");
    this.reset();
});

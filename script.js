const muhurBtn = document.getElementById("muhur-btn");
const zarfSahne = document.getElementById("zarf-sahne");
const detaySahne = document.getElementById("detay-sahne");

muhurBtn.addEventListener("click", function() {
    zarfSahne.classList.add("zarf-acildi");
    
    setTimeout(() => {
        detaySahne.style.display = "block";
        
        setTimeout(() => {
            zarfSahne.style.opacity = "0";
            detaySahne.style.opacity = "1";
            detaySahne.scrollIntoView({ behavior: "smooth" });
        }, 100);
        
    }, 2500); 
});

// Tüm tarayıcılarda (Safari/iPhone dahil) hatasız çalışan evrensel ISO formatı
const hedefTarih = new Date("2026-11-14T19:00:00").getTime();

const sayac = setInterval(() => {
    const simdi = new Date().getTime();
    const fark = hedefTarih - simdi;

    const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
    const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
    const saniye = Math.floor((fark % (1000 * 60)) / 1000);

    // Güncelleme yaparken elementlerin varlığını kontrol et (Hata önleyici)
    if(document.getElementById("days")) {
        document.getElementById("days").innerText = gun < 10 ? "0" + gun : gun;
        document.getElementById("hours").innerText = saat < 10 ? "0" + saat : saat;
        document.getElementById("minutes").innerText = dakika < 10 ? "0" + dakika : dakika;
        document.getElementById("seconds").innerText = saniye < 10 ? "0" + saniye : saniye;
    }

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

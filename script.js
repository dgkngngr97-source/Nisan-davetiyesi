// Doğukan & Ege Nişan Tarihi: 14 Kasım 2026 19:00
const targetDate = new Date("November 14, 2026 19:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Zaman hesaplamaları
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // HTML elemanlarını güncelleme (Sayılar 10'dan küçükse başına 0 ekler)
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Süre bittiğinde sayacı durdur ve mesaj yaz
    if (difference < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h3 style='width:100%; text-align:center;'>O Büyük Gün Geldi! 🎉</h3>";
    }
}, 1000);

// Form Gönderme Bildirimi (Şimdilik test amaçlı alert verir)
document.getElementById("rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Katılım durumunuz başarıyla kaydedildi. Teşekkür ederiz! 🎉");
    this.reset();
});

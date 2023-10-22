function hitungTotalBayar() {
    const hargaTiket = parseFloat(document.getElementById("harga").value);
    const jumlahTiket = parseInt(document.getElementById("jumlah").value);
    const isMember = document.getElementById("member").checked;

    const diskon = isMember ? (hargaTiket * jumlahTiket * 0.1) : 0;

    const totalBayar = hargaTiket * jumlahTiket - diskon;

    document.getElementById("diskon").value = diskon;
    document.getElementById("total").value = totalBayar;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
    });

    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener("click", function() {
        const randomTicketCode = generateRandomTicketCode();
        
        alert("Pesanan Anda berhasil, berikut kode tiket: " + randomTicketCode);
    });
});

function generateRandomTicketCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return code;
}

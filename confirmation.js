document.addEventListener("DOMContentLoaded", function() {
    // Ambil data dari localStorage
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const gender = localStorage.getItem("gender");
    const address = localStorage.getItem("address");

    // Tampilkan data di halaman
    document.getElementById("confirmationMessage").innerHTML = `
        <h3>Pendaftaran Berhasil</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Umur:</strong> ${age}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Alamat:</strong> ${address}</p>
    `;

    // Bersihkan data dari localStorage setelah ditampilkan
    localStorage.clear();
});

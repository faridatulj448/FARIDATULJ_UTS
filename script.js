document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman langsung

    // Ambil data dari input
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;

    // Simpan data di localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("address", address);

    // Arahkan ke halaman konfirmasi
    window.location.href = "confirmation.html";
});

function validasi() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    if ((email === "digitalent@gmail.com") && (password === "dts2020")) {
        alert("Selamat!, Anda telah Berhasil Login !");
    } else {
        alert("Maaf,  Email atau Password Salah !");
    }
};
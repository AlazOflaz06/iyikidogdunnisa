function checkPassword(){
    var pass = document.getElementById("password").value;
    var message = document.getElementById("loginMessage");

    if(pass === "nisa"){
        message.innerHTML = "Girişiniz onaylanmıştır Nisa Hanım doğum gününüz kutlu olsun.";
        setTimeout(function(){
            window.location.href = "anasayfa.html";
        },2000);
    } else {
        message.innerHTML = "Yanlış şifre!";
    }
}

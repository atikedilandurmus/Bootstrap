function checkLogin() {


    var isLogin = sessionStorage.getItem("isLogin");

    var user = sessionStorage.getItem("user");
    user = user.split(",");
    var username = user[0];

    if (isLogin == "true") {

        document.getElementById("btndiv").style.display = "none";
        document.getElementById("header_sag").innerHTML = "<i class='fa-regular fa-user'  aria-hidden='true'></i> &nbsp;" + username + "  &nbsp; " ;

        document.getElementById("logout_btn").style.display = "block";
    }
}

function logOut() {
    var isLogin = sessionStorage.getItem("isLogin");
    isLogin = false;
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logouy_btn").style.display = "none";
    location.reload();
}
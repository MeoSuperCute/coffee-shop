var eye = document.getElementById("eye");
var password = document.getElementById("password");
eye.addEventListener("click",()=>{
    if (password.getAttribute("type") == "password") {
        password.setAttribute("type", "text");
        eye.setAttribute("name", "eye-off-outline");
    }
    else {
        password.setAttribute("type", "password");
        eye.setAttribute("name", "eye-outline");
    }
});

var submit = document.getElementById("submit");
submit.addEventListener("click", (event)=>{ //thêm event để tránh reload form
    event.preventDefault();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && 
        storedData.email === email && //.email để trỏ vào case email để trích xuất email đã lưu trên localStorage
        storedData.password === password
    )
    {
        success();
    }
    else {
        error();
    }
})

function success() {
    swal({
        title: "Good job!",
        text: "Login Success",
        icon: "success",
        button: "Continue",
    })
    .then(()=> {
        window.location.href = "main.html";
    });
};

function error() {
    swal({
        title: "Oh no",
        text: "Email or password is not correct",
        icon: "error",
        button: "Try again",
    })
};


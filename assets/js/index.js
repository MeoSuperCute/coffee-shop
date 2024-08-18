//lay element
var btnclick = document.getElementById("addCart");
console.log(muaHang)




function muaHang() {
    swal({
        title: "Xin chúc mừng!",
        text: "xyz",
        icon: "success",
        button: "Ok",
      });
}
btnclick.addEventListener("click",function(){
    muaHang();
})
// su dung vong lap while

// function kiemTra() {
//   var nhapSo = Number(document.getElementById("nhapSNT").value);

//   // out

//   var ketQua = "";
//   var giaTri = 1;

//   while (giaTri <= nhapSo) {
//     ketQua = ketQua + "*";
//     giaTri++;
//   }
//   document.getElementById("ketQua5").innerHTML = ketQua;
// }
// document.getElementById("btn-kiem-tra").addEventListener("click", kiemTra);

// su dung vong lap for

function kiemTra() {
  var nhapSo = Number(document.getElementById("nhapSNT").value);

  // out

  var ketQua = "";

  for (var giaTri = 1; giaTri <= nhapSo; giaTri++) {
    ketQua = ketQua + "*";
  }
  document.getElementById("ketQua5").innerHTML = ketQua;
}
document.getElementById("btn-kiem-tra").addEventListener("click", kiemTra);

// VI DU 7 :Cho phep nguoi dung nhap vao so hang va so cot bat ky. Sau do in ra so ngoi sao tuong ung cua hang va cot

function xepHinh() {
  var soHang = Number(document.getElementById("soHang").value);
  var soCot = Number(document.getElementById("soCot").value);

  var kiemTra = "";

  // xu ly
  for (h = 1; h <= soHang; h++) {
    for (var c = 1; c <= soCot; c++) {
      kiemTra += "*";
    }
    kiemTra += `<br>`;
  }

  // xuat ra man hinh

  document.getElementById("ketQua7").innerHTML = kiemTra;
}

document.getElementById("btn-xep-hinh").addEventListener("click", xepHinh);

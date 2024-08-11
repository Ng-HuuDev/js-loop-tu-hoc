// Ham vong lap : while

// Cac yeu to xac dinh bai toan lap: logic lap di lap lai 1 cach tu dong thi do la bai toan lap

// Cach Lam:

/**
 * Buoc 1: Xac dinh yeu to thay doi  (khoi tao bien )
 * Buoc 2: Thiet lap dieu kien
 * Buoc 3: Cai dat khoi xu ly
 * Buoc 4: Thay doi gia tri cua bien buoc nhay
 *
 *
 * */

function inRa() {
  var input = Number(document.getElementById("iSo").value);

  var output = "";
  var dem = 1;

  while (dem <= input) {
    var inRa = " Nguyen Huu";
    output += inRa;
    dem++;
  }
  document.getElementById("ketQua").innerHTML = output;
}

document.getElementById("btnInTheDiv").addEventListener("click", inRa);

//  VI DU 2: cho nguoi dung nhap 1 so tinh giai thua cua so do
/**
 * Buoc 1: Xac dinh yeu to thay doi  (khoi tao bien )
 * Buoc 2: Thiet lap dieu kien
 * Buoc 3: Cai dat khoi xu ly
 * Buoc 4: Thay doi gia tri cua bien buoc nhay
 *
 *
 * */

function tinhToan() {
  // input
  var nhapSo = Number(document.getElementById("nhapSo").value);

  //   output: tinh giai thua
  var giaiThua = 1;
  // B1: Xac dinh yeu to thay doi - khoi tao bien
  var giaTri = 1;
  // b2 : Thiet lap dieu kien
  while (giaTri <= nhapSo) {
    // B3: Xu ly
    // giaiThua = giaTri * giaTri;
    giaiThua *= giaTri;

    //b4:  thay doi dieu kien lap

    giaTri++;
  }
  document.getElementById("ketQua2").innerHTML = giaiThua;
}

document.getElementById("tinhGiaiThua").addEventListener("click", tinhToan);

// VI DU3:Cho phep nguoi dung nhap vao 1 so bat ky tinh. tinh tong tu 1 - n

function tinhTong() {
  // input
  var nhapSo = Number(document.getElementById("nhapSoBatKy").value);

  // output

  var tinhTong = 0;

  var giaTri = 0;

  while (giaTri <= nhapSo) {
    tinhTong += giaTri;
    giaTri++;
  }
  document.getElementById("ketQua3").innerHTML = tinhTong;
}
document.getElementById("btn-tinh-toan").addEventListener("click", tinhTong);

// VI DU 4:Cho phep nguoi dung nhap vao 1 so bat ky tinh. tinh tong tu 1 - n. Tinh tong cac so chan

function tinhTongChan() {
  // in
  var nhapSo = Number(document.getElementById("nhapSoBK").value);
  // out
  var tingTong = 0;
  var tongChan = 0;
  var count = 0;

  // xu ly
  while (count <= nhapSo) {
    tingTong += count;
    count++;
    if (count <= nhapSo && count % 2 == 0) {
      tongChan += count;
      // count++;
    }
  }

  document.getElementById("ketQua4").innerHTML = `${tingTong} va ${tongChan}`;
}
document
  .getElementById("btn-tinh-tong")
  .addEventListener("click", tinhTongChan);

//    VI DU 5:Cho phep nguoi dung nhap vao 1 so bat ky tinh. Cho biet so do co phai la so nguyen to hay ko

function kiemTraSo() {
  // in
  var nhapSo = Number(document.getElementById("nhapSNT").value);

  // out
  var kiemTraSo = "";
  var giaTri = 1;
  var dem = 0; // dung de dem so lan chia het

  // xu ly

  while (giaTri <= nhapSo) {
    if (nhapSo % giaTri == 0) {
      dem++;
    }
    giaTri++;
    if (dem == 2) {
      kiemTraSo = "la so nguyen to";
    } else {
      kiemTraSo = "khong la so nguyen to";
    }
  }
  document.getElementById("ketQua5").innerHTML = kiemTraSo;
}

document.getElementById("btn-kiem-tra").addEventListener("click", kiemTraSo);

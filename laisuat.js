function laisuat() {
    var tienvay = parseInt(document.forms["laisuatform"]["tienvay"].value);
    var sonam = parseInt(document.forms["laisuatform"]["sonam"].value);
    var tongtien = tienvay + tienvay * 0.069 * sonam;
    document.getElementById("tongtien").innerHTML="Tổng số tiền phải trả của khoản vay " + tienvay + " triệu đồng cho " + sonam + " năm là " + tongtien + " triệu đồng";
}
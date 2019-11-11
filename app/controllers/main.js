var quanlyTk = new quanLyTaiKhoan();
getThongTinTK()

getID("btnThemNguoiDung").addEventListener("click", function() {
    var title = "Thêm Tài Khoản Mới";
    var button = `
    <button class="btn btn-info" onClick="themMoiTK()">Thêm mới </button>
    <button class="btn btn-danger" data-dismiss="modal">Đóng Lại </button>

    `;
    document.getElementsByClassName("modal-title")[0].innerHTML = title;
    document.getElementsByClassName("modal-footer")[0].innerHTML = button;

})

function getThongTinTK() {

    quanlyTk.layThongTinTaiKhoan()
        .then(function(ketqua) {
            console.log(ketqua.data);
            renderBang(ketqua.data);
        }).catch(function(loi) {
            console.log(loi);
        })

}

function themMoiTK() {
    var taiKhoan1 = getID("TaiKhoan").value;
    var hoTen = getID("HoTen").value;
    var matKhau = getID("MatKhau").value;
    var email = getID("Email").value;
    var soDT = getID("SoDienThoai").value;
    var tk = new taiKhoan(taiKhoan1, matKhau, hoTen, email, soDT);
    quanlyTk.themThongTinTaiKhoan(tk)
        .then(function(ketqua) {
            console.log(ketqua.data);
            getThongTinTK()
        })
        .catch(function(loi) {
            console.log(loi);

        })
}

function xoaThongTinTaiKhoan(id) {
    quanlyTk.xoaThongTinTaiKhoan(id)
        .then(function(ketqua) {
            getThongTinTK();
        })
        .catch(function(loi) {
            alert("sai roi");
        })
}

function suaThongTinTaiKhoan(id) {
    var title = "Cập Nhật Tài Khoản Mới";
    var footer = `
    <button class="btn btn-success" onclick="capNhatThongTinTK(${id})">Cập nhật</button>
    <button class="btn btn-danger" data-dismiss="modal">Đóng Lại </button>

  `;
    document.getElementsByClassName("modal-title")[0].innerHTML = title;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
    quanlyTk.chonTaiKhoan(id).then(function(ketqua) {
        getID("TaiKhoan").value = ketqua.data.taikhoan;
        getID("HoTen").value = ketqua.data.hoten;
        getID("MatKhau").value = ketqua.data.matkhau;
        getID("Email").value = ketqua.data.matkhau;
        getID("SoDienThoai").value = ketqua.data.sodienthoai;

    })


}

function capNhatThongTinTK(id) {
    var taiKhoan1 = getID("TaiKhoan").value;
    var hoTen = getID("HoTen").value;
    var matKhau = getID("MatKhau").value;
    var email = getID("Email").value;
    var soDT = getID("SoDienThoai").value;
    var tk = new taiKhoan(taiKhoan1, matKhau, hoTen, email, soDT);
    quanlyTk.capNhatThongTinTaiKhoan(id, tk)
        .then(function(ketqua) {
            console.log(ketqua.data);
            getThongTinTK()
        })
        .catch(function(loi) {
            console.log(loi);

        })
}

function renderBang(mangTaiKhoan) {
    var connetBang = "";
    mangTaiKhoan.map(function(item, index) {
        connetBang += `
        <tr>
        <td>${index + 1}</td>
        <td>${item.taikhoan}</td>
        <td>${item.matkhau}</td>
        <td>${item.hoten}</td>

        <td>${item.email}</td>
        <td>${item.sodienthoai}</td>

        <td>
          <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="suaThongTinTaiKhoan(${item.id})">Sửa</button>
          <button class="btn btn-danger" onclick="xoaThongTinTaiKhoan(${
            item.id
          })">Xóa</button>
        </td>
    </tr>
        
        
        
        `

    });
    getID("tblDanhSachTaiKhoan").innerHTML = connetBang;


}























function getID(id) {
    return document.getElementById(id);
}
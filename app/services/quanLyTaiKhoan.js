function quanLyTaiKhoan() {
    this.layThongTinTaiKhoan = function() {

        return axios({
            method: "GET",
            url: "http://5dbacb9b3ec5fb00143193dc.mockapi.io/api/quanLy"

        })

    };
    this.themThongTinTaiKhoan = function(quanLy) {
        return axios({
            method: "POST",
            url: "http://5dbacb9b3ec5fb00143193dc.mockapi.io/api/quanLy",
            data: quanLy
        })
    };
    this.capNhatThongTinTaiKhoan = function(id, quanLy) {
        return axios({
            method: "PUT",
            url: `http://5dbacb9b3ec5fb00143193dc.mockapi.io/api/quanLy/${id}`,
            data: quanLy
        })
    };
    this.xoaThongTinTaiKhoan = function(id) {
        return axios({
            method: "DELETE",
            url: `http://5dbacb9b3ec5fb00143193dc.mockapi.io/api/quanLy/${id}`
        })
    }
    this.chonTaiKhoan = function(id) {
        return axios({
            method: "GET",
            url: `http://5dbacb9b3ec5fb00143193dc.mockapi.io/api/quanLy/${id}`

        })
    }


};
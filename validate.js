document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Lấy giá trị của các trường
    var ho = document.getElementById('ho').value.trim();
    var ten = document.getElementById('ten').value.trim();
    var soDienThoai = document.getElementById('soDienThoai').value.trim();

    // Kiểm tra họ và tên
    if (ho === "") {
        alert("Vui lòng nhập họ.");
        event.preventDefault();  // Ngăn không gửi form
        return;
    }

    if (ten === "") {
        alert("Vui lòng nhập tên.");
        event.preventDefault();  // Ngăn không gửi form
        return;
    }

    // Kiểm tra số điện thoại (phải là số và có độ dài 10 ký tự)
    if (soDienThoai === "" || !/^\d{10}$/.test(soDienThoai)) {
        alert("Vui lòng nhập số điện thoại hợp lệ (10 chữ số).");
        event.preventDefault();  // Ngăn không gửi form
        return;
    }

    // Nếu tất cả điều kiện đều đúng, form sẽ được gửi đi
});

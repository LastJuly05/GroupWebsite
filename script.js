function openWeek(evt, weekName) {
    var i, tabcontent, tablinks;

    // Ẩn tất cả nội dung của các tab
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Xóa lớp 'active' khỏi tất cả các tab
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Hiển thị tab hiện tại và thêm lớp 'active' cho nút đã được nhấp
    document.getElementById(weekName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Hiển thị nội dung của tuần đầu tiên khi trang được tải
document.getElementById("week1").style.display = "block";

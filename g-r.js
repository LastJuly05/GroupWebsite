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
document.querySelector(".tab-link").click();

function updateProgressBar(progressBar, percentage) {
  const progressFill = progressBar.querySelector(".progress-fill");
  const progressText = progressBar.querySelector(".progress-text");

  // Đặt chiều rộng thanh tiến trình
  progressFill.style.width = `${percentage}%`;

  // Đặt màu sắc dựa trên giá trị phần trăm
  if (percentage <= 10) {
    progressFill.style.backgroundColor = "red";
  } else if (percentage <= 50) {
    progressFill.style.backgroundColor = "yellow";
  } else {
    progressFill.style.backgroundColor = "green";
  }

  // Cập nhật phần trăm hiển thị
  progressText.textContent = `${percentage}%`;
}

// Thay đổi phần trăm ở đây để kiểm tra
// const progressBar = document.getElementById('progressBar');
// updateProgressBar(progressBar, 0);

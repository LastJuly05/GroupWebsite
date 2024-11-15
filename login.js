// Hiển thị modal đăng nhập
function openLoginModal() {
  const modal = document.getElementById("login-modal");
  const backgroundElements = document.querySelectorAll(
    "body > *:not(#login-modal)"
  );

  // Hiển thị modal
  modal.style.display = "flex";

  // Thêm hiệu ứng mờ cho các phần tử phía sau modal
  backgroundElements.forEach((element) => {
    element.classList.add("blur-background");
  });

  // Hiển thị form đăng nhập mặc định
  showLoginForm();

  // Đặt focus vào input đầu tiên của modal
  modal.querySelector("input").focus();
}

// Đóng modal đăng nhập
function closeLoginModal() {
  const modal = document.getElementById("login-modal");
  const backgroundElements = document.querySelectorAll(
    "body > *:not(#login-modal)"
  );

  // Ẩn modal
  modal.style.display = "none";

  // Xóa hiệu ứng mờ của các phần tử phía sau modal
  backgroundElements.forEach((element) => {
    element.classList.remove("blur-background");
  });

  // Điều hướng về trang index
  window.location.href = "index.html";
}

// Hiển thị form đăng nhập
function showLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "none";
}

// Hiển thị form đăng ký
function showRegistrationForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("registration-form").style.display = "block";
  document.getElementById("forgot-password-form").style.display = "none";
}

// Hiển thị form quên mật khẩu
function showForgotPasswordForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "block";
}

// Xử lý gửi form đăng nhập
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username && password) {
    alert("Login successful!");
    closeLoginModal();
  } else {
    alert("Please fill in both username/email and password.");
  }
}

// Xử lý gửi form đăng ký
function handleRegistration(event) {
  event.preventDefault();
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (username && email && password) {
    alert("Registration successful!");
    closeLoginModal();
  } else {
    alert("Please fill in all fields.");
  }
}

// Xử lý gửi form quên mật khẩu
function handleForgotPassword(event) {
  event.preventDefault();
  const username = document.getElementById("forgot-username").value;

  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^[0-9]{10,11}$/;

  if (emailRegex.test(username) || phoneRegex.test(username)) {
    alert("Password reset instructions sent to " + username);
    closeLoginModal();
  } else {
    alert("Please enter a valid email or phone number.");
  }
}

// Đóng modal khi click ra ngoài modal
window.addEventListener("click", function (event) {
  const modal = document.getElementById("login-modal");
  if (event.target === modal) {
    closeLoginModal();
  }
});

// Mở modal khi trang tải
window.onload = openLoginModal;

// Lấy các phần tử
const loginBtn = document.querySelector(".login-btn");
const signUpBtn = document.querySelector(".signup-btn");
const overlay = document.getElementById("overlay");

// Các phần tử của modal
const loginModal = document.getElementById("loginModal");
const signUpModal = document.getElementById("signUpModal");

// Lấy liên kết "Sign up now" trong modal đăng nhập
const signUpLink = document.getElementById("signUpLink");

// Khi nhấn vào nút Login, mở modal đăng nhập và overlay
loginBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  loginModal.classList.add("active");
});

// Khi nhấn vào nút Sign Up, mở modal đăng ký và overlay
signUpBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  signUpModal.classList.add("active");
});

// Khi nhấn vào liên kết "Sign up now" trong modal đăng nhập, mở modal đăng ký
signUpLink.addEventListener("click", (event) => {
  event.preventDefault();
  loginModal.classList.remove("active");
  signUpModal.classList.add("active");
  overlay.classList.add("active");
});

// Khi nhấn vào overlay, đóng cả hai modal và ẩn overlay
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  loginModal.classList.remove("active");
  signUpModal.classList.remove("active");
});
/// Mở modal đăng nhập khi nhấn "Already have an account? Login" trong modal đăng ký
document.querySelector(".login-link").addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn hành động mặc định của liên kết

  // Đóng modal đăng ký và mở modal đăng nhập
  signUpModal.classList.remove("active"); // Đóng modal đăng ký
  loginModal.classList.add("active"); // Mở modal đăng nhập
  overlay.classList.add("active"); // Hiển thị overlay nếu cần
});

// Danh sách tài khoản mẫu
const accounts = [
  { username: "user1", password: "password123" },
  { username: "user2", password: "pass456" },
  { username: "admin", password: "adminpass" },
];

// Xử lý đăng nhập
function handleLogin(event) {
  event.preventDefault(); // Ngăn hành động mặc định của form

  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  // Tìm tài khoản khớp với tên đăng nhập và mật khẩu
  const account = accounts.find(
    (acc) => acc.username === usernameInput && acc.password === passwordInput
  );

  if (account) {
    alert("Login successful!");
    // Thực hiện logic tiếp theo sau khi đăng nhập thành công (chuyển trang, lưu token, v.v.)
  } else {
    alert("Login failed. Incorrect username or password.");
  }
}

// Xử lý đăng ký
document
  .querySelector("#signUpModal .contact-form button[type='submit']")
  .addEventListener("click", (event) => {
    event.preventDefault();
    handleSignUp(event);
  });

function handleSignUp(event) {
  const username = document
    .querySelector("#signUpModal input[placeholder='Username']")
    .value.trim();
  const email = document
    .querySelector("#signUpModal input[placeholder='Email']")
    .value.trim();
  const password = document
    .querySelector("#signUpModal input[placeholder='Password']")
    .value.trim();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!username || !email || !password) {
    alert("All fields are required!");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
  }

  alert("Sign up successful!");
  // Thực hiện logic đăng ký thêm ở đây
}

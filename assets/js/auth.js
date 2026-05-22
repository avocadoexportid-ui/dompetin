import { apiRequest } from "./api.js";

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await apiRequest(
      "/auth/login",
      "POST",
      {
        email,
        password
      }
    );

    if (response.token) {
      localStorage.setItem("token", response.token);

      window.location.href = "dashboard.html";
    }
  });
}

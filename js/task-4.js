const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = loginForm.elements.email.value.trim();
  const passwordInput = loginForm.elements.password.value.trim();

  if (emailInput === "" || passwordInput === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailInput,
      password: passwordInput,
    };

    console.log(formData);
  }
  loginForm.reset();
});

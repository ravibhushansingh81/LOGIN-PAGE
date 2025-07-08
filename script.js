// Sample user data for demonstration
let users = JSON.parse(localStorage.getItem('users')) || [];

// Switch between login and signup forms
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  document.querySelector(".title-text .login").style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  document.querySelector(".title-text .login").style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// Login verification
loginForm.onsubmit = (e) => {
  e.preventDefault(); // Prevent form submission

  const email = loginForm.querySelector("input[type='text']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert("Login successful!");
    // Redirect to another page or perform other actions
  } else {
    alert("Invalid email or password.");
  }
};

// Signup functionality
signupForm.onsubmit = (e) => {
  e.preventDefault(); // Prevent form submission

  const email = signupForm.querySelector("input[type='text']").value;
  const password = signupForm.querySelector("input[type='password']").value;
  const confirmPassword = signupForm.querySelectorAll("input[type='password']")[1].value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Check if user already exists
  if (users.find(user => user.email === email)) {
    alert("User  already exists.");
    return;
  }

  // Add new user to the users array
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert("Sign up successful! You can now log in.");
  signupForm.reset(); // Reset the form
  loginForm.style.marginLeft = "0%"; // Switch to login form
  document.querySelector(".title-text .login").style.marginLeft = "0%";
};

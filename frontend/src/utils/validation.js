export function validateEmail(email) {
  if (!email) {
    return "Please enter your email.";
  }

  if (!email.includes("@")) {
    return "Please enter a valid email.";
  }

  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "Please enter your password.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return "";
}
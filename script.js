// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form "fake" submit (log only, no real email)
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const status = document.getElementById("status");

  status.textContent = "Sending...";

  // In real life forward this to a backend; here just log
  const values = {};
  data.forEach((value, key) => (values[key] = value));
  console.log("Form data:", values);

  // Simulate success
  setTimeout(() => {
    status.textContent = "Sent — I'll reply as soon as possible.";
    form.reset();
  }, 500);
}

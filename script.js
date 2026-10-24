// Before publishing, replace the placeholder with your WhatsApp number in international format.
// Example for India: 919876543210 (no +, spaces, or dashes).
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project").forEach((project) => {
      project.hidden = filter !== "all" && project.dataset.category !== filter;
    });
  });
});

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "Hello UNFOLD STUDIOS! I'd like to request an appointment.",
    "",
    `Name: ${form.get("name")}`,
    `Business / Brand: ${form.get("business") || "Not provided"}`,
    `Email: ${form.get("email")}`,
    `Phone / WhatsApp: ${form.get("phone")}`,
    `Service: ${form.get("service")}`,
    `Preferred date: ${form.get("date") || "Flexible"}`,
    `Project details: ${form.get("details") || "Not provided"}`
  ].join("\n");

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("The booking form is ready. Before using it, open script.js and replace 91XXXXXXXXXX with your WhatsApp number.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

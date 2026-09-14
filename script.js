const WHATSAPP_NUMBER = "923000000000";

const serviceSelect = document.getElementById("service");
const areaSelect = document.getElementById("area");

document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    serviceSelect.value = card.dataset.service;
    document.querySelectorAll(".service-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    document.getElementById("request").scrollIntoView({behavior:"smooth"});
  });
});

document.querySelectorAll(".phase").forEach(btn => {
  btn.addEventListener("click", () => {
    areaSelect.value = btn.dataset.area;
    document.querySelectorAll(".phase").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("request").scrollIntoView({behavior:"smooth"});
  });
});

document.getElementById("serviceForm").addEventListener("submit", e => {
  e.preventDefault();

  const service = serviceSelect.value;
  const area = areaSelect.value;
  const name = document.getElementById("name").value.trim();
  const details = document.getElementById("details").value.trim();

  const message =
    `Hello Future Home Fix,\n\n` +
    `Service: ${service}\n` +
    `Area: ${area}\n` +
    `Name: ${name}\n` +
    `Details: ${details}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const form = document.querySelector('#contactForm');
const statusNode = document.querySelector('#formStatus');

if (form && statusNode) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    statusNode.textContent = name
      ? `Thanks, ${name}! We'll get back to you shortly.`
      : "Thanks! We'll get back to you shortly.";
    form.reset();
  });
}

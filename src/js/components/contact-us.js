document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-us__container');
  if (!form) return

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = form.querySelectorAll('input, textarea');
    let allFilled = true;

    inputs.forEach(input => {
      console.log(`Field value "${input.placeholder}": "${input.value}"`);
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      alert('Thanks for your message');
      form.reset();
    } else {
      alert('Please fill in all fields');
    }
  });
});

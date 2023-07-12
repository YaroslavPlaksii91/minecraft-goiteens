const buttons = document.querySelectorAll('.questions-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const text = button.previousElementSibling;

    text.classList.toggle('hidden');
  });
});

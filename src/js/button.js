const button = document.querySelector('.collapse-button');
const textContainer = document.querySelector('.text-container');

button.addEventListener('click', () => {
  const height = textContainer.offsetHeight;
  if (textContainer.dataset.open === undefined || textContainer.dataset.open === 'false') {
    textContainer.dataset.open = 'true';
    const naturelHeight = textContainer.scrollHeight;
    textContainer.style.height = `${naturelHeight}px`;
  } else {
    textContainer.style.height = `${height}px`;
    textContainer.dataset.open = 'false';
    setTimeout(() => { textContainer.style.height = '0px'; }, 0);
  }
});

textContainer.addEventListener('transitionend', () => {
  if (textContainer.style.height !== '0px') {
    textContainer.style.height = 'auto';
  }
});

const getLinks = () => {
  const links = document.querySelectorAll('a > h3');
  return Array.from(links).map((link) => link.parentElement);
};

window.onkeydown = (event) => {
  if (['TEXTAREA', 'INPUT'].includes(document.activeElement.tagName)) return;

  const pressedNumber = event.keyCode - 48;
  if (pressedNumber > 0 && pressedNumber <= 9) {
    const links = getLinks();
    if (pressedNumber < links.length) {
      const link = links[pressedNumber - 1];
      link.click();
    }
  }
};

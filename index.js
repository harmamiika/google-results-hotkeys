console.log('Hello World');

window.onkeydown = (event) => {
  if (document.activeElement.tagName === 'INPUT') return;
  console.log('onkeydonw after input check');
  // TODO: return if user has input field focused

  if (event.keyCode >= 48 && event.keyCode <= 57) {
    console.log('number key');
    const pressedNumber = event.keyCode - 48;
    console.log(pressedNumber);

    const links = document.querySelectorAll('a > h3');
    console.log(links, 'links');
    const parentLinks = Array.from(links).map((link) => link.parentElement);
    console.log(parentLinks, 'parentLinks');

    console.log(pressedNumber, parentLinks.length, 'pressedNumber, parentLinks.length');
    if (pressedNumber < parentLinks.length) {
      const link = parentLinks[pressedNumber - 1];
      console.log(link);
      link.click();
    }
  }
};

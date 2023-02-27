console.log('Hello World');

const links = document.querySelectorAll('h3');
console.log(links);

// wait for links to appear
setTimeout(() => {
  const links = document.querySelectorAll('h3');
  console.log(links, 'links');
}, 2000);

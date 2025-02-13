const pixelsTag = document.querySelector<HTMLDivElement>('.pixels');

// When we scroll the page, update the pixels tag to be how far we've scrolled.

document.addEventListener('scroll', function () {
  const pixels = window.scrollY;
  if (pixelsTag) {
    pixelsTag.innerHTML = pixels.toString();
  }
});

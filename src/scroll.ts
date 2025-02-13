const pixelsTag = document.querySelector<HTMLDivElement>('.pixels');
const bodyTag = document.querySelector<HTMLElement>('body');
const progressTag = document.querySelector<HTMLDivElement>('.progress');

// When we scroll the page, update the pixels tag to be how far we've scrolled.

document.addEventListener('scroll', function () {
  const pixels = window.scrollY;
  if (pixelsTag) {
    pixelsTag.innerHTML = pixels.toString();
  }
});

//when we scroll the page, make a progress bar that keeps track of the distance
document.addEventListener('scroll', function () {
  const pixels = window.scrollY;
  if (bodyTag && progressTag) {
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableDistance = pageHeight - window.innerHeight;
    const percentage = pixels / totalScrollableDistance;
    progressTag.style.width = `${100 * percentage}%`;
  }
});

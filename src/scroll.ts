const pixelsTag = document.querySelector<HTMLDivElement>('div.pixels');
const bodyTag = document.querySelector<HTMLElement>('body');
const progressTag = document.querySelector<HTMLDivElement>('div.progress');
const sectionsTag = document.querySelectorAll<HTMLElement>('section');
const titleTag = document.querySelector<HTMLDivElement>('div.title');
const pageTag = document.querySelector<HTMLDivElement>('div.page');

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

//when we scroll down the page, see how far down the page we scrolled
//for each section, check whether we've passed it and if we have, updtae the text in the header

document.addEventListener('scroll', function () {
  const pixels = window.scrollY;

  sectionsTag.forEach((section) => {
    if (section.offsetTop - 100 <= pixels) {
      if (titleTag && pageTag) {
        const title = section.getAttribute('data-title') || '';
        titleTag.innerHTML = title;
        const page = section.getAttribute('data-page') || '';
        pageTag.innerHTML = page;
      }
    }
  });
});

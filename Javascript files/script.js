const image = document.getElementById("image1");

const imageLinks = [
  "../images/Iclean main page.png",
  "../images/Iclean teacher's page.png",
  "../images/request a cleaner.png",
  "../images/cleaner page.png",
];
let i = 0;

document.getElementById("currentImage").innerHTML = i + 1;

document.getElementById("ofimages").innerHTML = imageLinks.length;

// showNextImage

function showNextImage() {
  if (i === imageLinks.length - 1) {
    i = 0;
  } else {
    i++;
  }
  image.setAttribute("src", imageLinks[i]);

  document.getElementById("currentImage").innerHTML = i + 1;
}
//showPreviousImage

function showPreviousImage() {
  if (i === 0) {
    i = 3;
  } else {
    i--;
  }

  // show image numebr

  image.setAttribute("src", imageLinks[i]);
  document.getElementById("currentImage").innerHTML = i + 1;
}

//auto button

let isAutoScroll = false;
function autoSlideShow() {
  isAutoScroll = !isAutoScroll;
  if (isAutoScroll) id = setInterval(showNextImage, 2000);
  if (!isAutoScroll) {
    clearInterval(id);
  }
}


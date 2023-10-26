// ********** set date ************
const myYear = new Date().getFullYear();
document.querySelector(".date").innerHTML = myYear;

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  //   console.log(window.scrollY);
  //   const scrollHeight = window.pageYOffset;
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  //   console.log(navHeight);

  // display fixed navbar
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // display back to top btn
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach(function (eachLink) {
  eachLink.addEventListener("click", function (e) {
    e.preventDefault();
    // navigate to clicked
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const container = linksContainer.getBoundingClientRect().height;

    // scroll to exact position on bigger screen
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    // scroll to exact position on smaller screen
    if (navHeight > 82) {
      position = position + container;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
    // closing navbar while scrolled
  });
});

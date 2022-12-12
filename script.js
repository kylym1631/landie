const reveals = document.querySelectorAll(" .undraw__left, .intro__right, .pricing");

reveals.forEach((el) => {
  el.classList.add("loading");
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

reveals.forEach((el) => observer.observe(el));

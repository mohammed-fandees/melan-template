class Counter {
  constructor(valus, time) {
    this.valus = valus;
    this.time = time;
  }

  count() {
    this.valus.forEach((value) => {
      let startValu = 0;
      let endValue = parseInt(value.getAttribute("data-val"));
      let duration = Math.floor(this.time / endValue);
      let counter = setInterval(function () {
        startValu++;
        value.textContent = startValu;
        if (startValu == endValue) clearInterval(counter);
      }, duration);
    });
  }
}

let section = document.querySelector(".works");
let started = false;
onscroll = function () {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      new Counter(document.querySelectorAll(".counter"), 4000).count();
      started = true;
    }
  }
};
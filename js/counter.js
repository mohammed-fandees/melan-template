class Counter {
  constructor(values, time) {
    this.values = values;
    this.time = time;
  }

  count() {
    this.values.forEach((value) => {
      let startValue = 0;
      let endValue = parseInt(value.getAttribute("data-val"));
      let duration = Math.floor(this.time / endValue);
      let counter = setInterval(function () {
        startValue++;
        value.textContent = startValue;
        if (startValue == endValue) clearInterval(counter);
      }, duration);
    });
  }
}

let counter = new Counter(document.querySelectorAll(".counter"), 4000);
let section = document.querySelector(".works");
let started = false;

function play() {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      counter.count();
      started = true;
    }
  }
}

window.addEventListener("scroll", play);
window.addEventListener("load", play);
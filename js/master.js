class Navbar {
  constructor(menu, navbar) {
    this.menu = menu;
    this.navbar = navbar;
  }

  show() {
    this.menu.classList.toggle("visible-menu");
  }

  scroll() {
    if(scrollY >= 400)
      this.navbar.classList.add('sectond-view');
    else
      this.navbar.classList.remove('sectond-view');
  }
}

let navbar = new Navbar(
  document.querySelector("#links"),
  document.querySelector("#navbar")
);

document.querySelector("#bar").addEventListener("click", function () {
  navbar.show();
});

onload = () => navbar.scroll();
onscroll = () => navbar.scroll();

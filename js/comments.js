class Comment {
  constructor(element, comments) {
    this.el = element;
    this.comments = comments;
  }

  count() {
    let i;
    for (i = 0; i < this.comments.length; i++) {}
    this.el.textContent = `0${i} Comments`;
  }
}

new Comment(
  document.querySelector("#comments-counter"),
  document.querySelectorAll(".comment")
).count();

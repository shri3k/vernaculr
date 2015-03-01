class Tooltip {
  constructor(idName) {
    this.parent = document.createElement('div');
    this.child = '<div class="tooltip"> This is pretty much a template</div>';
    this.parent.id = idName;
    this.parent.className = "parent-tooltip";
    this.pos = {
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0
    };
  }

  render() {
    document.body.appendChild(this.parent);
    this.parent.innerHTML = this.child;
    this.resize()();
    this.display(true);
  }

  display(bool) {
    this.parent.style.visibility = bool ? 'visible' : 'hidden';
  }

  trackPos(cb) {
    if (window.getSelection().type.toLowerCase() === "range") {
      var pos = window.getSelection().getRangeAt(0).cloneRange().getClientRects()[0];
      this.pos = pos;
      cb.call(this, null);
    }
  }

  reposition() {
    this.parent.style.left = this.pos.left + 'px';
    this.parent.style.top = (this.pos.top + this.parent.clientHeight) + 'px';
  }

  resize() {
    return this.partial(this.trackPos, this.reposition);
  }

  partial(fn) {
    var argumentsList = [].slice.call(arguments, 1);
    return () => {
      fn.apply(this, argumentsList.concat([].slice.call(argumentsList, 0)));
    };
  }
}
module.exports = Tooltip;

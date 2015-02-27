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
    this.init();
  }

  init() {
    document.body.appendChild(this.parent);
    this.parent.innerHTML = this.child;
    this.parent.style.visibility = "hidden";
  }

  trackPos(cb) {
    if (window.getSelection().type.toLowerCase() === "range") {
      var pos = window.getSelection().getRangeAt(0).cloneRange().getClientRects()[0];
      this.pos = pos;
      this.parent.style.visibility = "visible";
      cb.call(this, null);
    }
  }

  reposition() {
    this.parent.style.left = this.pos.left + 'px';
    this.parent.style.top = this.pos.top + 'px';
    this.parent.style.right = this.pos.right + 'px';
    this.parent.style.bottom = this.pos.bottom + 'px';
  }

  partial(fn) {
    var argumentsList = [].slice.call(arguments, 1);
    return () => {
      fn.apply(this, argumentsList.concat([].slice.call(argumentsList, 0)));
    };
  }
}
module.exports = Tooltip;

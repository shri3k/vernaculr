(function() {
  function Tooltip(idName) {
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

  Tooltip.prototype.trackPos = function(cb) {
    if (window.getSelection().type.toLowerCase() === "range") {
      var pos = window.getSelection().getRangeAt(0).cloneRange().getClientRects()[0];
      this.pos = pos;
      cb.call(this, null);
    }
  }

  Tooltip.prototype.reposition = function() {
    this.parent.style.left = this.pos.left + 'px';
    this.parent.style.top = this.pos.top + 'px';
    this.parent.style.right = this.pos.right + 'px';
    this.parent.style.bottom = this.pos.bottom + 'px';
  }

  Tooltip.prototype.partial = function (fn) {
    var argumentsList = [].slice.call(arguments, 1);
    return function() {
      fn.apply(this, argumentsList.concat([].slice.call(argumentsList, 0)));
    }.bind(this);
  }

  var tooltip = new Tooltip('tooler');
  document.body.appendChild(tooltip.parent);
	tooltip.parent.innerHTML = tooltip.child;
  var partialApp = tooltip.partial(tooltip.trackPos, tooltip.reposition);
  window.onresize = partialApp;
}());

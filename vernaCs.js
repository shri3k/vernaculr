(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/shriek/sandbox/projects/vernaculr/Tooltip.js":[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Tooltip = (function () {
  function Tooltip(idName) {
    _classCallCheck(this, Tooltip);

    this.parent = document.createElement("div");
    this.child = "<div class=\"tooltip\"> This is pretty much a template</div>";
    this.parent.id = idName;
    this.parent.className = "parent-tooltip";
    this.pos = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.init();
  }

  _prototypeProperties(Tooltip, null, {
    init: {
      value: function init() {
        document.body.appendChild(this.parent);
        this.parent.innerHTML = this.child;
        this.parent.style.visibility = "hidden";
      },
      writable: true,
      configurable: true
    },
    trackPos: {
      value: function trackPos(cb) {
        if (window.getSelection().type.toLowerCase() === "range") {
          var pos = window.getSelection().getRangeAt(0).cloneRange().getClientRects()[0];
          this.pos = pos;
          this.parent.style.visibility = "visible";
          cb.call(this, null);
        }
      },
      writable: true,
      configurable: true
    },
    reposition: {
      value: function reposition() {
        this.parent.style.left = this.pos.left + "px";
        this.parent.style.top = this.pos.top + "px";
        this.parent.style.right = this.pos.right + "px";
        this.parent.style.bottom = this.pos.bottom + "px";
      },
      writable: true,
      configurable: true
    },
    partial: {
      value: function partial(fn) {
        var _this = this;
        var argumentsList = [].slice.call(arguments, 1);
        return function () {
          fn.apply(_this, argumentsList.concat([].slice.call(argumentsList, 0)));
        };
      },
      writable: true,
      configurable: true
    }
  });

  return Tooltip;
})();

module.exports = Tooltip;

},{}],"/home/shriek/sandbox/projects/vernaculr/main.js":[function(require,module,exports){
"use strict";

var Tooltip = require("./Tooltip");
var tooltip = new Tooltip("tooler");
var partialApp = tooltip.partial(tooltip.trackPos, tooltip.reposition);
window.onresize = partialApp;
document.querySelector("*").addEventListener("click", function (e) {
  if (e.target.id !== tooltip.parent.id) {
    document.querySelector("#" + tooltip.parent.id).style.visibility = "hidden";
  }
});

},{"./Tooltip":"/home/shriek/sandbox/projects/vernaculr/Tooltip.js"}]},{},["/home/shriek/sandbox/projects/vernaculr/main.js"]);

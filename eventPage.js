(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/shriek/sandbox/projects/vernaculr/apiKey.js":[function(require,module,exports){
"use strict";

module.exports = "3acbbc95-cd29-4502-8d00-485da58bf31a";

},{}],"/home/shriek/sandbox/projects/vernaculr/eventPage6.js":[function(require,module,exports){
"use strict";

// var xml2json = require('xml2json');
(function () {
  "use strict";
  var someFunc = function () {
    console.log(this.responseText);
  };
  var query = function (word) {
    var apiKey = require("./apiKey");
    var apiUrl = "http://localhost:3000/getEntry/" + word;
    var xhr = new XMLHttpRequest();
    xhr.onload = someFunc;
    xhr.open("get", apiUrl, true);
    xhr.send();
  };

  var menuItem = {
    id: "vernaculMe",
    title: "Find meaning",
    contexts: ["selection"]
  };

  chrome.contextMenus.create(menuItem);
  chrome.contextMenus.onClicked.addListener(function (clickData) {
    console.dir(clickData);
    if (clickData.menuItemId === "vernaculMe" && clickData.selectionText) {
      query(clickData.selectionText);
      console.log("You wanna search this: %s", clickData.selectionText);
    }
  });
})();

},{"./apiKey":"/home/shriek/sandbox/projects/vernaculr/apiKey.js"}]},{},["/home/shriek/sandbox/projects/vernaculr/eventPage6.js"]);

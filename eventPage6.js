// var xml2json = require('xml2json');
(function() {
  'use strict';
  var someFunc = function() {
    console.log(this.responseText);
  };
  var query = word => {
    var apiKey = require('./apiKey');
		var apiUrl = `http://localhost:3000/getEntry/${word}`;
    var xhr = new XMLHttpRequest();
    xhr.onload = someFunc;
    xhr.open("get", apiUrl, true);
    xhr.send();
  };

  var menuItem = {
    "id": "vernaculMe",
    "title": "Find meaning",
    "contexts": ["selection"]
  };

  chrome.contextMenus.create(menuItem);
  chrome.contextMenus.onClicked.addListener(function(clickData) {
    console.dir(clickData);
    if (clickData.menuItemId === "vernaculMe" && clickData.selectionText) {
      query(clickData.selectionText);
      console.log("You wanna search this: %s", clickData.selectionText);
    }
  });

}());

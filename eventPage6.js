(function() {
  'use strict';
  var someFunc = function() {
    console.log(this.responseText);
  };
  var query = (word, sendResponse) => {
    var apiKey = require('./apiKey');
    var apiUrl = `http://localhost:3000/getEntry/${word}`;
    var xhr = new XMLHttpRequest();
    xhr.onload = sendResponse;
    xhr.open("get", apiUrl, true);
    xhr.addEventListener('error', () => {
      console.log('dieing');
    }, false);
    xhr.send();
  };

  var menuItem = {
    "id": "vernaculMe",
    "title": "Find meaning",
    "contexts": ["selection"]
  };

  chrome.contextMenus.create(menuItem);
  chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId === "vernaculMe" && clickData.selectionText) {
      query(clickData.selectionText, function() {
        var resp = this.responseText;
        chrome.tabs.query({
          active: true,
          currentWindow: true
        }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: "getEntry",
            result: JSON.parse(resp).entryContent
          }, function(response) {});
        });
      });
    }
  });

}());

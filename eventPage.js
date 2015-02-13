(function() {
  var menuItem = {
    "id": "vernaculMe",
    "title": "Find meaning",
    "contexts": ["selection"]
  };

  chrome.contextMenus.create(menuItem);
  chrome.contextMenus.onClicked.addListener(function(clickData) {
    console.dir(clickData);
    if (clickData.menuItemId === "vernaculMe" && clickData.selectionText) {
      console.log("You wanna search this: %s", clickData.selectionText);
      window.resize = function() {
        console.log("resizing...");
      }
    }
  });

}());

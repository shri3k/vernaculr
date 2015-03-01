var Tooltip = require('./Tooltip');
var tooltip = new Tooltip('tooler');
var resizeMe = tooltip.resize();
window.onresize = resizeMe;

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getEntry") {
    tooltip.child = request.result;
    tooltip.render();
  }
});

var getParentNode = (node) => {
  if (typeof node.className !== "undefined") {
    if (node.className === tooltip.parent.className) {
      return true;
    }
  } else {
    return false;
  }
  return getParentNode(node.parentNode);
};

document.querySelector('*').addEventListener("click", e => {
    tooltip.display(getParentNode(e.target));
});

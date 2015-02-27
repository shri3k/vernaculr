var Tooltip = require('./Tooltip');
var tooltip = new Tooltip('tooler');
var partialApp = tooltip.partial(tooltip.trackPos, tooltip.reposition);
window.onresize = partialApp;
document.querySelector('*').addEventListener("click", e => {
  if (e.target.id !== tooltip.parent.id) {
    document.querySelector('#' + tooltip.parent.id).style.visibility = "hidden";
  }
});

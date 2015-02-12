(function() {
  var tooltipWrap = document.createElement('div');
  var tooltip = "<div id='fuckme'> Yoloswag you know what I mean</div>";
	
	//Need id for parent id to have innerHTML
  tooltipWrap.id = "vernaTip";
  document.body.appendChild(tooltipWrap);

  document.querySelector('#vernaTip').innerHTML = tooltip;
	document.querySelector('#fuckme').className = "swaggerwanker";
}());

container = document.getElementById('container');

// Header setup
var header = document.getElementById("header"); 
header.setAttribute("id", "header");

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)) {
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.id   = cssId;
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = 'main.css';
	link.media = 'all';
	head.appendChild(link);
}

function createtooltipDiv(bubble) {	
	tooltipDiv = document.createElement('div');
	titleDiv = document.createElement("div")
	bodyDiv = document.createElement("div");
	titleP = document.createElement("p")
	bodyP = document.createElement("p");

	tooltipDiv.setAttribute("class", "tooltip-"+bubble.category + " tooltip");
	tooltipDiv.setAttribute("id", bubble.id);
	
	// Build a titlebar for each tooltipDiv. 
	titleDiv.setAttribute("class", "tooltip-title-" + bubble.category + " tooltip-title");
	titleP.setAttribute("class", "titleString");
	titleP.appendChild(document.createTextNode(bubble.title));
	titleDiv.appendChild(titleP);

	// Build a subtitle.
	bodyDiv.setAttribute("class", "tooltip-body-"+bubble.category + " tooltip-body");
	bodyP.setAttribute("class", "sub-title-string");
	bodyP.appendChild(document.createTextNode(bubble.body));
	bodyDiv.appendChild(bodyP);

	tooltipDiv.appendChild(titleDiv);
	tooltipDiv.appendChild(bodyDiv)
	//Put it all together into the container.
	return tooltipDiv;
}

// Populate bubbles. 
for (i in bubbles) {
	container.appendChild(createtooltipDiv(bubbles[i]));
}

function linkBubbles() {
	container = document.getElementById("container");

}
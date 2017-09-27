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
	if (bubble.body == null) {
		
		titleDiv.setAttribute("class", "tooltip-title-full " + "tooltip-title-" + bubble.category + " tooltip-title");
		bodyDiv.setAttribute("class", "tooltip-body-empty " + "tooltip-body-"+bubble.category + " tooltip-body");
		bodyP.setAttribute("class", "sub-title-string-empty " + "sub-title-string");

	} else {
		bodyP.appendChild(document.createTextNode(bubble.body));
		bodyDiv.setAttribute("class", "tooltip-body-"+bubble.category + " tooltip-body");
		bodyP.setAttribute("class", "sub-title-string");
		bodyDiv.appendChild(bodyP);
	}

	tooltipDiv.appendChild(titleDiv);
	tooltipDiv.appendChild(bodyDiv)
	//Put it all together into the container.
	return tooltipDiv;
}

// Populate bubbles. 
for (i in bubbles) {
	container.appendChild(createtooltipDiv(bubbles[i]));
	if (i == 6) {
		spacer = document.createElement("div");
		spacer.setAttribute("class", "spacer");
		container.appendChild(spacer);
	}
	if (bubbles[i].links != null) {
		for (j in bubbles[i].links) {
			if (bubbles[i].links[j].as == null) { 
				console.log("This is a simple one, straight to the next.")
				rightArrow = document.createElement("div");
				rightArrow.setAttribute("class", "right-arrow");
				container.appendChild(rightArrow);
				line = document.createElement("div");
				line.setAttribute("class", "line");
				container.appendChild(line);
			}
			if (bubbles[i].links[j].as == true) {
				console.log("This is a true conn ( " +i+ " links to " + bubbles[i].links[j].to + " as " + bubbles[i].links[j].as + ").");
			}
			if (bubbles[i].links[j].as == false) {
				console.log("This is a false conn ( " +i+ " links to " + bubbles[i].links[j].to + " as " + bubbles[i].links[j].as + ").");
			}
		}
	}	
}

function linkBubbles() {
	container = document.getElementById("container");

}
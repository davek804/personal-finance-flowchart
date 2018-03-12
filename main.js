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
			buildLinkLine(bubbles[i], bubbles[i].links[j], bubbles[i].links[j].from);
			if (bubbles[i].links[j].as == null) { 

				//console.log("BOX ID: " + i + " is a basic link to the next");

				//buildLinkLine(bubbles[i], bubbles[i].links[j], bubbles[i].links[j].from);

				tooltip = document.getElementById(i);
				style = document.defaultView.getComputedStyle(tooltip, null);
				
				// Create an anchor point / div for us to attach our arrows to. 
				//console.log("Top: " + Math.round(getTop(tooltip)));
				loc = document.getElementById(i).getBoundingClientRect().top - window.scrollY;
				//console.log("Top: " + Math.round(loc));
				
				height = style.height;
				height = height.slice(0, height.length-2);
				//console.log("Height: " + height);
				pointY = loc + height/2;
				pointY = Math.round(pointY);
				//console.log (pointY);
				var offset_t = $("#"+i).offset().top - $(window).scrollTop();

				//console.log("Jquery offset: " + offset_t);

				arrowContainer = document.createElement("div");
				arrowContainer.setAttribute("style", "height:100%");

				rightArrow = document.createElement("div");
				rightArrow.setAttribute("class", "right-arrow");
				container.appendChild(rightArrow);
				line = document.createElement("div");
				line.setAttribute("class", "line");
				rightArrow.setAttribute("style", "z-index:100;position:absolute;top:" + pointY + ";");
				//rightArrow.setAttribute("style", "vertical-align:middle");
				//container.appendChild(line);

				arrowContainer.appendChild(rightArrow);
				tooltip.appendChild(arrowContainer);
			} else {
				if (bubbles[i].links[j].as == true) {
					//console.log("BOX ID: " +i+ " links to " + bubbles[i].links[j].to + " as " + bubbles[i].links[j].as);
					buildLinkLine(bubbles[i], bubbles[i].links[j].from);
				}
				if (bubbles[i].links[j].as == false) {
					//console.log("BOX ID: " +i+ " links to " + bubbles[i].links[j].to + " as " + bubbles[i].links[j].as);
					buildLinkLine(bubbles[i], bubbles[i].links[j].from);
				}
			}
			//console.log("\n");
		}
	}	
}

function buildLinkLine(bubble, link, from) {
	tooltip = document.getElementById(bubble.id);
	console.log("Width: " + tooltip.offsetWidth + " Height: " + tooltip.offsetHeight );
	switch (from) {
		case "top":
		console.log("TOP-LINK from ID " + "#" + bubble.id + " to ID " + link.to + " with arrow type " + link.as + ".");
		break;
		case "bottom":
		console.log("BOTTOM-LINK from ID " + "#" + bubble.id + " to ID " + link.to + " with arrow type " + link.as + ".");
		break;
		case "left":
		console.log("LEFT-LINK from ID " + "#" + bubble.id + " to ID " + link.to + " with arrow type " + link.as + ".");
		break;
		case "right":
		console.log("RIGHT-LINK from ID " + "#" + bubble.id + " to ID " + link.to + " with arrow type " + link.as + ".");
		break;
		default:
		console.log("Error!"); 
	}
}

function linkBubbles() {
	container = document.getElementById("container");

}

function getOffset(el) {
	el = el.getBoundingClientRect();
	return {
		left: el.width + window.scrollX,
		top: el.top + window.scrollY
	}
}

function getTop(el) {
	el = el.getBoundingClientRect();
	return el.top + window.scrolly
}
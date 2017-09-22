container = document.getElementById('container');

var phases = {
	0 : "Budget & reduce expenses, set realistic goals.",
	1 : "Build an emergency fund",
	2 : "Employer-sponsored matching funds",
	3 : "Pay down high/moderate interest debts",
	4 : "Save for retirement in an IRA & higher ed. expenses", 
	5 : "Save more for retirement",
	6 : "Save for other goals & advanced methods"
}

var categories = {
	0 : "Step 0: Budget",
	1 : "Step 1: E-Fund",
	2 : "Step 2: Matching",
	3 : "Step 3: Debts",
	4 : "Step 4: Retirement",
	5 : "Step 5: More Ret.",
	6 : "Step 6: Advanced",
}


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


function createtooltipDiv(id, specificPhase) {

	
	tooltipDiv = document.createElement('div');
	titleDiv = document.createElement("div")
	subtitleDiv = document.createElement("div");
	titleP = document.createElement("span")
	subtitleP = document.createElement("p");

	tooltipDiv.setAttribute("id", "tooltipDiv");
	
	// Build a titlebar for each tooltipDiv. 
	titleDiv.setAttribute("id", "tooltipDiv-title");
	titleDiv.setAttribute("class", "tooltipDiv-title-div-"+id);
	titleP.setAttribute("class", "titleString");
	titleP.appendChild(document.createTextNode(categories[id]));
	titleDiv.appendChild(titleP);

	// Build a subtitle.
	subtitleDiv.setAttribute("id", "tooltipDiv-body");
	subtitleDiv.setAttribute("class", "tooltipDiv-body-div-"+id);
	subtitleP.setAttribute("class", "sub-title-string");
	subtitleP.appendChild(document.createTextNode(specificPhase));
	subtitleDiv.appendChild(subtitleP);

	tooltipDiv.setAttribute("class", "tooltipDiv");
	tooltipDiv.setAttribute("class", "tooltipDiv-"+id);

	tooltipDiv.appendChild(titleDiv);
	tooltipDiv.appendChild(subtitleDiv)
	//Put it all together into the container.
	return tooltipDiv;
}

for (i = 0; i < Object.keys(phases).length; i++) {

	container.appendChild(createtooltipDiv(i, phases[i]));
}
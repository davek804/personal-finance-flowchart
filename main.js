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


function createTooltip(id, specificPhase) {

	container = document.getElementById('container')
	tooltip = document.createElement('div');
	tooltip.setAttribute("id", "tooltip");
	
	// Build a quick titlebar for each tooltip. 
	var titleDiv = document.createElement("div")
	titleDiv.setAttribute("id", "tooltip-title");
	titleDiv.setAttribute("class", "tooltip-title-div-"+id);
	titleP = document.createElement("p")
	titleP.setAttribute("class", "titleString");
	titleP.appendChild(document.createTextNode(categories[id]));
	titleDiv.appendChild(titleP);
	tooltip.appendChild(titleDiv);

	// Build out the subtitle.
	var phase = specificPhase;
	phaseP = document.createElement("p");
	phaseP.setAttribute("class", "titleString");
	phaseP.appendChild(document.createTextNode(phase));
	tooltip.appendChild(phaseP);	
	

	// TODO - Make the ability to style/display per 'category'.
	
	tooltip.setAttribute("class", "tooltip");
	tooltip.setAttribute("class", "tooltip-"+id);



	//Put it all together into the container.
	container.appendChild(tooltip);
}

for (i = 0; i < Object.keys(phases).length; i++) {
	createTooltip(i, phases[i]);
}
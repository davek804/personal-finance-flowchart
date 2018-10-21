const fs   = require('fs-extra')
data       = []
datafile   = 'data.json'

if (fs.existsSync(datafile)) {
	raw = fs.readFileSync(datafile).toString()
	data = JSON.parse(raw);
}

for (current = 0; current < data.length; current++ ) {
	obj = data[current]
	if (obj.links != null) {
		id = obj.id
		for (o = 0; o < obj.links.length; o++) {
			console.log(id + " links to " + obj.links[o].to + " as " + obj.links[o].as + " from " + obj.links[o].from);
		}
	}
}

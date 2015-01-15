var data = [
	{id: 0, name: "Apple"},
	{id: 1, name: "Pear"},
	{id: 2, name: "Banana"}
];

// this is called when you click 'jumble'
function updateUi() {
	
	d3.shuffle(data);
  console.log(JSON.stringify(data));
	
	// TODO select fruit and bind all data
	var update = d3.select("#fruit")
    	.selectAll("li")
	.data(data, get('id'));
		
	// TODO create els
	update.enter().append('li');
	var updateEnter = update
		.text(get('name'))
		.style('top', function(d, i) {
			return i * 25 + 'px';
		});

  // TODO set top based on index
}

updateUi();

// Helper function: use in place of the short functions like function(data, index) { return data.SOMETHING; }
function get(key) {
  return function(data, index) {
    return data[key];
  }
}


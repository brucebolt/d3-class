
var data = [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
  ];

// TODO select circles, bind data
var circle = d3
  .selectAll('circle')
  .data(data);
  // TODO make 'onmove' handler for for `mousemove` event
circle
  .on('mousemove', onmove);
  // TODO make 'onout' handler for for `mouseout` event
circle
  .on('mouseout', onout);

function onmove(d, i) {
  // TODO change the fill of current element
  d3.select(this)
    .style('fill', d.color);
}

function onout(d, i) {
  // TODO reset fill to original (style null)
  d3.select(this)
    .style('fill', null);
}


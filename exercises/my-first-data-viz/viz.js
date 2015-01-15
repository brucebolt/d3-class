var data = [
  { year: 1999,  poolDeaths: 109 , cageFilms: 2 },
  { year: 2000,  poolDeaths: 102 , cageFilms: 2 },
  { year: 2001,  poolDeaths: 102 , cageFilms: 2 },
  { year: 2002,  poolDeaths: 98  , cageFilms: 3 },
  { year: 2003,  poolDeaths: 85  , cageFilms: 1 },
  { year: 2004,  poolDeaths: 95  , cageFilms: 1 },
  { year: 2005,  poolDeaths: 96  , cageFilms: 2 },
  { year: 2006,  poolDeaths: 98  , cageFilms: 3 },
  { year: 2007,  poolDeaths: 123 , cageFilms: 4 },
  { year: 2008,  poolDeaths: 94  , cageFilms: 1 },
  { year: 2009,  poolDeaths: 102 , cageFilms: 4 },
]



// TODO select groups (.film), bind data
var films = d3.selectAll('.film')
  .data(data);

// TODO translate the groups so
//  - each group's x is 80px to right of previous
//  - each group's y is (200 - (d.cageFilms * 20 + 20)) px
films
    .style('transform', function(data, index) {
    var x = (index * 80 + 80) + 'px';
    var y = (200 - (data.cageFilms * 20 + 20)) + 'px';
    return 'translate(' + x + ', ' + y + ')';
  });

// TODO make each circle's radius (poolDeaths / 4) pixels
var circles = films
  .select('circle')
  .attr('r', function(data, index) {
    return (data.poolDeaths / 4);
  });


// TODO set each <text>'s content to d.year
var text = films
  .select('text')
  .text(function(data, index) {
    return data.year;
  });


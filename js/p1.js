var dataset = [ 5, 10, 15, 20, 25 ];

d3.select("body")          // 1
  .selectAll("p")          // 2
  .data(dataset)       // 3         // 5
  .text(function(d){return d + "!"}); // 6

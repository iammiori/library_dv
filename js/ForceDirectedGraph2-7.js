var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");


var color = d3.scaleLinear()
    .domain([1,13])
    .range(['#edf8b1','#1d91c0']);
    //.range(['red','blue']);


var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width/2, height / 2));


d3.json("./data/q7.json", function(error, graph) {
  if (error)
  throw error;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value/5); });

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g")

  var circles = node.append("circle")
      .attr("r", function(d) {return d.group == 1? 10 : 6})
      .attr("fill", function(d) { return color(d.cnt); })
      //.attr("stroke",function(d){return d.group==1? "black" : undefined;})
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
          .on("click",openText);

  function openText(d){
    //alert(d.id);
    document.getElementById("output").innerHTML ="<b>"+d.id+"</b><br><br>" + d.content;
  }



  var lables = node.append("text")
      .text(function(d) {
        return d.id;
      })
      .style('font-size','12px')
      .attr('x', 10)
      .attr('y', 10);

  node.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  }



});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

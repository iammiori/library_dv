var weight = 3,width-960, height=500;

var fill = d3.scale.category20();
d3.csv("./data/q5_cnt.csv",function(d){
  return{
    topic : d.topic,
    size : +d.freq*weight
  }
},
  function(data){
    d3.layout.cloud().size([width,height]).words(data)
    .rotate(0)
    .font("Impact")
    .fontSize(function(d){return d.size;})
    .on("end",draw)
    .start();

  function draw(words){
    d3.select("#cloud").append("svg")
      .attr("width",width)
      .attr("height",height)
      .append("g")
      .attr("transform","translate(" + width/2 + "," + height/2 + ")")
      .selectAll("topic")
      .data(words)
      .enter().append("text")
      .style("font-size",function(d){return d.size = "px";})
      .style("font-family","Impact")
      .style("fill",function(d,i){return fill(i);})
      .attr("text-anchor","middle")
      .attr("transform",function(d){
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d){return d.topic;});
  }
});

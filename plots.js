function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

function optionChanged(newSample) {
    buildMetadata(newSample);
}


function buildMetadata(sample) {
    d3.json('samples.json').then((data) => {
        var metadata = data.samples;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select('#sample-metadata');

        PANEL.html('');
        PANEL.append('h6').text(result.id);
        PANEL.append('h6').text(result.otu_ids);
    });
};
//         Object.entries(result).forEach(([key, value]) =>
//             {PANEL.append('h6').text(key.toUpperCase() + ': ' + value);});
    
// };


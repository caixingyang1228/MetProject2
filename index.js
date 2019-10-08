// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=o3xgyxagspMb0ubPF7G0OrW9Zmo7Uk09
// The possible section value are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, and world.

var baseUrl = "https://api.nytimes.com/svc/topstories/v2/";
var apiKey = "o3xgyxagspMb0ubPF7G0OrW9Zmo7Uk09";
var section = "world";
var url = baseUrl+section+".json?"+"api-key="+apiKey;
// var records = $("#numberofrecords").val().trim().length > 0;

    console.log(url);
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(theObject) {
        // console.log(theObject);
        for(var i = 0; i<1000; i++){
          var theTitles = theObject.results[i].title;
          var theTags = theObject.results[i].des_facet;
          
          console.log(theTitles);
          console.log(theTags);
        }
    });
    
    
    
    
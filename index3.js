var baseUrl = "https://api.nytimes.com/svc/topstories/v2/";
var apiKey = "o3xgyxagspMb0ubPF7G0OrW9Zmo7Uk09";
var section = "world";
var url = baseUrl+section+".json?"+"api-key="+apiKey;
// var records = $("#numberofrecords").val().trim().length > 0;


var myArray = [];

    console.log(url);
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(theObject) {
        // console.log(theObject);
        for(var i = 0; i<1000; i++){
          var theTitles = theObject.results[i].title;
          var theGeo = theObject.results[i].geo_facet;
          var index = myArray.length;
          
          // console.log(theTitles);
          // console.log(theTags);
          myArray[index] = {};
          myArray[index]["title"] = theTitles;
          myArray[index]["country"] = theGeo;
          
          console.log(myArray[index]);
        }
    });
    
    
    
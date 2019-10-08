// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=o3xgyxagspMb0ubPF7G0OrW9Zmo7Uk09
// The possible section value are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, and world.
var baseUrl = "https://api.nytimes.com/svc/topstories/v2/";
var apiKey = "o3xgyxagspMb0ubPF7G0OrW9Zmo7Uk09";
var section = "arts";
var url = baseUrl+section+".json?"+"api-key="+apiKey;
// var records = $("#numberofrecords").val().trim().length > 0;


    console.log(url);
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(theObject) {
        console.log(theObject);
        for(var i = 0; i<1000; i++){
          var theTitle = theObject.response.docs[i].headline.main;
          var theYear = theObject.response.docs[i].pub_date;
          // theYear = "2010-10-02T00:00:00Z";
          // theYear.split("T");
 
//           var theURL = theObject.response.docs[i].web_url;
//           var theSnippet = theObject.response.docs[i].snippet;

          console.log(theTitle);
          console.log(theYear);
          // console.log(theURL);
//           console.log(theSnippet);

//           var articleDiv = $("<div>");
//           articleDiv.addClass("p-3 m-3 rounded bg-light");
//           articleDiv.css("word-wrap", "break-word");

//           articleDiv.append("<h1><span class='badge badge-secondary'>"+(i+1)+" </span> "+theTitle+"</h1>");
//           articleDiv.append("<p>"+theYear+"</p>");
//           articleDiv.append("<p><a href='"+theURL+"'>" + theURL + "</a></p>")
//           articleDiv.append("<p>"+theSnippet+"</p>");
//           $("#articles").append(articleDiv);
//         }
//     });
  }
});

// $("#clearresults").on("click", function() {
//   $("#searchterm, #numberofrecords, #startyear, #endyear").val("");
//   $("#articles").empty();
// });
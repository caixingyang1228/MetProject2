// load a default library that lets us read/write to the file system
// let fs = require('fs');
// load a default library that lets us make HTTP requests (like calls to an API)
// let request = require('request');

// // the folder we will write into
// let folder = "downloads";

// include file system module
var fs = require('fs');
 
// read file sample.json file
fs.readFile('../NYTapi/NYTnews.json',
    // callback function that is called when reading file is done
    function(err, data) { 
        // json data
        var jsonData = data;
 
        // parse json
        var jsonParsed = JSON.parse(jsonData);
        var i;
        for(i = 0; i < 200; i++)  {
        // access elements
        // console.log(jsonParsed.world[i].title);
        console.log(jsonParsed.world[i].country);
        var n;
        for(n = 0; n < 100; n++)  {
        fs.readFile("../NYTapi/monument.json", "utf8", (err, data) => {
         if (err) console.log(err);
         //for each output country from console.log(jsonParsed.world[i].country), march the country name from monument.json, output its image url.
         var NYTcountry = jsonParsed.world[i].country;
         var MetMonument = JSON.parse(data).monument[n];
        JSON.parse(data).forEach(NYTcountry in MetMonument.country)
        console.log(MetMonument.image);
    //   downloadImage(e.primaryImage, e.filename, function(){
    //     console.log('Finished Downloading ' + e.filename);
    //   }); 
        
        })
  }
}
});


// foreach (var item in Model.Select((value, i) => new { i, value }))
// {
//     var value = item.value;
//     var index = item.i;
// }

// // download the image by url, name the file by filename
// function downloadImage(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     // console.log('content-type:', res.headers['content-type']);
//     // console.log('content-length:', res.headers['content-length']);
//     request(uri).pipe(fs.createWriteStream( folder + "/" + filename)).on('close', callback);
//   });
// };

// // go through the json we created before
// function downloadData() {
//   fs.readFile("./data.json", "utf8", (err, data) => {
//     if (err) console.log(err);

//     JSON.parse(data).forEach(e => {
//       console.log('Downloading ' + e.filename);
//       downloadImage(e.primaryImage, e.filename, function(){
//         console.log('Finished Downloading ' + e.filename);
//       });
//     });
//   });
// }

// downloadData();
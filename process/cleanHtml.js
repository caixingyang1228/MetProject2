// // Using Node.js, read the assigned AA text file and store the contents of the file in a variable

var fs = require('fs');
var cheerio = require('cheerio');

// // Load the AA text file from week01 into a variable, `dataset`
var dataset = fs.readFileSync('..//NYTapi/NYT_10_16.html');

// Load `dataset` into a cheerio object
var $ = cheerio.load(dataset);

// // Write the project titles to a text file
// var thesisTitles = '';

// // Select tag and use attribute to narrow down the requested data
// $('img').each(function(i, elem) {
//     if ($(elem).attr("style") == "border-bottom:1px solid #e3e3e3; width:260px") {
//         thesisTitles += ($(elem).text()).trim() + '\n';
//     }

$( "https://static01.nyt.com/images/2019/10/16/world/16syria1/16syria1-videoLarge.jpg" ).replaceWith( "https://images.metmuseum.org/CRDImages/md/original/sf10-176-38s1.jpg" );
    
// Remove all unnecessary content by tag
//     $('b, div, span').remove();
// });

// fs.writeFileSync('../Week2/data/m04.txt', thesisTitles);

// // Loop trough each image element and replace the src if the src matches

// $("img").each(function(i, elem){

// If src of img element matches a certain URL then src is new url

// if ($(this).attr("src") == "https://static01.nyt.com/images/2019/10/16/world/16syria1/16syria1-videoLarge.jpg"){

// $(this).attr("src", "https://images.metmuseum.org/CRDImages/md/original/sf10-176-38s1.jpg");

// }

// });

// if (metdata.monument[i].country.includes(nytdata.world[n].country[m]) ){
//                 // look for the entry with a matching `code` value
//                       let thisCountry = (metdata.monument[i].country);
//                          FindaMonument(thisCountry);
//                         console.log(nytdata.world[n].title)
//                         console.log("Country:"+metdata.monument[i].country)
//                         console.log(metdata.monument[i].image)
                
//           }



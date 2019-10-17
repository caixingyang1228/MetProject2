var fs = require('fs');
var cheerio = require('cheerio');

// Load the AA text file from week01 into a variable, `dataset`
var dataset = fs.readFileSync('../Week1/m04.txt');

// Load `dataset` into a cheerio object
var $ = cheerio.load(dataset);

// Write the project titles to a text file
var thesisTitles = [];

// Select tag and use attribute to narrow down the requested data
$('td').each(function(i, elem) {
    if ($(elem).attr("style") == "border-bottom:1px solid #e3e3e3; width:260px") {
        // thesisTitles += ($(elem).text()).trim() + '\n';
        var thisMeeting = {};
        thisMeeting.streetAddress = $(elem).html().split('<br>')[2].trim().split(',')[0];
        thisMeeting.city = "New York";
        thisMeeting.state = "NY";
        thesisTitles.push(thisMeeting);
    }
// Remove all unnecessary content by tag
    // $('b, div, span').remove();
});

fs.writeFileSync('../Week2/data/m04.json', JSON.stringify(thesisTitles));
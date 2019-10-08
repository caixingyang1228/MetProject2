//https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]
// const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&dateBegin=1095&dateEnd=1950&q=sunflowers';
//gesture

// load a default library that lets us read/write to the file system
var fs = require('fs')
// load a default library that lets us make HTTP requests (like calls to an API)
var request = require('request')

const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=monument';
const objectBaseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

fetchMuseumData(searchUrl);

let myArray = [];

function fetchMuseumData(url) {
  window
    .fetch(url)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      fetchObjects(data);
    });
}

// from the response, fetch objects
function fetchObjects(data){

  let objectIDs = data.objectIDs;
  console.log("fetching: " + objectIDs.length + " objects");
  objectIDs.forEach(function(n) {
     //console.log(objectBaseUrl + n);
    let objUrl = objectBaseUrl + n;
    window
      .fetch(objUrl)
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        addObject(data);
      });
  });
}

// create your own array using just the data you need
function addObject(objectData){
    var currentID = objectData.objectID;
    var currentTitle = objectData.title;
    var currentCountry = objectData.artistNationality;
    // var currenttags = objectData.tags;
    var imgUrl = objectData.primaryImage;
    var index = myArray.length;
    
    myArray[index] = {};
    myArray[index]["title"] = currentTitle;
    // myArray[index]["date"] = currentDate;
    myArray[index]["country"] = currentCountry;
    // myArray[index]["tags"] = currenttags;
    myArray[index]["image"] = imgUrl;
    
    console.log(myArray[index]);
}

// call the function for each element in the myObjectIds array
myArray.forEach(objectId => {
    fetchObjects(objectId);
});

// the function inside the setTimeout saves myResults to a JSON
// it will automatically run after 2000 ms
setTimeout(() => {
    fs.writeFileSync('/NYTapi/data.json', JSON.stringify(myArray), 'utf8');
}, 2000);

const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=japanese statue';
const objectBaseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

fetchMuseumData(searchUrl);
// fetchdepartData(departmentBaseURL);

let myMetArray = [];

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
    var currentCulture = objectData.culture;
    var currenttags = objectData.tags;
    var imgUrl = objectData.primaryImage;
    var index = myMetArray.length;
    
    // if(currentTitle.toLowerCase().includes('stele') || currenttags.toLowerCase().includes('stele') ){ 
    myMetArray[index] = {};
    myMetArray[index]["title"] = currentTitle;
    // myArray[index]["date"] = currentDate;
    myMetArray[index]["country"] = currentCountry;
    myMetArray[index]["culture"] = currentCulture;
    // myArray[index]["tags"] = currenttags;
    myMetArray[index]["image"] = imgUrl;
    //}
    
    console.log(myMetArray[index]);
}
// include file system module
var fs = require('fs');
let nytdata, metdata;
                
NYTData();      
                
function CompareTwoData(){
                
    console.log(nytdata.world.length );
    console.log(metdata.monument.length );
                
    for (let i = 0; i < metdata.monument.length; i++){
             for (let n = 0; n < nytdata.world.length; n++){
                 console.log('i is', i, 'n is ', n, metdata.monument[i].culture, nytdata.world[n].country)
                
  // look for the entry with a matching `code` value
          if (metdata.monument[i].culture.includes(nytdata.world[n].country[0])){
              console.log('country found')
              let thisCountry = metdata.monument[i].culture;
                
              FindaMonument(thisCountry);
                
              console.log(metdata.monument[i].culture)
                
        } else {
            console.log('country not found')
        }       
    }           
    }           
}               
                
function FindaMonument(thisCountry){

    let rand = Math.floor(Math.random() * metdata.monument.length)
    
        console.log(rand, metdata.monument.length);
     console.log(metdata.monument[rand].image)
}
        
function NYTData() {
    fs.readFile('../NYTapi/NYTnews.json',
    // callback function that is called when reading file is done
    function(err, data) { 
        // json data
        var jsonData = data;
        // parse json
     nytdata = JSON.parse(jsonData);
       
      MetData();
        for( let i = 0; i < nytdata.world.length; i++)  {
        // access elements
        // console.log(jsonParsed.world[i].title);
        // console.log(nytdata.world[i].country[0]);
        }
        })
}

function MetData() {
    fs.readFile("../NYTapi/monument.json", "utf8",  function(err, data) { 
        // json data
        let jsonData = data;
        // parse json
         metdata = JSON.parse(jsonData);
       
    //   console.log("hello");
        
        // for( let i = 0; i < metdata.monument.length; i++)  {
        // }
        CompareTwoData();
        })
    }
// include file system module
var fs = require('fs');
let nytdata, metdata;

NYTData();
// MetData();
// CompareTwoData();

function CompareTwoData(){
    
    console.log(nytdata.world.length );
    console.log(metdata.monument.length );
        
            //   console.log(nytdata.world[n].country[0])
    for (let i = 0; i < metdata.monument.length; i++){
             for (let n = 0; n < nytdata.world.length; n++){
                 for (let m = 0; m < nytdata.world[n].country.length; m++){
                     
                    //  console.log(nytdata.world[n].country[m])
                    //  console.log("Country:"+metdata.monument[i].country)
                     if (metdata.monument[i].country.includes(nytdata.world[n].country[m]) ){
                // look for the entry with a matching `code` value
                      let thisCountry = (metdata.monument[i].country);
                         FindaMonument(thisCountry);
                        console.log(nytdata.world[n].title)
                        console.log("Country:"+metdata.monument[i].country)
                        console.log(metdata.monument[i].image)
                
          }
  }
  }
}
}

function FindaMonument(thisCountry){
    let monumentArray=[];
    let rand=0;
    for (let i in metdata.monument){
        if(metdata.monument[i].country.includes(thisCountry)){
            monumentArray.push(i);
        }

    };
    
 rand = monumentArray[Math.floor(Math.random() * 8)];
        console.log ("this is Rand:"+rand);
        // console.log(metdata.monument[rand].image)
        // console.log (monumentArray);
}

//for nytdata.world[n].country[0], can we find random image instead of [0];
//

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
    fs.readFile("..//NYTapi/monument.json", "utf8",  function(err, data) { 
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


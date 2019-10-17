# MetProject2

Concept, the last research concept centered on history and symbolism, this time more from a contemporary perspective, thinking about how to present a cosmopolitan collection in a ridiculous way. I chose to use the New York Times as a window to contemporary events to connect to the cosmopolitan collections. The monument is chosen as a conceptual symbol to raise questions about international politics, post-colonialism and Western perspectives.

More concept related [here](https://youtu.be/jyphOyR0Pnw). 

Currently, this project is completed at the code level.
1. Get the news information of the international version of the homepage from the New York Times api, extract the country in it, and create the [index3.json](https://github.com/caixingyang1228/MetProject2/blob/master/index3.js) file.
2. From the Met api, get the collection information of the title and tag including “monument”, extract the two related information “country” and “culture”, and create the [monument.json](https://github.com/caixingyang1228/MetProject2/blob/master/monument.json) file. This database has done a lot in the later stage. Organize and modify:
    1. Since the amount of data extracted by using "monument" as a keyword is very small, many can be counted as a monument and are not named as a comment. Therefore, other search terms are added according to the different situations of each country, including `Column`, `Statue`, etc.
    2. Because different departments have different terms for the country, for example, most of the NYT api uses the `country` name, and Met api mostly uses adjectives. Some country names appear in the `country` category, while others appear in the "culture" category, so I manually modified a lot of data and unified them into the `country` category.
    3. Due to historical reasons, many country names are different from the names of previous places, so I manually changed many ancient country names to modern country names.
    4. The reason for this modification is because the database is a constant database and [index.json](https://github.com/caixingyang1228/MetProject2/blob/master/index3.js) is updated daily.
3. Find the image urls of the corresponding work in the [monument.json](https://github.com/caixingyang1228/MetProject2/blob/master/monument.json) according to the "country" in [index3.json](https://github.com/caixingyang1228/MetProject2/blob/master/index3.js).

Content that is not fully implemented at the code level:
Find the corresponding url on the New York Times homepage to complete the replacement. Encounter problems:

   1. A large number of countries are newly born countries, and it is necessary to manually modify the place names. The success rate is not very high during the replacement process.
    2. Typesetting and cleaning up text, advertising takes time and comparison work
    3. Some of the images in the New York Times are in the presence of a package, not on the web, making it difficult to replace them directly.
    4. Many of the images in the New York Times are tailored in advance and require a size constraint in the html file.

This is a [phased result](https://github.com/caixingyang1228/MetProject2/blob/master/final.html)

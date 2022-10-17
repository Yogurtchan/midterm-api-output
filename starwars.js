var request = new XMLHttpRequest();
request.open('GET', "https://swapi.dev/api/people");
request.onload = function(){
    var response = request.response;
    var parsedData = JSON.parse(response);
    // storing api results in charData
    var charData = parsedData.results;
    console.log(charData);
    // filtered data from api results
    var charProfile = charData.map(
        char => {return(
                {
                    name: char.name,
                    height: char.height,
                    mass: char.mass,
                    birth_year: char.birth_year,
                    gender: char.gender,

                }
            )
        }
    );
    
    console.log(charData);
    console.log(charProfile);

}
request.send();

// name, height, mass, birth_year, gender
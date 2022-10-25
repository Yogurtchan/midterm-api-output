var request = new XMLHttpRequest();
request.open('GET', "https://hp-api.herokuapp.com/api/characters");
request.onload = function(){
    var response = request.response;
    var parsedData = JSON.parse(response);

    // storing api results in charData
    var charData = parsedData;
    
    // filtered data from api results
    var charProfile = charData.map(
        char => {return(
                {
                    
                    actor: char.actor,
                    name: char.name,
                    gender: char.gender,
                    species: char.species,
                    house: char.house,
                    patronus: char.patronus,
                    image: char.image,

                }
            )
        }
    // filters characters that don't have an image URL
    ).filter(
        img => img.image != ""
    );
    
    // maps character data into charList
    var charList = charProfile.map(
        char => {
            // assigns charRow as variable where character info is appended
            let charRow = document.createElement("ul");
            charRow.className = "character";

            // appends all character info into charRow
            let charImg = document.createElement("img");
            charImg.className = "charImg";
            charImg.src = char.image;
            charRow.append(charImg);

            let charName = document.createElement("li");
            charName.className = "charInfo";
            charName.innerText = char.name;
            charRow.append(charName);

            let charAct = document.createElement("li");
            charAct.className = "charInfo";
            charAct.innerText = char.actor;
            charRow.append(charAct);

            let charGender = document.createElement("li");
            charGender.className = "charInfo";
            charGender.innerText = char.gender;
            charRow.append(charGender);

            let charSpecies = document.createElement("li");
            charSpecies.className = "charInfo";
            charSpecies.innerText = char.species;
            charRow.append(charSpecies);

            let charHouse = document.createElement("li");
            charHouse.className = "charInfo";
            charHouse.innerText = char.house;
            charRow.append(charHouse);

            let charPat = document.createElement("li");
            charPat.className = "charInfo";
            charPat.innerText = char.patronus;
            charRow.append(charPat);

            return(charRow);
        }
    )

    // sends data from charList to HTML page
    charList.forEach(
        item => {
            document.getElementsByClassName("CharacterList")[0].appendChild(item);
        }
    )

    console.log(charList);
     
}
request.send();
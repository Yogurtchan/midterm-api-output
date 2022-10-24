// declare variables
// let loadedPages = 0;
// let charaProfile = [];
// URL navigation variables needed to display info on website
// var baseURL = 'https://swapi/dev/api/';
// var people = 'people/';
// var planets = 'planets/';
// var species = 'species/';
// var vehicles = 'vehicles/';
// var starships = 'starships/';


// loads Star Wars API pages per request to load all people listed in API
// const r = new XMLHttpRequest();
// function requestPage(pageNum, request){
    
//     request.open('GET', `https://swapi.dev/api/people/?page=${pageNum}`);
//     console.log("sdjkahfkljsdf");
//     request.onload = function(){
//         console.log("sdjkahfkljsdf");
//         var response = request.response;
//         var parsedData = JSON.parse(response);
//         // storing api results in charData
//         var charData = parsedData.results;
//         console.log(charData);
//         // filtered data from api results
//         let pageProfile = charData.map(
//             char => {return(
//                     {
//                             base: 'https://swapi.dev/api/',
//                             people: 'people/',
//                             planets: 'planets/',
//                             species: 'species/',
//                             vehicles: 'vehicles/',
//                             starships: 'starships/'

//                         }
//                     )
//                 }
//         );
//         // put page profiles inside character profiles
//         charaProfile.concat(pageProfile);
//         loadedPages++ ;
//         return true;
//     }
// }

// if(requestPage(1, r)){
//     console.log(loadedPages);
// }

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
                    image: char.image
                    
                }
            )
        }
    );

    var charList = charProfile.map(
        char => {return() => {
            let charRow = document.createElement("ul");
            let tempList = [];
            charRow.className = "character";
            // adds character info into empty array tempList as a list
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
        }
        }

    )

    // charList.forEach(
    //     item => {
    //         document.getElementsByClassName("CharacterList").appendChild(item);
    //     }
    // )
    console.log(charList);
    // console.log(charProfile);

    // let dataBank = [];
    // let charNum = 402;
   
    // for(let c = 0; c < charNum; c++){
    //     // declare variables
    //     let charRow = document.createElement("ul");
    //     let tempList = [];
    //     charRow.className = "character";

    //     // adds character info into empty array tempList as a list
    //     let charImg = document.createElement("img");
    //     charImg.className = "charImg";
    //     charImg.src = charProfile[c].image;
    //     tempList.push(charImg);

    //     let charName = document.createElement("li");
    //     charName.className = "charInfo";
    //     charName.innerText = charProfile[c].name;
    //     tempList.push(charName);

    //     let charAct = document.createElement("li");
    //     charAct.className = "charInfo";
    //     charAct.innerText = charProfile[c].actor;
    //     tempList.push(charAct);

    //     let charGender = document.createElement("li");
    //     charGender.className = "charInfo";
    //     charGender.innerText = charProfile[c].gender;
    //     tempList.push(charGender);

    //     let charSpecies = document.createElement("li");
    //     charSpecies.className = "charInfo";
    //     charSpecies.innerText = charProfile[c].species;
    //     tempList.push(charSpecies);
        
    //     let charHouse = document.createElement("li");
    //     charHouse.className = "charInfo";
    //     charHouse.innerText = charProfile[c].house;
    //     tempList.push(charHouse);

    //     let charPat = document.createElement("li");
    //     charPat.className = "charInfo";
    //     charPat.innerText = charProfile[c].patronus;
    //     tempList.push(charPat);
        
    //     // for each li in tempList, data in tempList is appended in charRow
    //     for(let i = 0; i < 7; i++){
    //         charRow.append(tempList[i]);
    //     }
    //     dataBank.push(charRow);
    // }

    // let charList = document.getElementsByClassName("CharacterList")[0];

    // for(let i = 0; i < charNum; i++){
    //     charList.appendChild(charRow);
    // }
     
}
request.send();

// name, species, house, wand, core, actor, image
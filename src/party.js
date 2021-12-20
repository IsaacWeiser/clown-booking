import { getDataCpy, fetchData } from "./dataAccess.js";

//needs to grab the db items and convert them into lis


export const partyReqs = () => {


    let html = "<ul>";

   
  let copy =getDataCpy();
  

    copy.map(obj => {
        html += `<li>${obj.childName}'s party. There will be ${obj.numberOfPeople} guests and the party is ${obj.lengthOfParty} hours long. Requested clown: ${obj.clown}</li><button id="deny--${obj.id}">deny party</button>`;
    })
    html += "</ul>";
    return html;
}
import { dataPost } from "./dataAccess.js";
import { partyReqs } from "./party.js";



export const inputForm = () => {
    return `
    <section id="form">
        <div class="field">
        <label class="label" for="childName">Child Name: </label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="parentName">Parent Name: </label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="attendees">How Many People are attending: </label>
        <input type="number" name="attendees" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="date">Date of Party</label>
        <input type="date" name="date" class="input" />
    </div>
    <div class="field">
        <label class="label" for="length">How Long is the party going to be</label>
        <input type="number" id="quantity" min="1" max="5" name="length" class="input" />
    </div>
    <div id="clownSelect">
    <label for="cars">Choose a clown:</label>
        <select name="clowns" id="clownChoices">
            <option class="clownOption" value="Buttons">Buttons</option>
            <option class="clownOption" value="Lollipop">Lollipop</option>
    </select>
    </div>
    <button id="submit">Submit</button>
    </section>
    <section id="requests">
    <div>
    <h1>Party Requests: </h1>
       ${partyReqs()}
       </div>
       </section>
    `;
}



//this event listener waits for you to hit submit and takes your input values and places them in a trans state and then pushes them to the db
document.addEventListener("click",(event) => {
    if (event.target.id === "submit" ) {
        let cName = document.querySelector("input[name='childName']").value;
        let pName = document.querySelector("input[name='parentName']").value;
        let attendees = document.querySelector("input[name='attendees']").value;
        let addy = document.querySelector("input[name='address']").value;
        let date = document.querySelector("input[name='date']").value;
        let length = document.querySelector("input[name='length']").value;
        var clownSelection = document.getElementById("clownChoices");
        var clownName = clownSelection.value;
        
        let tempObj = {
            childName: cName,
            parentName: pName,
            numberOfPeople: attendees,
            address: addy,
            dateOfParty: date,
            lengthOfParty: length,
            clown: clownName
        }

        dataPost(tempObj).then(()=>document.dispatchEvent(new CustomEvent("renderNeeded")))
    }
})
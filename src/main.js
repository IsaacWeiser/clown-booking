import { inputForm } from "./inputForm.js"
import { fetchData, deleteReservation } from "./dataAccess.js";

const mainContainer =document.querySelector('#mainC');


const render = () => {
    fetchData().then(()=>{
 return mainContainer.innerHTML= inputForm()})
 
}

render();

//listens for the submit button click custom event and re renders the page
document.addEventListener("renderNeeded", ()=> {
    render()
})


document.addEventListener("click", (event)=> {
    if (event.target.id.startsWith("deny"))
    {
        let [,idOfParty] = event.target.id.split("--");

        deleteReservation(idOfParty);
    }
})
 //this is our transient state where we will stage the data to be transfered
 let transState = {
     parties: []
 };
 
 // function that posts data to the db
export let dataPost = (inputObj) => {
    let fetchOptions = {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(inputObj)
    }

    return fetch("http://localhost:8088/partyRequests", fetchOptions).then(reply => reply.json);
}


//this function stores data into the trans state that is passed into it
const setTrans = (dataObj) => {
    transState.parties = dataObj;
}


//obtains the existing entries in the db and places them in the transState
export const fetchData = () => {
  return  fetch("http://localhost:8088/partyRequests").then(parties => parties.json()).then(partayReq => {
      console.log("fetch"); 
      transState.parties = partayReq;
      document.dispatchEvent(new CustomEvent("dataFetched"))
      return transState.parties;});
}

export const getDataCpy = () => {
    return transState.parties.map(party => ({...party}));
}


export const deleteReservation = (idOparty) => {
    const option = {method: "DELETE"};

    fetch(`http://localhost:8088/partyRequests/${idOparty}`, option).then(()=> document.dispatchEvent(new CustomEvent("renderNeeded")));
}
 

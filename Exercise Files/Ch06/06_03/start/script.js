// Old way of grabbing data
const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api =
      "http://api.open-notify.org/astros.json";
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () => {
      if (request.status === 200) {
        resolves(JSON.parse(request.response));
      } else {
        rejects(Error(request.statusText));
      }
    };
    request.onerror = (err) => rejects(err);
    request.send();
  });
};

spacePeople().then(
  (spaceData) => console.log(spaceData),
  (err) =>
    console.error(new Error("Can't load people"))
);

const api =
    "http://api.open-notify.org/astros.json";
fetch(api).then(console.log);
let dude1 = fetch(api).then((response) => response.json()).then(console.log);
console.log("dude1", dude1);
let dude2 = fetch(api).then((response) => response.json());
console.log("dude2", dude2);

console.log("------USING FETCH------");
// New way of grabbing data that is MUCH nicer
let getSpacePeople = (api) => fetch(api).then((res) => res.json());
getSpacePeople(api).then((data) => console.log("getSpacePeople", data));

let spaceNames = (api) =>
    getSpacePeople(api)
        .then((json) => json.people)
        .then((people) => people.map((person) => person.name))
        .then((names) => names.join(", "));
// This will return the Promise, not the actual embedded data
console.log("spaceNamesPromise", spaceNames(api))
// Here is how you actually print out the data from the Promise
spaceNames(api).then((string) => console.log("spaceNamesData:", string))

// If you really want to print out the list, because of the ASYNCHRONOUS nature, you need to do it like this:
// WAIT A MINUTE. This is an ES7 feature, NOT ES6, ouch...
// let response = await fetch(api);
// console.log("response", response.json());

// Alright, because of the EXTREMELY annoying behavior of ES6 (which they fix in ES7 by logically letting
// you "await" a fetch), you have to wrap the fetch inside an async function just to get it to work
async function printFetchData(api) {
  let spaceNamesList = []
  await spaceNames(api).then((names) => spaceNamesList = names);
  console.log("spaceNamesList:", spaceNamesList)
}
printFetchData(api);

// You can also do this to change the state in the future (obviously this is a precursor to using React)
// We have to do this because of ES6, but imagine a perfect world where we simply use "await"
async function changeFetchState(api) {
  let spaceNamesState = {
    data: [],
    updateData: (api) =>
        this.data = spaceNames(api)
  }
  console.log("WAITING spaceNamesState", spaceNamesState.data);
  await spaceNamesState.updateData(api);
  console.log("FETCHED spaceNamesState", spaceNamesState.data);
}
changeFetchState(api);

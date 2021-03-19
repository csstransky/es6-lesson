const spacePeople = (api) => {
    return new Promise((resolves, rejects) => {
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response));
            } else {
                rejects(Error(request.statusText));
            }
        };
        request.onerror = (error) => rejects(error);
        request.send();
    });
};
const api = "http://api.open-notify.org/astros.json";
const printApi = (spaceData) => console.log(spaceData);
const printError = (error) => console.error(new Error("Can't load people"));
// Promise *should* be happy and JSON is printed
spacePeople(api).then(printApi, printError);

// Promise is not kept and error is printed
const badApi = "uh oh";
spacePeople(badApi).then(printApi, printError);
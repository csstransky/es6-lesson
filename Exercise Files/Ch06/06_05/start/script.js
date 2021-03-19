const githubRequest = async (login) => {
    const api = `https://api.github.com/users/${login}`
    let response = await fetch(api);
    let json = await response.json();
    let summary = `${json.name}, ${json.company}`
    console.log(summary)
}
githubRequest("eveporcello");
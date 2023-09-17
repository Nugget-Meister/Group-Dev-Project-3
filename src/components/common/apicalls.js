const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q"

const searchRequest = (query) => {
    return fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.objectIDs)
    .catch(err => console.error(err))
}


export {
    searchRequest
}
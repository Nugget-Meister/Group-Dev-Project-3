const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="
const API_URL_OBJECT = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

const searchRequest = (query) => {
    // console.log(query)

    let promises = []

    if(query.department1 != ''){
        promises.push(fetch(`${API_URL}${query.text}${query.department1}`).then(res => res.json(), []).then(json => json.objectIDs))
    }
    if(query.department2 != ''){
        promises.push(fetch(`${API_URL}${query.text}${query.department2}`).then(res => res.json(), []).then(json => json.objectIDs))
    }
    if(query.department3 != ''){
        promises.push(fetch(`${API_URL}${query.text}${query.department3}`).then(res => res.json(), []).then(json => json.objectIDs))
    }

   return Promise.all(promises)
        .then((res) => res.flat())

}

const getObjects = (objectIDs) => {

    let promises = []

    objectIDs.map((objectID) => {
        promises.push(fetch(`${API_URL_OBJECT}${objectID}`).
        then(res => {
            return res.json()
        }, []))
    })

    return Promise.all(promises)
    

}


export {
    searchRequest,
    getObjects
}
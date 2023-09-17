const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="
// const API_URL_NO_SEARCH = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=cat&departmentId="

const searchRequest = (query) => {
    console.log(query)
    let promises = []

    if(query.department1 != ''){
        promises.push(fetch(`${API_URL}${query.text}${query.department1}`).then(res => res.json()).then(json => json.objectIDs))
    }
    if(query.department2 != ''){
        promises.push(fetch(`${API_URL}${query.text}${query.department2}`).then(res => res.json()).then(json => json.objectIDs))
    }
    if(query.department3 != ''){
        promises.push(fetch(`${API_URL}${query.text}${query.department3}`).then(res => res.json()).then(json => json.objectIDs))
    }

    Promise.all(promises)
    .then((res) => {
        console.log(res.flat())
    })

    // return fetch(`${API_URL}${query.text}${query.department1}`)
    // .then(res => res.json())
    // .then(json => console.log(json))
    // .then(json => json.objectIDs)
    // .catch(err => console.error(err))
}


export {
    searchRequest
}
import { departments } from "./departmentlist"

const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="
const API_URL_OBJECT = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

const API_URL_CHICAGO = "https://api.artic.edu/api/v1/artworks/search?q=sunflower&query[term][department_id]=PC-14"


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

const getObjects = (objectID) => {

    // let promises = []

    if(objectID){
        return fetch(`${API_URL_OBJECT}${objectID}`)
    .then(res => {
        return res.json()
    }, [])
    .catch(err => console.error(error))
    } else {
        console.error("An Object ID was not provided")
    }

    

    // objectIDs.map((objectID) => {
    //     promises.push(fetch(`${API_URL_OBJECT}${objectID}`).
    //     then(res => {
    //         return res.json()
    //     }, []))
    // })

    // return Promise.all(promises)


}

const searchRequest_Chicago = (query) => {
    const buildURL = (text, department) => {
       let base_url = 'https://api.artic.edu/api/v1/artworks/search?q='
       let dep_key = '&query[term][department_id]='
        return `${base_url}${text}${dep_key}${department}`
    }
    console.log(buildURL(query.text, query.department1))
}

export {
    searchRequest,
    getObjects,
    searchRequest_Chicago
}
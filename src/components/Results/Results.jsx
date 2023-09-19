import React, { useEffect, useState } from 'react';
import ImageResult from '../common/ImageResult';
import {Link} from 'react-router-dom'
import { getObjects } from '../common/apicalls';

const Results = ({
        searchResult, 
        savedFavorites, 
        updateSavedFavorites,
        cachedData,
        updateCachedData
    }) => {
        
        
    // searchResult = [203893]
    
    // cachedData = {
    //     "203893": {
    //         "objectID": 203893,
    //         "isHighlight": false,
    //         "accessionNumber": "64.101.1223",
    //         "accessionYear": "1964",
    //         "isPublicDomain": true,
    //         "primaryImage": "https://images.metmuseum.org/CRDImages/es/original/DP105758.jpg",
    //         "primaryImageSmall": "https://images.metmuseum.org/CRDImages/es/web-large/DP105758.jpg",
    //         "additionalImages": [
    //             "https://images.metmuseum.org/CRDImages/es/original/DP105759.jpg",
    //             "https://images.metmuseum.org/CRDImages/es/original/DP105760.jpg",
    //             "https://images.metmuseum.org/CRDImages/es/original/DP109944.jpg",
    //             "https://images.metmuseum.org/CRDImages/es/original/DP109945.jpg"
    //         ],
    //         "constituents": [
    //             {
    //                 "constituentID": 36702,
    //                 "role": "Artist",
    //                 "name": "Johannes Hannart (or Jan Hanat)",
    //                 "constituentULAN_URL": "",
    //                 "constituentWikidata_URL": "",
    //                 "gender": ""
    //             }
    //         ],
    //         "department": "European Sculpture and Decorative Arts",
    //         "objectName": "Mirror",
    //         "title": "Mirror",
    //         "culture": "",
    //         "period": "",
    //         "dynasty": "",
    //         "reign": "",
    //         "portfolio": "",
    //         "artistRole": "Artist",
    //         "artistPrefix": "",
    //         "artistDisplayName": "Johannes Hannart (or Jan Hanat)",
    //         "artistDisplayBio": "died 1709",
    //         "artistSuffix": "",
    //         "artistAlphaSort": "HANNART JOHANNES",
    //         "artistNationality": "",
    //         "artistBeginDate": "1609",
    //         "artistEndDate": "1709",
    //         "artistGender": "",
    //         "artistWikidata_URL": "",
    //         "artistULAN_URL": "",
    //         "objectDate": "ca. 1685–1700",
    //         "objectBeginDate": 1680,
    //         "objectEndDate": 1705,
    //         "medium": "Oak veneered with ebony; boxwood and ebonized boxwood; modern mirror glass",
    //         "dimensions": "66 x 39 in.  (167.6 x 99.1 cm)",
    //         "measurements": [
    //             {
    //                 "elementName": "Overall",
    //                 "elementDescription": null,
    //                 "elementMeasurements": {
    //                     "Height": 167.6,
    //                     "Width": 99.1
    //                 }
    //             }
    //         ],
    //         "creditLine": "Gift of Irwin Untermyer, 1964",
    //         "geographyType": "",
    //         "city": "",
    //         "state": "",
    //         "county": "",
    //         "country": "",
    //         "region": "",
    //         "subregion": "",
    //         "locale": "",
    //         "locus": "",
    //         "excavation": "",
    //         "river": "",
    //         "classification": "Woodwork-Furniture",
    //         "rightsAndReproduction": "",
    //         "linkResource": "",
    //         "metadataDate": "2023-02-07T04:46:51.34Z",
    //         "repository": "Metropolitan Museum of Art, New York, NY",
    //         "objectURL": "https://www.metmuseum.org/art/collection/search/203893",
    //         "tags": [
    //             {
    //                 "term": "Putti",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300250465",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q284865"
    //             },
    //             {
    //                 "term": "Swans",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300250103",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q34384"
    //             },
    //             {
    //                 "term": "Flowers",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300132399",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q506"
    //             },
    //             {
    //                 "term": "Coat of Arms",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300126352",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q14659"
    //             }
    //         ],
    //         "objectWikidata_URL": "https://www.wikidata.org/wiki/Q116310311",
    //         "isTimelineWork": false,
    //         "GalleryNumber": "551"
    //     },
    //     "436252": {
    //         "objectID": 436252,
    //         "isHighlight": false,
    //         "accessionNumber": "89.15.16",
    //         "accessionYear": "1889",
    //         "isPublicDomain": true,
    //         "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DP-25646-001.jpg",
    //         "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ep/web-large/DP-25646-001.jpg",
    //         "additionalImages": [],
    //         "constituents": [
    //             {
    //                 "constituentID": 161858,
    //                 "role": "Artist",
    //                 "name": "Anthony van Dyck",
    //                 "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500115190",
    //                 "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q150679",
    //                 "gender": ""
    //             }
    //         ],
    //         "department": "European Paintings",
    //         "objectName": "Painting",
    //         "title": "James Stuart (1612–1655), Duke of Richmond and Lennox",
    //         "culture": "",
    //         "period": "",
    //         "dynasty": "",
    //         "reign": "",
    //         "portfolio": "",
    //         "artistRole": "Artist",
    //         "artistPrefix": "",
    //         "artistDisplayName": "Anthony van Dyck",
    //         "artistDisplayBio": "Flemish, Antwerp 1599–1641 London",
    //         "artistSuffix": "",
    //         "artistAlphaSort": "Dyck, Anthony van",
    //         "artistNationality": "Flemish",
    //         "artistBeginDate": "1599",
    //         "artistEndDate": "1641",
    //         "artistGender": "",
    //         "artistWikidata_URL": "https://www.wikidata.org/wiki/Q150679",
    //         "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500115190",
    //         "objectDate": "ca. 1633–35",
    //         "objectBeginDate": 1633,
    //         "objectEndDate": 1635,
    //         "medium": "Oil on canvas",
    //         "dimensions": "85 x 50 1/4 in. (215.9 x 127.6 cm)",
    //         "measurements": [
    //             {
    //                 "elementName": "Overall",
    //                 "elementDescription": null,
    //                 "elementMeasurements": {
    //                     "Height": 215.9,
    //                     "Width": 127.6
    //                 }
    //             },
    //             {
    //                 "elementName": "Frame",
    //                 "elementDescription": null,
    //                 "elementMeasurements": {
    //                     "Depth": 12.7,
    //                     "Height": 241.3005,
    //                     "Width": 152.4003
    //                 }
    //             }
    //         ],
    //         "creditLine": "Marquand Collection, Gift of Henry G. Marquand, 1889",
    //         "geographyType": "",
    //         "city": "",
    //         "state": "",
    //         "county": "",
    //         "country": "",
    //         "region": "",
    //         "subregion": "",
    //         "locale": "",
    //         "locus": "",
    //         "excavation": "",
    //         "river": "",
    //         "classification": "Paintings",
    //         "rightsAndReproduction": "",
    //         "linkResource": "",
    //         "metadataDate": "2023-09-16T04:54:53.55Z",
    //         "repository": "Metropolitan Museum of Art, New York, NY",
    //         "objectURL": "https://www.metmuseum.org/art/collection/search/436252",
    //         "tags": [
    //             {
    //                 "term": "Men",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300025928",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q8441"
    //             },
    //             {
    //                 "term": "Portraits",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300015637",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q134307"
    //             },
    //             {
    //                 "term": "Dogs",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300265714",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q144"
    //             }
    //         ],
    //         "objectWikidata_URL": "https://www.wikidata.org/wiki/Q3937577",
    //         "isTimelineWork": true,
    //         "GalleryNumber": ""
    //     },
    //     "437526": {
    //         "objectID": 437526,
    //         "isHighlight": false,
    //         "accessionNumber": "1990.196",
    //         "accessionYear": "1990",
    //         "isPublicDomain": true,
    //         "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DP-25739-001.jpg",
    //         "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ep/web-large/DP-25739-001.jpg",
    //         "additionalImages": [],
    //         "constituents": [
    //             {
    //                 "constituentID": 162350,
    //                 "role": "Artist",
    //                 "name": "Peter Paul Rubens",
    //                 "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500002921",
    //                 "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q5599",
    //                 "gender": ""
    //             }
    //         ],
    //         "department": "European Paintings",
    //         "objectName": "Painting",
    //         "title": "A Forest at Dawn with a Deer Hunt",
    //         "culture": "",
    //         "period": "",
    //         "dynasty": "",
    //         "reign": "",
    //         "portfolio": "",
    //         "artistRole": "Artist",
    //         "artistPrefix": "",
    //         "artistDisplayName": "Peter Paul Rubens",
    //         "artistDisplayBio": "Flemish, Siegen 1577–1640 Antwerp",
    //         "artistSuffix": "",
    //         "artistAlphaSort": "Rubens, Peter Paul",
    //         "artistNationality": "Flemish",
    //         "artistBeginDate": "1577",
    //         "artistEndDate": "1640",
    //         "artistGender": "",
    //         "artistWikidata_URL": "https://www.wikidata.org/wiki/Q5599",
    //         "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500002921",
    //         "objectDate": "ca. 1635",
    //         "objectBeginDate": 1630,
    //         "objectEndDate": 1640,
    //         "medium": "Oil on wood",
    //         "dimensions": "24 1/4 x 35 1/2 in. (61.5 x 90.2 cm)",
    //         "measurements": [
    //             {
    //                 "elementName": "Overall",
    //                 "elementDescription": null,
    //                 "elementMeasurements": {
    //                     "Height": 61.6,
    //                     "Width": 90.2
    //                 }
    //             },
    //             {
    //                 "elementName": "Frame",
    //                 "elementDescription": null,
    //                 "elementMeasurements": {
    //                     "Depth": 7.62,
    //                     "Height": 78.7402,
    //                     "Width": 106.6802
    //                 }
    //             }
    //         ],
    //         "creditLine": "Purchase, The Annenberg Foundation, Mrs. Charles Wrightsman, Michel David-Weill, The Dillon Fund, Henry J. and Drue Heinz Foundation, Lola Kramarsky, Annette de la Renta, Mr. and Mrs. Arthur Ochs Sulzberger, The Vincent Astor Foundation, and Peter J. Sharp Gifts; special funds, gifts, and other gifts and bequests, by exchange, 1990",
    //         "geographyType": "",
    //         "city": "",
    //         "state": "",
    //         "county": "",
    //         "country": "",
    //         "region": "",
    //         "subregion": "",
    //         "locale": "",
    //         "locus": "",
    //         "excavation": "",
    //         "river": "",
    //         "classification": "Paintings",
    //         "rightsAndReproduction": "",
    //         "linkResource": "",
    //         "metadataDate": "2023-08-18T04:56:46.92Z",
    //         "repository": "Metropolitan Museum of Art, New York, NY",
    //         "objectURL": "https://www.metmuseum.org/art/collection/search/437526",
    //         "tags": [
    //             {
    //                 "term": "Hunting",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300239666",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q36963"
    //             },
    //             {
    //                 "term": "Deer",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300250308",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q685795"
    //             },
    //             {
    //                 "term": "Forests",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300387598",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q4421"
    //             },
    //             {
    //                 "term": "Dawn",
    //                 "AAT_URL": "http://vocab.getty.edu/page/aat/300343621",
    //                 "Wikidata_URL": "https://www.wikidata.org/wiki/Q11326182"
    //             }
    //         ],
    //         "objectWikidata_URL": "https://www.wikidata.org/wiki/Q20167163",
    //         "isTimelineWork": true,
    //         "GalleryNumber": ""
    //     },
    //     "648617": {
    //         "objectID": 648617,
    //         "isHighlight": false,
    //         "accessionNumber": "51.644.138(6)",
    //         "accessionYear": "1951",
    //         "isPublicDomain": false,
    //         "primaryImage": "",
    //         "primaryImageSmall": "",
    //         "additionalImages": [],
    //         "constituents": [
    //             {
    //                 "constituentID": 162290,
    //                 "role": "Artist",
    //                 "name": "Pierre Ranson",
    //                 "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500031549",
    //                 "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q21544490",
    //                 "gender": ""
    //             },
    //             {
    //                 "constituentID": 93987,
    //                 "role": "Engraver",
    //                 "name": "Etienne Claude Voysard",
    //                 "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500478514",
    //                 "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q3059325",
    //                 "gender": ""
    //             },
    //             {
    //                 "constituentID": 81468,
    //                 "role": "Publisher",
    //                 "name": "Esnauts et Rapilly",
    //                 "constituentULAN_URL": "",
    //                 "constituentWikidata_URL": "",
    //                 "gender": ""
    //             }
    //         ],
    //         "department": "Drawings and Prints",
    //         "objectName": "Print Ornament & Architecture",
    //         "title": "2e Suite de différens Attributs, Trophées et Groupes de Fleurs, Plate 6",
    //         "culture": "",
    //         "period": "",
    //         "dynasty": "",
    //         "reign": "",
    //         "portfolio": "",
    //         "artistRole": "Artist",
    //         "artistPrefix": "",
    //         "artistDisplayName": "Pierre Ranson",
    //         "artistDisplayBio": "French, Paris 1736–1786 Paris",
    //         "artistSuffix": "",
    //         "artistAlphaSort": "Ranson, Pierre",
    //         "artistNationality": "French",
    //         "artistBeginDate": "1736",
    //         "artistEndDate": "1786",
    //         "artistGender": "",
    //         "artistWikidata_URL": "https://www.wikidata.org/wiki/Q21544490",
    //         "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500031549",
    //         "objectDate": "ca. 1778",
    //         "objectBeginDate": 1773,
    //         "objectEndDate": 1783,
    //         "medium": "Engraving",
    //         "dimensions": "Plate: 11 × 8 11/16 in. (28 × 22 cm)\r\nSheet: 11 5/16 × 9 3/16 in. (28.8 × 23.4 cm)",
    //         "measurements": [
    //             {
    //                 "elementName": "Sheet",
    //                 "elementDescription": null,
    //                 "elementMeasurements": {
    //                     "Height": 28.8,
    //                     "Width": 23.4
    //                 }
    //             },
    //             {
    //                 "elementName": "Plate",
    //                 "elementDescription": null,
    //                 "elementMeasurements": {
    //                     "Height": 28,
    //                     "Width": 22
    //                 }
    //             }
    //         ],
    //         "creditLine": "Gift of the Estate of Ogden Codman, 1951",
    //         "geographyType": "",
    //         "city": "",
    //         "state": "",
    //         "county": "",
    //         "country": "",
    //         "region": "",
    //         "subregion": "",
    //         "locale": "",
    //         "locus": "",
    //         "excavation": "",
    //         "river": "",
    //         "classification": "Prints",
    //         "rightsAndReproduction": "",
    //         "linkResource": "",
    //         "metadataDate": "2023-02-21T04:47:13.28Z",
    //         "repository": "Metropolitan Museum of Art, New York, NY",
    //         "objectURL": "https://www.metmuseum.org/art/collection/search/648617",
    //         "tags": null,
    //         "objectWikidata_URL": "",
    //         "isTimelineWork": false,
    //         "GalleryNumber": ""
    //     }
    // }

    const [page, updatePage] = useState(1)
    const [selected, updateSelected] = useState(searchResult.slice(0,(4*page)))
    const [onScreen, updateOnScreen] = useState(<div>Bonk</div>)
    const changePage = () => {

    }
    
    const checkImageURL = (objectID) => {
        try {
            console.log("foundImage at", objectID)
            return cachedData[objectID].primaryImage
        } 
        catch {
            console.log(`Image not found @ ${objectID}, Aborting.`)
            return ""
        }
    }

    useEffect (() => {

        getObjects(selected)
        .then((res)=> {
          return res.map((object) => {
              return (
                <>
                    <h1>{object.objectID}</h1>
                    <ImageResult 
                        objectID={object.objectID}
                        URL={object.primaryImage || "/src/assets/noImg.jpeg"}
                        />
                </>
            )
         })
        })
        .then((html)=> {
           updateOnScreen(html) 
        })


    //         
    //      :    (
    //         <>
    //             <h1>An error has occured.</h1>
    //             <h2>Please return <Link to="/">home</Link> and try again.</h2>
    //         </>
    //             )
        
    // }
    } ,[])


    return (
        <div className='Results'>
            {onScreen}
        </div>
    );
}

export default Results;

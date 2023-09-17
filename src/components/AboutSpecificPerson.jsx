
const apiURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${45734}`;

	function AboutSpecificPerson() {
		fetch(apiURL)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				const artistInfo = data.constituents[0];
				const artistName = artistInfo.name;
				const artistWikidataURL = artistInfo.constituentWikidata_URL;
	
			
				console.log("Artist Name:", artistName);
				console.log("Wikidata URL:", artistWikidataURL);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}
	
	AboutSpecificPerson();
    


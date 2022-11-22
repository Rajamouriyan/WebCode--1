document.body.innerHTML=`

<div class="heading-container">
<h1> Brewery List</h1>


<div class="side-heading">
<h1> Welcome to Portal</h1>
<input type="text" id="searchbar" placeholder="Search here....">

<div id="maincontainer" class="main-container"></div>
</div>
`


const getBreweryData=async ()=>{
        try {
            const data=await fetch("https://api.openbrewerydb.org/breweries");
            const breweryobj=await data.json();
            maincontainer.innerHTML="";
            breweryobj.forEach((brewery) => {
                displayBreweryData(brewery)
            });
        } catch (error) {
            maincontainer.innerHTML="Something wrong";
        }
}


getBreweryData();

const displayBreweryData=(obj)=>{
    maincontainer.innerHTML+=`
    <div  class="container">
    <h3 class="sample"><span>Brewery Name: ${obj.name}</span></h3> 
    <h3 class="sample"><span>Brewery Type: ${obj.brewery_type}</span></h3>
    <h3 class="sample"><span>Brewery Address: ${obj.street}</span></h3>
    <h3 class="sample"><span>City: ${obj.city}</span></h3>
    <h3 class="sample"><span>State: ${obj.state}</span></h3>
    <h3 class="sample"><span>Brewery Website: ${obj.website_url}</span></h3>
    <h3 class="sample"><span>Brewery Contact: ${obj.phone}</span></h3>

    </div>
    `
}

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    document.getElementById("searchBar").innerHTML="";
    const filteredCharacters = brewery.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.brewery_type.toLowerCase().includes(searchString) ||
            character.street.toLowerCase().includes(searchString) ||
            character.city.toLowerCase().includes(searchString) ||
            character.state.toLowerCase().includes(searchString) ||
            character.website_url.toLowerCase().includes(searchString) ||
            character.phone.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});









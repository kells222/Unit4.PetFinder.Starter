const pets = require("../data");

// const searchBtn = document.getElementsById('ownerBtn');
// const ownerInput= document.getElementById('owner');
// const petNameInput = document.getElementById('petName');
// const searchResult =  document.getElementById('result');


ownerBtn.addEventListener('click', async () => {
    const owner = pets.value.owner;
    try {
        const response = await fetch (`/api/v1/pets/owner?owner=${owner}`);
        const pet = response.json();

        if (response.ok) {
            searchResult.innerHTML = `
            <p>Name: ${pet.name}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Owner: ${pet.owner}</p>
            `;
            // searchResult.appendChild()
        } else {
            searchResult=innerHTML = 'pet not found by owner'
        }

    } catch (error) {
        console.error('error fetching owner', error)
    }


})
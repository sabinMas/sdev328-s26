
//on start
loadMonuments();

//assign submit handler
const form = document.querySelector("#monument-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
    event.preventDefault();

    //get our form values
    const name = document.querySelector("#name").value;
    const yearCompleted = document.querySelector("#yearCompleted").value;
    const type = document.querySelector("#type").value;
    const heightFeet = document.querySelector("#heightFeet").value;
    const theme = document.querySelector("#theme").value;

    const formValues = {
        name,
        yearCompleted,
        type,
        heightFeet,
        theme
    }
    console.log(formValues);

    const url = "http://localhost:8000/api/monuments";
    const config = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
    }
    const response = await fetch(url, config);
    console.log(response);
    console.log("Form submitted!");
}

//connect to API + gather data
async function loadMonuments() {
    const url = "http://localhost:8000/api/monuments";
    const config = {
        method: "get"
    }
    const response = await fetch(url, config);
    if (response.ok) {
        //converts response body to JSON text
        const monuments = await response.json();

        showMonuments(monuments);
    } else {
        showError();
    }
}

function showError() {
    
}

//update the page with monuments
function showMonuments(mons) {
    addMonumentCard(monument, grid);
    
    // const grid = document.querySelector("#monuments-grid");

    // for (let monument of mons) {
    //     const { name, yearCompleted, type } = monument;

    //     const monumentCard = `
    //         <div class="monument">
    //             <h2>${name}</h2>
    //             <hr>
    //             <p class="year">Year: ${yearCompleted}</p>
    //             <p>Type: ${type}</p>
    //         </div>
    //     `

    //     grid.innerHTML += monumentCard;
    // }
}
function addMonumentCard(monument,grid){
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const hr = document.createElement("hr")
    const pYear = document.createElement("p")
    const pType = document.createElement("p")
}

//on start
loadMonuments();

//assign submit handler
const form = document.querySelector("#monument-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
    event.preventDefault();

    const button = document.querySelector("button");
    if (button.textContent === "Add") {
        await fetchMonument("post");
        //TODO add a new monument card
    } else if (button.textContent === "Edit") {
        await fetchMonument("put");
        //TODO update the monument card you edited
    }
}

async function fetchMonument(httpVerb) {
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

    const url = "http://localhost:8000/api/monuments";
    const config = {
        method: httpVerb,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
    }
    const response = await fetch(url, config);
    console.log(response);
    console.log(`Form submitted (${httpVerb})!`);
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

    for (let monument of mons) {
        addMonumentCard(monument, grid);
        // const { name, yearCompleted, type } = monument;
        // const monumentCard = `
        //     <div class="monument">
        //         <h2>${name}</h2>
        //         <hr>
        //         <p class="year">Year: ${yearCompleted}</p>
        //         <p>Type: ${type}</p>
        //     </div>
        // `
    }
}

function addMonumentCard(monument, grid) {
    //create our elements
    const { name, yearCompleted, type } = monument;
    const [div, h2, hr, pYear, pType, ulLinks, liEdit, liDelete, aEdit, aDelete] = 
          createElements(["div", "h2", "hr", "p", "p", "ul", "li", "li", "a", "a"]);

    //configure them
    div.className = "monument";
    h2.textContent = name;
    pYear.className = "year";
    pYear.textContent = `Year: ${yearCompleted}`;
    pType.textContent = `Type: ${type}`;

    ulLinks.className = "links";
    aEdit.textContent = "Edit";
    aEdit.href = "#";
    aDelete.textContent = "Delete";
    aDelete.href = "#";
    
    //connect our list of links
    liEdit.appendChild(aEdit);
    liDelete.appendChild(aDelete);
    appendAll(ulLinks, [liEdit, liDelete]);

    liEdit.onclick = (event) => {
        event.preventDefault(); //stop the link behavior
        editMonument(monument);
    }

    //add them to the dom
    appendAll(div, [h2, hr, pYear, pType, ulLinks]);

    grid.appendChild(div);
}

function editMonument(monument) {
    console.log(monument);
    const { name, yearCompleted, type } = monument;

    document.querySelector("#name").value = name;
    document.querySelector("#yearCompleted").value = yearCompleted;
    document.querySelector("#type").value = type;
    document.querySelector("#heightFeet").value = "";
    document.querySelector("#theme").value = "";

    document.querySelector("button").textContent = "Edit";
}

function deleteMonument(monument) {

}

function appendAll(parent, children) {
    for (const child of children) {
        parent.appendChild(child);
    }
}

function createElements(tags) {
    const elems = [];
    for (const tag of tags) {
        elems.push(document.createElement(tag));
    }
    return elems;
}
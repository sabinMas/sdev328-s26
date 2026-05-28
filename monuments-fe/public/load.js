
//on start
loadMonuments();

//assign submit handler
const form = document.querySelector("#monument-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
    event.preventDefault();

    const button = document.querySelector("button");
    if (button.textContent === "Add") {
        const monumentData = await fetchMonument("post");
        addMonumentCard(monumentData);
    } else if (button.textContent === "Edit") {
        const monumentData = await fetchMonument("put");
        updateMonumentCard(monumentData);
    }
}

function updateMonumentCard(monument) {
    const card = document.querySelector(`#${slugify(monument.name)}`);
    console.log(card);

    // const h2 = card.querySelector("h2");
    const pYear = card.querySelector("p.year");
    const pType = card.querySelector("p.type");

    // h2.textContent = monument.name;
    pYear.textContent = `Year: ${monument.yearCompleted}`;
    pType.textContent = `Type: ${monument.type}`;
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

    //return values saved/updated so we can update the UI elsewhere
    return formValues;
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
    for (let monument of mons) {
        addMonumentCard(monument);
    }
}

function slugify(monumentName) {
    return monumentName.replaceAll(" ", "-");
}

function addMonumentCard(monument) {
    const grid = document.querySelector("#monuments-grid");

    //create our elements
    const { name, yearCompleted, type } = monument;
    const [div, h2, hr, pYear, pType, ulLinks, liEdit, liDelete, aEdit, aDelete] = 
        createElements(["div", "h2", "hr", "p", "p", "ul", "li", "li", "a", "a"]);

    //configure them
    div.id = slugify(name); //set the name as the id
    div.className = "monument";
    h2.textContent = name;
    pYear.className = "year";
    pYear.textContent = `Year: ${yearCompleted}`;
    pType.className = "type";
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
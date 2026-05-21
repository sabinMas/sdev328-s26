const data = [
    {
        "name": "Statue of Liberty",
        "location": { "city": "New York", "state": "NY" },
        "yearCompleted": 1886,
        "type": "National Monument",
        "heightFeet": 305,
        "theme": "Freedom"
    },
    {
        "name": "Mount Rushmore",
        "location": { "city": "Keystone", "state": "SD" },
        "yearCompleted": 1941,
        "type": "Sculpture",
        "heightFeet": 60,
        "theme": "Presidential Legacy"
    },
    {
        "name": "Lincoln Memorial",
        "location": { "city": "Washington", "state": "DC" },
        "yearCompleted": 1922,
        "type": "Memorial",
        "heightFeet": 99,
        "theme": "Unity and Leadership"
    },
    {
        "name": "Washington Monument",
        "location": { "city": "Washington", "state": "DC" },
        "yearCompleted": 1884,
        "type": "Obelisk",
        "heightFeet": 555,
        "theme": "Founding Leadership"
    },
    {
        "name": "Gateway Arch",
        "location": { "city": "St. Louis", "state": "MO" },
        "yearCompleted": 1965,
        "type": "Arch",
        "heightFeet": 630,
        "theme": "Westward Expansion"
    },
    {
        "name": "Jefferson Memorial",
        "location": { "city": "Washington", "state": "DC" },
        "yearCompleted": 1943,
        "type": "Memorial",
        "heightFeet": 129,
        "theme": "Democracy and Philosophy"
    },
    {
        "name": "Vietnam Veterans Memorial",
        "location": { "city": "Washington", "state": "DC" },
        "yearCompleted": 1982,
        "type": "Memorial",
        "heightFeet": 10,
        "theme": "Remembrance and Sacrifice"
    },
    {
        "name": "Korean War Veterans Memorial",
        "location": { "city": "Washington", "state": "DC" },
        "yearCompleted": 1995,
        "type": "Memorial",
        "heightFeet": 19,
        "theme": "Service and Sacrifice"
    },
    {
        "name": "Martin Luther King Jr. Memorial",
        "location": { "city": "Washington", "state": "DC" },
        "yearCompleted": 2011,
        "type": "Memorial",
        "heightFeet": 30,
        "theme": "Civil Rights"
    },
    {
        "name": "Crazy Horse Memorial",
        "location": { "city": "Custer", "state": "SD" },
        "yearCompleted": null,
        "type": "Sculpture",
        "heightFeet": 563,
        "theme": "Native American Heritage"
    },
    {
        "name": "Four Corners Monument",
        "location": { "city": "Teec Nos Pos", "state": "AZ" },
        "yearCompleted": 1931,
        "type": "Geographic Marker",
        "heightFeet": 3,
        "theme": "Geography"
    },
    {
        "name": "Bunker Hill Monument",
        "location": { "city": "Boston", "state": "MA" },
        "yearCompleted": 1843,
        "type": "Obelisk",
        "heightFeet": 221,
        "theme": "Revolutionary War"
    },
    {
        "name": "Alamo Cenotaph",
        "location": { "city": "San Antonio", "state": "TX" },
        "yearCompleted": 1940,
        "type": "Memorial",
        "heightFeet": 60,
        "theme": "Texas Independence"
    },
    {
        "name": "Devils Tower",
        "location": { "city": "Hulett", "state": "WY" },
        "yearCompleted": null,
        "type": "Natural Monument",
        "heightFeet": 867,
        "theme": "Geology and Nature"
    },
    {
        "name": "Perry's Victory and International Peace Memorial",
        "location": { "city": "Put-in-Bay", "state": "OH" },
        "yearCompleted": 1915,
        "type": "Column",
        "heightFeet": 352,
        "theme": "Peace and War of 1812"
    },
    {
        "name": "USS Arizona Memorial",
        "location": { "city": "Honolulu", "state": "HI" },
        "yearCompleted": 1962,
        "type": "Memorial",
        "heightFeet": 184,
        "theme": "World War II Remembrance"
    },
    {
        "name": "Fort McHenry National Monument",
        "location": { "city": "Baltimore", "state": "MD" },
        "yearCompleted": 1800,
        "type": "Historic Site",
        "heightFeet": null,
        "theme": "War of 1812"
    },
    {
        "name": "Golden Spike Monument",
        "location": { "city": "Promontory", "state": "UT" },
        "yearCompleted": 1942,
        "type": "Historic Marker",
        "heightFeet": 43,
        "theme": "Railroad Expansion"
    },
    {
        "name": "Stonewall National Monument",
        "location": { "city": "New York", "state": "NY" },
        "yearCompleted": 2016,
        "type": "National Monument",
        "heightFeet": null,
        "theme": "Civil Rights"
    },
    {
        "name": "Wounded Knee Memorial",
        "location": { "city": "Wounded Knee", "state": "SD" },
        "yearCompleted": 1903,
        "type": "Memorial",
        "heightFeet": 15,
        "theme": "Native American History"
    }
]

export const allMonuments = () => {
    return data;
}

export const addMonument = mon => {
    //validate the input...
    
    data.push(mon);
}

export const updateMonument = updatedMon => {
    //how to find which monument this is?
    const foundMon = data.find(el => el.name === updatedMon.name);

    //did I find the monument?
    if (foundMon) {
        //update the monument found...
        foundMon.yearCompleted = updatedMon.yearCompleted;
        foundMon.type = updatedMon.type;
        foundMon.height = updatedMon.height;
        foundMon.theme = updatedMon.theme;

        return true;
    } else {
        return false;
    }
}
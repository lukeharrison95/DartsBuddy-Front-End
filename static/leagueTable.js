







function createLeagueTable() {
    axios.get(PATH + "getTable").then(res =>  {
        res.data.rows
        .forEach(player => {
            showPlayer(player);
         });
    });
}


function showPlayer(data) {
    const row = document.createElement("tr");
    row.className = "table-dark";
    leagueBody.appendChild(row);

    const cell1 = document.createElement("th");

    const playername = document.createTextNode(data.name);
    cell1.appendChild(playername);
    row.appendChild(cell1);

    

    const cell3 = document.createElement("td");
    let wins = document.createTextNode(data.wins);
    cell3.appendChild(wins);
    row.appendChild(cell3);

    const cell4 = document.createElement("td");
    let draws = document.createTextNode(data.draws);
    cell4.appendChild(draws);
    row.appendChild(cell4);

    const cell5 = document.createElement("td");
    let losses = document.createTextNode(data.losses);
    cell5.appendChild(losses);
    row.appendChild(cell5);

    const cell6 = document.createElement("td");
    let points = document.createTextNode(data.points);
    cell6.appendChild(points);
    row.appendChild(cell6);
}
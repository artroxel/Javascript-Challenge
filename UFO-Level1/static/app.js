var tableData = data;

for (var i = 0; i < tableData.length; i++) {
    console.log(tableData[i]);
};

var Columns = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];

var tbody = d3.select("tbody");
tableData.forEach(function(newUFO) {
    console.log(newUFO);
    var tableRow = tbody.append("tr");
    Object.entries(newUFO).forEach(function([key, value]) {
        console.log(key, value);
    });
});

var tbody = d3.select("tbody");
tableData.forEach(function(newUFO) {
    console.log(newUFO);
    var tableRow = tbody.append("tr");
    Object.entries(newUFO).forEach(function([key, value]) {
        console.log(key, value);
        
        var cell = tableRow.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var dateTime = d3.select("#datetime");

button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = dateTime
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);
    console.log(filteredData);

    tbody.html("");

}
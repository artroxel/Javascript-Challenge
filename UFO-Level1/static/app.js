var tableData = data;

for (var i = 0; i < tableData.length; i++) {
    console.log(tableData[i]);
};

var Columns = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];

var tbody = d3.select("tbody");
tableData.forEach(function(newUFO) {
    console.log(newUFO);
    var tableRow = tbody.append("tr");
    Columns.forEach(Column => tableRow.append("td").text(newUFO[Column])
    )
});





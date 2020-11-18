// From data.js
var tableData = data;

// References
var textBody = d3.select("tbody");
var filter = d3.select("#filter-btn");
var selectDate = d3.select("#datetime");
var selectCity = d3.select("#city");
// var filterDate = 0;

// Import Data to HTML
tableData.forEach(sighting => {
    
    // For Each Incident, Append Table Row
    var row = textBody.append("tr");

    // Append Each Object of Row as Table Data
    Object.entries(sighting).forEach(([key, value]) => {
        var column = textBody.append("td");
        column.text(value)
    })
});

// Set Up Filter Search
filter.on("click", () => {

    // Prevent Constant Refresh
    d3.event.preventDefault();

    // Date Entered as a Value
    var inputDate = selectDate.property("value").trim();

    // Specify How to Filter Date
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    // Body Information
    textBody.html("");

    // RESPONSE
    let response = {
        filterDate
    }

    // If Date is NOT Blank, Append
    if (response.filterDate.length !== 0) {
        uploadData(filterDate);
    }

    // If Date is NOT Valid
    else {
        textBody.append("tr").append("td").text("No Sightings Found.")
    }


})
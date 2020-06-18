var tableData = data;

// YOUR CODE HERE!
function tableCreate(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoEntry) => {
        var row = tbody.append("tr");
        Object.entries(ufoEntry).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function deleteEntry() {
    var tbody = d3.select("tbody")
    tbody.selectAll("tr").remove()
};

console.log(tableData);
tableCreate(tableData);

var button = d3.select("#filter-btn");

//Select the form
var formvalue = d3.select("#formid");

// Create event handlers 
button.on("click", runEnter);
formvalue.on("submit", runEnter)

//form.on("submit", runEnter);
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime").property("value");

    deleteEntry();

var filteredData;
    if (dateInput === "" ) {
             filteredData = tableData;
                console.log(filteredData);
            } else {
             filteredData = tableData.filter(ufoSightings =>
                    ufoSightings.datetime === dateInput);
                    console.log(filteredData);
                };


    console.log(dateInput);
    tableCreate(filteredData);

};






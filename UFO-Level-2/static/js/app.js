// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(sighting => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");
// var inputDate = d3.select("#datetime").property("value");
// .property("value");
// var inputState = d3.select("#state").property("value");
// var inputCountry = d3.select("#country").property("value");
// var inputShape = d3.select("#shape").property("value");

button.on("click", function() {
  var inputDate = d3.select("#datetime");
  var dateValue = inputDate.property("value");
  // if (dateValue !== "") {
  var dateFilter = tableData.filter(
    tableData => tableData.datetime === dateValue
  );

  var filter = d3.select("tbody");
  filter.html("");

  dateFilter.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  // if (inputCity !== "") {
  var inputCity = d3.select("#city");
  var cityValue = inputCity.property("value");

  var cityFilter = tableData.filter(tableData => tableData.city === cityValue);

  var filter = d3.select("tbody");
  filter.html("");

  cityFilter.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  //   if (inputState !== "") {
  var inputState = d3.select("#state");
  var stateValue = inputState.property("value");

  var stateFilter = tableData.filter(
    tableData => tableData.state === stateValue
  );

  var filter = d3.select("tbody");
  filter.html("");

  stateFilter.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //   if (inputCountry !== "") {
  var inputCountry = d3.select("#country");
  var countryValue = inputCountry.property("value");

  var countryFilter = tableData.filter(
    tableData => tableData.country === countryValue
  );

  var filter = d3.select("tbody");
  filter.html("");

  countryFilter.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  //   if (inputShape !== "") {
  var inputShape = d3.select("#shape");
  var shapeValue = inputShape.property("value");

  var shapeFilter = tableData.filter(
    tableData => tableData.shape === shapeValue
  );

  var filter = d3.select("tbody");
  filter.html("");

  shapeFilter.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

//   // var filter = d3.select("tbody");
//   // filter.html("");

// //   filteredData.forEach(sighting => {
// //     var row = tbody.append("tr");
// //     Object.entries(sighting).forEach(([key, value]) => {
// //       var cell = row.append("td");
// //       cell.text(value);
// //     });
// //   });
// // });

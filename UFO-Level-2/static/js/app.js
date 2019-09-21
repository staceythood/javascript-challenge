// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

tableData.forEach(sighting => {
  let row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    let cell = row.append("td");
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
  // var inputDate = d3.select("#datetime");
  // var dateValue = inputDate.property("value");
  // // if (dateValue !== "") {
  // var dateFilter = tableData.filter(
  //   tableData => tableData.datetime === dateValue
  // );

  // var filter = d3.select("tbody");
  // filter.html("");

  // dateFilter.forEach(sighting => {
  //   var row = tbody.append("tr");
  //   Object.entries(sighting).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
  // if (inputCity !== "") {
  // var inputCity = d3.select("#city");
  // var cityValue = inputCity.property("value");

  // var cityFilter = tableData.filter(tableData => tableData.city === cityValue);

  // var filter = d3.select("tbody");
  // filter.html("");

  // cityFilter.forEach(sighting => {
  //   var row = tbody.append("tr");
  //   Object.entries(sighting).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
  //   if (inputState !== "") {
  // var inputState = d3.select("#state");
  // var stateValue = inputState.property("value");

  // var stateFilter = tableData.filter(
  //   tableData => tableData.state === stateValue
  // );

  // var filter = d3.select("tbody");
  // filter.html("");

  // stateFilter.forEach(sighting => {
  //   var row = tbody.append("tr");
  //   Object.entries(sighting).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });

  //   if (inputCountry !== "") {
  // var inputCountry = d3.select("#country");
  // var countryValue = inputCountry.property("value");

  // var countryFilter = tableData.filter(
  //   tableData => tableData.country === countryValue
  // );

  // var filter = d3.select("tbody");
  // filter.html("");

  // countryFilter.forEach(sighting => {
  //   var row = tbody.append("tr");
  //   Object.entries(sighting).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
  //   if (inputShape !== "") {
  // var inputShape = d3.select("#shape");
  // var shapeValue = inputShape.property("value");

  // var shapeFilter = tableData.filter(
  //   tableData => tableData.shape === shapeValue
  // );

  // var filter = d3.select("tbody");
  // filter.html("");

  // shapeFilter.forEach(sighting => {
  //   var row = tbody.append("tr");
  //   Object.entries(sighting).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
  let filter = {
    date: Date.parse(d3.select("#datetime").node().value),
    city: d3.select("#city").node().value,
    state: d3.select("#state").node().value,
    country: d3.select("#country").node().value,
    shape: d3.select("#shape").node().value
  };

  console.log(filter);

  filteredData = data.filter(function(d) {
    for (let key in filter) {
      if (d[key] === "null") return false;
    }
    return true;
  });

  console.log(filteredData);
  // filterArray = [
  //   sight => sight.datetime === dateValue,
  //   sight => sight.city === cityValue,
  //   sight => sight.state === stateValue,
  //   sight => sight.country === countryValue,
  //   sight => sight.shape === shapeValue
  // ];

  // filterArray.forEach(f => (data = data.filter(f)));
  d3.select("tbody").remove();
  console.log("gone");
  d3.select("#ufo-table").append("tbody");
  console.log("back");
  var filter2 = d3.select("tbody");
  // filter2.html("");

  filteredData.forEach(sighting => {
    let row = filter2.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
});

// from data.js
let tableData = data;

// select table body
let tbody = d3.select("tbody");

tableData.forEach(sighting => {
  let row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
  var inputDate = d3.select("#datetime");
  var dateValue = inputDate.property("value");
  if (dateValue !== null) {
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
  } else {
    return false;
  }

  var inputCity = d3.select("#city");
  var cityValue = inputCity.property("value");
  if (inputCity !== null) {
    var cityFilter = tableData.filter(
      tableData => tableData.city === cityValue
    );
    var filter = d3.select("tbody");
    filter.html("");

    cityFilter.forEach(sighting => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  } else {
    return false;
  }

  var inputState = d3.select("#state");
  var stateValue = inputState.property("value");
  if (inputState !== null) {
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
  } else {
    return false;
  }

  var inputCountry = d3.select("#country");
  var countryValue = inputCountry.property("value");
  if (inputCountry !== null) {
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
  } else {
    return false;
  }

  var inputShape = d3.select("#shape");
  var shapeValue = inputShape.property("value");
  if (inputShape !== null) {
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
  } else {
    return false;
  }
});
// let filter = {
//   date: Date.parse(d3.select("#datetime").node().value),
//   city: d3.select("#city").node().value,
//   state: d3.select("#state").node().value,
//   country: d3.select("#country").node().value,
//   shape: d3.select("#shape").node().value
// };

// console.log(filter);

// filteredData = tableData.filter(function(d) {
//   for (let key in filter) {
//     if (d[key] === "null" || d[key] != filter[key]) return false;
//   }
//   return true;
// });

// let inputDate = d3.select("#datetime");
// let dateValue = inputDate.property("value");
// let cityInput = d3.select("#city");
// let cityValue = cityInput.property("value");
// let stateInput = d3.select("#state");
// let stateValue = stateInput.property("value");
// let countryInput = d3.select("#country");
// let countryValue = countryInput.property("value");
// let shapeInput = d3.select("#shape");
// let shapeValue = shapeInput.property("value");

// let filterArray = [];

// if (dateValue.length > 0) {
//   filterArray.push(tableData => tableData.datetime === dateValue);
// }
// if (cityValue.length > 0) {
//   filterArray.push(tableData => tableData.city === cityValue);
// }
// if (stateValue.length > 0) {
//   filterArray.push(tableData => tableData.state === stateValue);
// }
// if (countryValue.length > 0) {
//   filterArray.push(tableData => tableData.country === countryValue);
// }
// if (shapeValue.length > 0) {
//   filterArray.push(tableData => tableData.shape === shapeValue);
// }
// console.log(filterArray);

// filteredData = filterArray.forEach(f => (tableData = tableData.filter(f)));

// console.log(filteredData);
// // }

// filterArray.forEach(f => (data = data.filter(f)));
// d3.select("tbody").remove();
// console.log("gone");
// d3.select("#ufo-table").append("tbody");
// console.log("back");
//   let table = d3.select("tbody");
//   table.html("");

//   filteredData.forEach(sighting => {
//     let row = table.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//       let cell = row.append("td");
//       cell.text(value);
//     });
//   });
// });

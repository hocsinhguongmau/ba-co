/**
 * Build yearly technology stats
 *
 * @param {object} techStats StackOverfow stats
 * @returns {object} Year by year stats of technologies mentioned in StackOverflow
 */
function buildYearlyTechStats (techStats) {
  var builtStats = new Object();
  for (var key in techStats) {
    var storedArray = [];
    for(var tech in techStats[key]){
      if (tech.includes("current")) {
        storedArray.push(techStats[key][tech]);
      }
    }
    builtStats[key] = Object.assign({}, ...storedArray);
  }
  return builtStats;
}

/**
 * Update table contents
 *
 * @param {HTMLTableElement} table DOM element for the table
 * @param {object} yearlyTechStats Year by year stats of technologies mentioned in StackOverflow
 * @param {Array<string>} selectedTechs Technologies selected
 * @param {number} firstYear First year of data selected
 * @param {number} lastYear Last year of data selected
 */
function updateTable (table, yearlyTechStats, selectedTechs, firstYear, lastYear) {
  var headings = ["Technology"];
  var yearDuration = lastYear - firstYear;
  for(var i = 0; i <= yearDuration; i ++){
    headings.push(firstYear + i);
  }
  table.getElementsByTagName("thead")[0].innerHTML = constructTableHeadHtml(headings);
  var rowData = buildRowData (yearlyTechStats, selectedTechs, firstYear, lastYear);
  table.getElementsByTagName("tbody")[0].innerHTML = constructTableRowsHtml(rowData);
}

/**
 * Build row data to be shown in a table
 *
 * @param {object} yearlyTechStats Year by year stats of technologies mentioned in StackOverflow
 * @param {Array<string>} selectedTechs Technologies selected
 * @param {number} firstYear First year of data selected
 * @param {number} lastYear Last year of data selected
 * @returns {Array<string|number>}
 */
function buildRowData (yearlyTechStats, selectedTechs, firstYear, lastYear) {
  var row = [];
  var rows = [];
  for(var i = 0; i < selectedTechs.length; i ++){
    row.push(selectedTechs[i])
    for(var j = 0; j <= lastYear - firstYear; j ++){
      var yearStat = yearlyTechStats[firstYear + j][selectedTechs[i]];
      if (yearStat === undefined){
        yearStat = 0;
      }
      row.push(yearStat);
    }
    rows.push(row);
    row = [];
  }
  return rows;
}

/**
 * Get HTML of table rows
 *
 * @param {Array<string|number>} rowData
 * @returns {string} HTML of the table rows
 */
function constructTableRowsHtml (rowData) {
  var rows = "";
  var row = "";
  for(var i = 0; i < rowData.length; i ++){
    row = "<tr>";
    for(var j = 0; j < rowData[i].length; j ++){
      row += `<td>${rowData[i][j]}</td>`
    }
    row += "</tr>";
    rows += row;
  }
  
  return rows;
}

/**
 * Get HTML of table heading row
 *
 * @param {Array<string|number>} headings Table headings
 * @returns {string} HTML of the heading row
 */
function constructTableHeadHtml (headings) {
  var heading = "<tr>";
  for(var i = 0; i < headings.length; i ++){
    heading += `<th>${headings[i]}</th>`
  }
  heading += "</tr>"
  return heading;
}

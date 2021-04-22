/**
 * Build row data to be shown in a table
 *
 * @param {object} yearlyTechStats Year by year stats of technologies mentioned in StackOverflow
 * @param {Array<string>} selectedTechs Technologies selected
 * @param {number} firstYear First year of data selected
 * @param {number} lastYear Last year of data selected
 * @returns {Array<string|number>}
 */
function buildRowData(yearlyTechStats, selectedTechs, firstYear, lastYear) {
	// TODO: Write your code here
	let info = Object.entries(yearlyTechStats)
	let table = []
	for (let tech of selectedTechs) {
		let row = [tech]
		//console.log(row);
		for (let [key, value] of info) {
			//console.log(key);

			if (key >= firstYear && key <= lastYear) {
				if (tech in value) {
					for (let [i, j] of Object.entries(value)) {
						if (i === tech) {
							row.push(j)
						}
					}
				} else {
					row.push(0)
				}
			}
		}

		table.push(row)
	}
	while (firstYear <= lastYear) {
		//console.log(firstYear)
		firstYear = firstYear + 1
	}
	console.log(table)
	return table
}

/**
 * Get HTML of table rows
 *
 * @param {Array<string|number>} rowData
 * @returns {string} HTML of the table rows
 */

function constructTableRowsHtml(rowData) {
	// TODO: Write your code here
	let row = ""
	for (let i = 0; i < rowData.length; i++) {
		row = row + "<tr>"
		for (let value of rowData[i]) {
			row = row + "<td>" + value + "</td>"
			//console.log(value);
		}
		row = row + "</tr>"
	}
	console.log(row)
	return row
}

/**
 * Get HTML of table heading row
 *
 * @param {Array<string|number>} headings Table headings
 * @returns {string} HTML of the heading row
 */
function constructTableHeadHtml(headings) {
	// TODO: Write your code here
	const thead = document.querySelector("#table-header")
	let th = document.createElement("th")
	let row = "<tr>"
	for (let i = 0; i < headings.length; i++) {
		row = row + "<th>" + headings[i] + "</th>"
		//console.log(row);
	}
	row = row + "</tr>"
	console.log(row)
	return row
}

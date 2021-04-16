function addListItem(text) {
	// TODO: implement this function
}

function submitHandler(e) {
	// TODO: implement this function
}

function listClickHandler(e) {
	// TODO: implement this function
	const className = e.target.className
	if (className === "") {
		this.className = "done"
	} else {
		this.className = ""
	}
}

let data = [
	{ name: "item 1", done: true },
	{ name: "item 2", done: false },
	{ name: "item 3", done: true },
]

const list = document.getElementById("todo")
for (i = 0; i < data.length; i++) {
	let li = document.createElement("li")
	li.addEventListener("click", listClickHandler)
	li.appendChild(document.createTextNode(data[i].name))
	if (data[i].done) {
		li.classList.add("done")
	}
	list.appendChild(li)
}

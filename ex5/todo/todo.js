const list = document.getElementById("todo")

function addListItem(index) {
	// TODO: implement this function
	let li = document.createElement("li")
	li.addEventListener("click", listClickHandler)
	li.appendChild(document.createTextNode(data[index].name))
	if (data[index].done) {
		li.classList.add("done")
	}
	list.appendChild(li)
}

function submitHandler(e) {
	// TODO: implement this function
	e.preventDefault()
	const input = document.getElementById("type-input")
	let text = input.value
	text = text.replace(/ +(?= )/g, "")
	if (text !== "" && text !== " ") {
		data.push({ name: text, done: false })
		addListItem(data.length - 1)
	}
	input.value = ""
}

function listClickHandler(e) {
	// TODO: implement this function
	const className = e.target.className
	if (className === "") {
		this.className = "done"
	} else {
		this.remove()
	}
}

let data = []
if (data.length) {
	for (i = 0; i < data.length; i++) {
		addListItem(i)
	}
}

const form = document.getElementById("form")
form.addEventListener("submit", submitHandler)

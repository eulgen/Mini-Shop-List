// var button = document.getElementsByTagName("button");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// input.addEventListener("keypress", function (event) {
// 	console.log("keypress : "+event.key+"\n");
// 	var key = event.key;
// 	if (input.value.length > 3 && key == "Enter") {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 	}
// });

// button[0].addEventListener("click", function () {
// 	if (input.value.length > 3) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 	}
// });

var click = document.getElementsByClassName("click")[0];
var items = document.getElementById("userinput");

click.addEventListener("click", function () {
	if (items.value.length == 0) {
		return true;
	}
	var new_li = document.createElement("li");
	new_li.className = "done";
	var enterItem = document.createElement("div");
	enterItem.textContent = items.value;
	var list = document.createElement("div");
	list.className = "list";
	var stateItem = document.createElement("button");
	stateItem.className = "state form";
	stateItem.textContent = "on";
	var deleteItem = document.createElement("button");
	deleteItem.className = "form";
	deleteItem.textContent = "delete";
	list.appendChild(stateItem);
	list.appendChild(deleteItem);
	new_li.appendChild(enterItem);
	new_li.appendChild(list);
	document.querySelector("ul").appendChild(new_li);

	var new_list = document.getElementsByClassName("state");

	for (var i = 0; i < new_list.length; i++) {
		console.log("length : " + new_list.length + "\n");
		/* The code `new_list[i].onclick = function (ev) { ... }` is assigning a click event handler to each
		element in the `new_list` array. */
		new_list[i].onclick = function (ev) {
			console.log("indx : " + i + "\n");
			if (ev.target.textContent == "on") {
				ev.target.style.backgroundColor = "#000000";
				ev.target.textContent = "off";
			} else {
				ev.target.textContent = "on";
				ev.target.style.backgroundColor = "#C300FF";
			}
		};
	}
});

var list = document.getElementsByClassName("state");

for (var i = 0; i < list.length; i++) {
	/**
	 * Handles the click event for each item in the list.
	 *
	 * @param {Event} ev - The click event.
	 * @return {void}
	 */
	list[i].onclick = function (ev) {
		if (ev.target.textContent == "on") {
			ev.target.style.backgroundColor = "#000000";
			ev.target.textContent = "off";
		} else {
			ev.target.textContent = "on";
			ev.target.style.backgroundColor = "#C300FF";
		}
	};
}
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
	deleteItem.className = "delete form";
	deleteItem.textContent = "delete";
	list.appendChild(stateItem);
	list.appendChild(deleteItem);
	new_li.appendChild(enterItem);
	new_li.appendChild(list);
	document.querySelector("ul").appendChild(new_li);

	state_delete_Items();
});

state_delete_Items();

function state_delete_Items() {
	var list = document.querySelectorAll(".state");
	var deleteItem = document.querySelectorAll(".delete");

	for (let j = 0; j < deleteItem.length; j++) {
		// Attach a click event listener to each deleteItem element
		deleteItem[j].onclick = function (ev) {
			// Remove the parent node of the parent node of the clicked element
			ev.target.parentNode.parentNode.remove();
		};
	}

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
}

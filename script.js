const searchStates = () => {
	let filter = document.getElementById("search-states").value.toUpperCase();
	let states_list = document.getElementsByClassName("states");

	for (let i = 0; i < states_list.length; i++) {
		let name = states_list[i].firstElementChild;
		if (name) {
			let textValue = name.textContent || name.innerHTML;
			if (textValue.toUpperCase().search(filter) > -1) {
				states_list[i].style.display = "";
			} else {
				states_list[i].style.display = "none";
			}
		}
	}
}
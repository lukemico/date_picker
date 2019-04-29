/*document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM is fully loaded and parsed');*/

var tabs = {
	sample1: document.getElementById("days"),
	sample2: document.getElementById("date"),
	sample3: document.getElementById("input")
};

var tabContent = {
	one: document.getElementById("days-of-the-week"),
	two: document.getElementById("date-picker"),
	three: document.getElementById("cuser-input")
};

for (tab in tabs) {
	// console.log(tabs[tab]);
	tabs[tab].addEventListener("click", function(event) {
		event.preventDefault();
		var $this = this;
		clearSelected();
		$this.classList.add("selected");
		// console.log(this.id);

		clearActive();

		if ($this.id === "link-1") {
			content.one.classList.add("active");
		} else if ($this.id === "link-2") {
			content.two.classList.add("active");
		} else {
			content.three.classList.add("active");
		}
	});
}

function clearSelected() {
	for (tab in tabs) {
		tabs[tab].classList.remove("selected");
	}
}
function clearActive() {
	for (element in content) {
		content[element].classList.remove("active");
	}
}
/*});*/

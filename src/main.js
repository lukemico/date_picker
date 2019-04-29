const tabs = document.getElementsByClassName("tab");
const tabsArray = Array.from(tabs);
const tabContents = document.getElementsByClassName("tabContent");
const tabContentsArray = Array.from(tabContents);

tabsArray.forEach(tab => {
	let id = tab.getAttribute("id");
	tab.addEventListener("click", () => showTab(id));
});

// function showTab(tabId) {
// 	tabContentsArray.forEach(tabContent => {
// 		let tabContentId = tabContent.getAttribute("id");
// 		tabContent.style.display = "none";
// 		if (tabContentId.includes(tabId)) tabContent.style.display = "block";
// 	});
// }

document.addEventListener("DOMContentLoaded", function() {
	console.log("DOM is fully loaded and parsed");
});

function tabsArray() {
	var x = document.getElementById("tab");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// for (tab in tabs) {
// 	// console.log(tabs[tab]);
// 	tabs[tab].addEventListener("click", function(event) {
// 		event.preventDefault();
// 		var $this = this;
// 		clearSelected();
// 		$this.classList.add("selected");
// 		// console.log(this.id);

// 		clearActive();

// 		if ($this.id === "link-1") {
// 			content.one.classList.add("active");
// 		} else if ($this.id === "link-2") {
// 			content.two.classList.add("active");
// 		} else {
// 			content.three.classList.add("active");
// 		}
// 	});
// }

function syncFetch(url) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, false); // false = synchronous
	xhr.send();

	if (xhr.status >= 200 && xhr.status < 300) {
		return xhr.responseText; // return raw JSON string
	}
	else {
		throw new Error("Failed to fetch " + url + " (status: " + xhr.status + ")");
	}
}


const imgSpinner   = document.getElementById('spinner');
const imgOverlay   = document.getElementById('overlay');
let itemFileBase   = window.location.hash ? window.location.hash : '#unibands';
console.log(itemFileBase);
itemFileBase       = itemFileBase.replace('#', '');
console.log(itemFileBase);
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = `assets/css/${itemFileBase}.css`;
document.head.appendChild(link);

const itemJSON     = syncFetch(`assets/javascript/${itemFileBase}.json`);
const spinnerSpecs = JSON.parse(itemJSON);
const items        = spinnerSpecs.items;
const spinnerImage = spinnerSpecs.image;
const overlayImage = spinnerSpecs.overlay;
imgSpinner.src     = spinnerImage;
imgOverlay.src     = overlayImage;

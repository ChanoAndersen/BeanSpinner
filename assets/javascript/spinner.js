console.log('Spinner.js');
function pickABean(spinnerItems) {
	let selectedItemId = Math.random() * spinnerItems.length;
	selectedItemId     = Math.floor(selectedItemId);
	let selectedItem   = spinnerItems[selectedItemId];
	return selectedItem;
}

let bannedItems = []
let query       = new URLSearchParams(window.location.search);
if (query.size > 0 && query.has('banned_beans'))
	bannedItems = query.get('banned_beans').split(';');

console.log(bannedItems);

let spinner     = document.getElementById('spinner');
let overlay     = document.getElementById('overlay');
let soundEffect = document.getElementById('soundEffect');

let targetItem = null;
let maxTries   = 100;

do {
	maxTries -= 1;
	targetItem = pickABean(items);
	console.log('Target: ' , targetItem);
	console.log('Is banned: ' + bannedItems.includes(targetItem.id));
	console.log('MaxTries: ' + maxTries);
} while (bannedItems.includes(targetItem.id) && maxTries > 0);

console.log('Selected Bean: ' + targetItem.id + ' (' + targetItem.name + ')');

let targetRotation = 3600 + targetItem.rotation;
spinner.style.setProperty("--bean-rotation", targetRotation + 'deg');
overlay.classList.add("show-a-lay");
spinner.classList.add("spin-a-bean");
soundEffect.play().catch(err => {});

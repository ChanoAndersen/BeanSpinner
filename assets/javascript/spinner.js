function pickABean(beans) {
	let selectedBeanId = Math.random() * beans.length;
	selectedBeanId     = Math.floor(selectedBeanId);
	let selectedBean   = beans[selectedBeanId];
	return selectedBean;
}

let bannedBeans = []
let query       = new URLSearchParams(window.location.search);
if (query.size > 0 && query.has('banned_beans'))
	bannedBeans = query.get('banned_beans').split(';');

console.log(bannedBeans);

let spinner     = document.getElementById('spinner');
let overlay     = document.getElementById('overlay');
let soundEffect = document.getElementById('soundEffect');

let targetBean = null;
let maxTries   = 100;

do {
	maxTries -= 1;
	targetBean = pickABean(beans);
	console.log('Target: ' , targetBean);
	console.log('Is banned: ' + bannedBeans.includes(targetBean.id));
	console.log('MaxTries: ' + maxTries);
} while (bannedBeans.includes(targetBean.id) && maxTries > 0);

console.log('Selected Bean: ' + targetBean.id + ' (' + targetBean.name + ')');

let targetRotation = 3600 + targetBean.rotation;
spinner.style.setProperty("--bean-rotation", targetRotation + 'deg');
overlay.classList.add("show-a-lay");
spinner.classList.add("spin-a-bean");
soundEffect.play();


let beanTable = document.getElementById("beanList");
console.log(beanTable);
for(let bean of beans){
	console.log(bean);
	let beanRow = document.createElement("tr");
	let idCell = document.createElement("td");
	let nameCell = document.createElement("td");
	let rotationCell = document.createElement("td");
	idCell.innerText = bean.id;
	nameCell.innerText = bean.name;
	rotationCell.innerText = bean.rotation;
	beanRow.appendChild(idCell);
	beanRow.appendChild(nameCell);
	beanRow.appendChild(rotationCell);
	beanTable.appendChild(beanRow);
}
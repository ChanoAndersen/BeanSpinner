let beans = [
    {name: "Barf", rotation: 13},
    {name: "Dirty Dishwater", rotation: 48},
    {name: "Toothpaste", rotation: 84},
    {name: "Dead Fish", rotation: 119},
    {name: "Booger", rotation: 156},
    {name: "Rotten Egg", rotation: 193},
    {name: "Liver & Onions", rotation: 228},
    {name: "Stink Bug", rotation: 265},
    {name: "Pomgranate", rotation: 301},
    {name: "Stinky Socks", rotation: 337}
];
let spinner = document.getElementById('spinner');
let selectedBeanId = Math.random() * beans.length;
selectedBeanId = Math.floor(selectedBeanId);
let selectedBean = beans[selectedBeanId];
let targetRotation = 3600 + selectedBean.rotation;
spinner.style.setProperty("--bean-rotation", targetRotation + 'deg');
spinner.classList.add("spin-a-bean");

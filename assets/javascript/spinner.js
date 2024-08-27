let beans = [
    {name: "Barf", rotation: 11},
    {name: "Dirty Dishwater", rotation: 47},
    {name: "Toothpaste", rotation: 83},
    {name: "Dead Fish", rotation: 119},
    {name: "Booger", rotation: 155},
    {name: "Rotten Egg", rotation: 191},
    {name: "Liver & Onions", rotation: 227},
    {name: "Stink Bug", rotation: 263},
    {name: "Pomgranate", rotation: 299},
    {name: "Stinky Socks", rotation: 335}
];
let spinner = document.getElementById('spinner');
let overlay = document.getElementById('overlay');
let soundEffect = document.getElementById('soundEffect');
let selectedBeanId = Math.random() * beans.length;
selectedBeanId = Math.floor(selectedBeanId);
let selectedBean = beans[selectedBeanId];
let targetRotation = 3600 + selectedBean.rotation;
spinner.style.setProperty("--bean-rotation", targetRotation + 'deg');
overlay.classList.add("show-a-lay");
spinner.classList.add("spin-a-bean");
soundEffect.play();

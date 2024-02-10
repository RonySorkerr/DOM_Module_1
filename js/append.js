// 1. Where to add
const numericList = document.getElementById('count-list');
// 2. What to be added
const li = document.createElement('li');
li.innerText = 'new li text';
// 3 add the child
numericList.appendChild(li);

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('H1');
h1.innerText= ' My Food List';
section.appendChild(h1);


const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText= ' biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');

li2.innerText= ' borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');

li3.innerText= ' kacchi';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerhtml directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
</ul>
`

mainContainer.appendChild(sectionDress);
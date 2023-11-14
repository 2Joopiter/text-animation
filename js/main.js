
const h1 = document.querySelector('h1');
const txt = h1.innerText;
let tags = '';

for (let letter of txt) {
	tags += `<span>${letter}</span>`;
}

console.log(tags);
h1.innerHTML = tags;

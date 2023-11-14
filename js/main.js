/*
const h1 = document.querySelector('h1');
const txt = h1.innerText;
let tags = '';

for (let letter of txt) {
	tags += `<span>${letter}</span>`;
}

console.log(tags);
h1.innerHTML = tags;

*/

/*
splitText('h1');

function splitText(el) {
	const dom = document.querySelector(el);
	let tags = '';
	for (let letter of dom.innerText) tags += `<span>${letter}</span>`;
	dom.innerHTML = tags;
}

// 기능을 실행하고 값을 내보낼 필요가 없을 땐 return문 필요 없음

*/

const main = document.querySelector('main');
const btns = document.querySelectorAll('li');
const boxs = document.querySelectorAll('article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(btns, idx);
		activation(boxs, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

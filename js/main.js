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

const btns = document.querySelectorAll('li');
const boxs = document.querySelectorAll('h1');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
		boxs.forEach((data) => data.classList.remove('on'));
		boxs[idx].classList.add('on');
	});
});

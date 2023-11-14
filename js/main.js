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
const tits = document.querySelectorAll('h1');

splitText(tits[0]); // 인수로 전달되는 값은 'h1'이라는 문자가 아닌 h1 돔 자체임
splitText(tits[1]);

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


//해당 함수는 DOM자체를 인수로 전달받음. 따라서 el = dom임
function splitText(el) {
	let tags = '';
	for (let letter of el.innerText) tags += `<span>${letter}</span>`;
	el.innerHTML = tags;
}

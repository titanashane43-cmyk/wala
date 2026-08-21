const envelopeContainer = document.querySelector('.envelope-container');
const letterContainer = document.querySelector('#letter-container');
const envelope = document.querySelector('#envelope');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');
const buttons = document.querySelector('#lettr-buttons');
const finalText = document.querySelector('#final-text');
const letterCat = document.querySelector('#letter-cat');
const yesCat = document.querySelector('#yes-cat');

function openLetter() {
	envelopeContainer.style.display = 'none';
	letterContainer.style.display = 'flex';
}

function acceptLetter() {
	buttons.style.display = 'none';
	letterCat.style.display = 'none';
	yesCat.style.display = 'block';
	finalText.style.display = 'block';
}

function moveNoButton() {
	const maxX = Math.max(0, buttons.clientWidth - noButton.offsetWidth);
	const maxY = Math.max(0, buttons.clientHeight - noButton.offsetHeight);
	noButton.style.left = `${Math.random() * maxX}px`;
	noButton.style.top = `${Math.random() * maxY}px`;
}

envelope.addEventListener('click', openLetter);
yesButton.addEventListener('click', acceptLetter);
yesButton.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' || event.key === ' ') acceptLetter();
});
noButton.addEventListener('mouseenter', moveNoButton);
noButton.addEventListener('click', moveNoButton);

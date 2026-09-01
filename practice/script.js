const noteButton = document.querySelector('#noteButton');
const yesButton = document.querySelector('#yesButton');
const maybeButton = document.querySelector('#maybeButton');
const answer = document.querySelector('#answer');

noteButton.addEventListener('click', () => {
	document.querySelector('#reasons').scrollIntoView({ behavior: 'smooth' });
	noteButton.innerHTML = 'you found the clues <span>♥</span>';
});

yesButton.addEventListener('click', () => {
	answer.textContent = 'Best answer ever. I’ll bring the snacks. ♥';
	yesButton.textContent = 'it’s a date! ♥';
	maybeButton.style.display = 'none';
});

maybeButton.addEventListener('click', () => {
	answer.textContent = 'Take your time... I’ll be over here, hoping. :)';
	maybeButton.textContent = 'okay, maybe';
});

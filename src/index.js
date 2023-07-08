const cards = document.querySelectorAll(".card");

let unhoveredCards = []

cards.forEach((card, index) => {
	unhoveredCards.push(index)
	card.addEventListener('mouseover', () => {
		unhoveredCards = unhoveredCards.filter(item => item != index)
		if (unhoveredCards.length == 0) {
			const button = document.getElementById('button')
			button.classList.remove("button_disabled")
		}
	})
});



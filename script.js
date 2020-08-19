let image = document.querySelector('img');
let filterbar = document.querySelector('.filterbar');

function addFilterToImage(button) {
	currentFilter = button.dataset.value;
	switch (currentFilter) {
		case 'none':
			image.style.filter = `${currentFilter}`;
			break;
		case 'contrast':
			image.style.filter = `${currentFilter}(1.5)`;
			break;
		case 'saturate':
			image.style.filter = `${currentFilter}(200%)`;
			break;
		case 'invert':
		case 'sepia':
			image.style.filter = `${currentFilter}(1)`;
			break;
		case 'blur':
			image.style.filter = `${currentFilter}(1.5px)`;
			break;
	}
}

filterbar.addEventListener('click', function (event) {
	let target = event.target.tagName.toLowerCase();
	if (target !== 'button') return;
	let button = event.target;
	addFilterToImage(button);
});

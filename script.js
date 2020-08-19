let image = document.querySelector('img');
let filterbar = document.querySelector('.filterbar');

function addFilterToImage(filter) {
	switch (filter) {
		case 'none':
			image.style.filter = `${filter}`;
			break;
		case 'contrast':
			image.style.filter = `${filter}(1.5)`;
			break;
		case 'saturate':
			image.style.filter = `${filter}(200%)`;
			break;
		case 'invert':
		case 'sepia':
			image.style.filter = `${filter}(1)`;
			break;
		case 'blur':
			image.style.filter = `${filter}(1.5px)`;
			break;
	}
}

filterbar.addEventListener('click', function (event) {
	let target = event.target.tagName.toLowerCase();
	if (target !== 'button') return;
	let button = event.target;
	let filter = button.dataset.value;
	addFilterToImage(filter);
});

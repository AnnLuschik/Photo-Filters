let image = document.querySelector('img');
let buttonList = document.querySelectorAll('button');

function addFilterToImage() {
	currentFilter = this.dataset.value;
	switch(currentFilter) {
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

buttonList.forEach(button => {
	button.addEventListener('click', addFilterToImage);
});

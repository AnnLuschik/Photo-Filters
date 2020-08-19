let image = document.querySelector('img');
let buttonList = document.querySelectorAll('button');

buttonList.forEach(button => {
	button.addEventListener('click', function() {
		if(button.style) button.style = 'none';
		currentFilter = button.dataset.value;
		switch(currentFilter) {
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
	});
});
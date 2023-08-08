const input = document.querySelector('#operation')
const keys = document.querySelector('.board')

keys.addEventListener('click', (event) => {

	if(!event.target.closest('button')) return;

	const key = event.target;
	const keyValue = key.textContent;
	const { type } = key.dataset;
    let inputDisplay = input.textContent
		
	if(type === 'number') {
        if (inputDisplay === 0) {
            inputDisplay = keyValue
            input.textContent = inputDisplay
        } else {
            inputDisplay = keyValue
            input.textContent += inputDisplay
        }
    }
})
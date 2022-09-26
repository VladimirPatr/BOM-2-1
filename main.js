const body = document.querySelector('body');

const input = document.createElement('input');
input.classList.add('input-class');
input.style.marginRight = '30px';
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph-class');
	
body.append(input, paragraph);

const eventInput = () => {
    const input = document.querySelector('.input-class');
    const paragraph = document.querySelector('.paragraph-class');
    input.addEventListener('keydown', (event) =>{	
        if (event.code == 'Enter'){
            setTimeout(() => {
                event.preventDefault();
                paragraph.textContent = input.value;
                input.value = '';
            }, 300)         
        }
    })
 };
 eventInput()
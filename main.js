//htmldagi teglar olib kelindi
var randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
var elInputMyNumber = document.querySelector('.guess_input');
var elButtonGuess = document.querySelector('.guess_button');
var elNatija = document.querySelector('.result');
var numberOfResult = 0;

//Urinishlar sonini ko`rsatib turish ucun`
elNatija.textContent = 'Urinishlar soni: ' + numberOfResult;
elButtonGuess.addEventListener('click', function() {
	var valueInput = parseInt(elInputMyNumber.value, 10);
if (elInputMyNumber.value) {
	if (valueInput > 0 && valueInput <=100) {
		numberOfResult++;
		elNatija.textContent = 'urinishlar soni: ' + numberOfResult;
		elInputMyNumber.value = '';
		elInputMyNumber.focus();
		if (valueInput < randomNumber) {
			alert('Tanlagan soningiz oylangan sondan kichik')
			elInputMyNumber.value = '';
			elInputMyNumber.focus();
		}else if (valueInput > randomNumber){
			aletr('Tanlagan soningiz oylagan sondan katta')
			elInputMyNumber.focus();
		}else {
			alert('Tabrikliman siz togri topdingiz demak siz Eynshteinsiz!!!' + 'yashiringan son' + randomNumber);
			elInputMyNumber.focus();
		}
	}
}else {
	alert('son kiritmadingiz iltimos kiriting');
	elInputMyNumber.focus();
}
});

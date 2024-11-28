const button = document.querySelector('#button');

function converter(){
  let input = parseFloat(document.querySelector('#input').value);
  let result = document.querySelector('#result');
  let startEnhet = document.querySelector("#startEnhet").value;
  let sluttEnhet = document.querySelector("#sluttEnhet").value;
  let convertedNumber = 0; 

  if(Number.isNaN(input)) {
  result.textContent= 'Ikke skrevet inn noe tall';
  result.style.color ='red';
  return;
  }

  if(startEnhet === sluttEnhet){
    result.textContent = 'velg ulike målenheter';
    result.style.color ='red';
    return;
  }

  if(startEnhet === "MM" && sluttEnhet === "CM"){
    convertedNumber = input /10
  }

  else if(startEnhet === 'MM' && sluttEnhet === 'M') {
    convertedNumber = input / 1000;
  }

  else if(startEnhet === 'CM' && sluttEnhet === 'MM') {
    convertedNumber = input * 10;
  }

  else if(startEnhet === 'CM' && sluttEnhet === 'M') {
    convertedNumber = input / 10;
  }

  else if(startEnhet === 'M' && sluttEnhet === 'MM') {
    convertedNumber = input * 1000;
  }

  else if(startEnhet === 'M' && sluttEnhet === 'CM') {
    convertedNumber = input * 100;
  }

/*
Utfordring : skriv in KM

KM -> MM = 1 000 000
KM -> CM = 100 000
KM -> M = 1 000
*/

 console.log(convertedNumber);
 result.textContent = convertedNumber;
}

button.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Button is clicked!');
  converter();
});

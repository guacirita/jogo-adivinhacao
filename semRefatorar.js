
const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

//função calback (função com argumento de outra, será chamada em algum momento)

function handleTryClick(event) {
  event.preventDefault();  //não faça o evento padrão, que é enviar o formulário

  const inputNumber = document.querySelector("#inputNumber");

  if(Number(inputNumber.value) == randomNumber) {
    
    document.querySelector('.screen1').add("hide"); // substituindo o document pela varíavel
    document.querySelector('.screen2').classList.remove("hide")
    document.querySelector(
      ".screen2 h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;

    /* pode melhorar a função acima escrevendo assim:
    screen2("h2").innerText = `acertou em ${xAttempts} tentativas`;
     */
  }

    inputNumber.value = "";
    xAttempts++;


}

// Eventos

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");


btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function(){
  screen1.classList.remove("hide");
  screen2.classList.add("hide");

  xAttempts = 1;
})



const gameBoard = (() => {
  const gameBoardarr = ["", "", "", "", "", "", "", "", ""];

  //this add each element of the array to the DOM and is responsive

  for (i = 0; i < gameBoardarr.length; i++) {
    gameBoardarr[i] = document.getElementById(i);
    //console.log(gameBoardarr[i].textContent);
  }

  //criar um for each para todos os elements adicionando o click evento de mudar o conteudo do texto do quadrado
  gameBoardarr.forEach((elemento) => {
    elemento.addEventListener("click", function () {
      //aqui eu vou fazer ativar uma função "checkSquare" dai só vai ter ativar a função sempre que clicarmos
      checkSquare(simbolP1, simbolP2, elemento);
      console.log("hi");
    });

    // função de checar se tem vencedor (podemos deixar ela dentro do click event)
  });

  function checkSquare(simbolP1, simbolP2, elemento) {
    if (elemento.textContent == "x" || elemento.textContent == "o")
      alert("ERROR-ERROR-ERROR THIS SQUARE IS ALREADY FILLED");
    else if (simbolP1 == "x") elemento.textContent = "x";
    else if ((simbolP1 = "o")) elemento.textContent = "o";
  }

  return {
    gameBoardarr,
  };
})();

const Player = (name, simbol) => {
  const getName = () => name;

  const getSimbol = () => simbol;

  return { getName, getSimbol };
};

//lógica para selecionar o simbolo do P1
let simbolP1 = "";
const botaoXP1 = document.getElementById("XplayerOne");
const botaoOP1 = document.getElementById("OplayerOne");
botaoXP1.addEventListener("click", function () {
  simbolP1 = "x";
  console.log(simbolP1);
});
botaoOP1.addEventListener("click", function () {
  simbolP1 = "o";
  console.log(simbolP1);
});

//Lógica para selecionar o simbolo do P2
let simbolP2 = "";
const botaoXP2 = document.getElementById("XplayerTwo");
const botaoOP2 = document.getElementById("OplayerTwo");
botaoXP2.addEventListener("click", function () {
  simbolP2 = "x";
  console.log(simbolP2);
});
botaoOP2.addEventListener("click", function () {
  simbolP2 = "o";
  console.log(simbolP2);
});

const Player1 = Player("Bruno", simbolP1);
const Player2 = Player("Chola", simbolP2);
console.log(Player2.getSimbol());

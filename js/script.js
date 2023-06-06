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

      console.log("hi");
    });
  });

  return {
    gameBoardarr,
  };
})();

const Player = (name, simbol) => {
  const getName = () => name;

  const getSimbol = () => simbol;

  return { getName, getSimbol };
};

const Player1 = Player("Bruno", "x");
const Player2 = Player("Chola", "o");

/* 
 To do: 
  Lógica de getName e getSimbol
  lógica para definir quando acabou uma rodada
  lógica para definir quando acabou uma partida
  botão de começar e reiniciar
*/

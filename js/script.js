/*const gameboard = (() => {
    const gameBoardarr = [
 “”, “” , “”, “” ,”” ,”” ,””, “”, “”
]  
   função addCheckSquare(square) {
   consgameBoardarr[square]
} 
};
})();*/

const x = document.querySelector("h1");
console.log(x);
x.addEventListener("click", function () {
  x.textContent = "hi";
});

const gameBoard = (() => {
  const gameBoardarr = ["", "", "", "", "", "", "", "", ""];
  function addEachSquaretoDom() {
    for (i = 0; i < gameBoardarr.length; i++) {
      gameBoardarr[i] = document.getElementById(i);
      console.log(gameBoardarr[i].textContent);
      gameBoardarr[i].addEventListener("click", function () {
        console.log("hi");
      });
    }
  }
  addEachSquaretoDom();

  return {
    gameBoardarr,
  };
})();
console.log(gameBoard.gameBoardarr[1]);

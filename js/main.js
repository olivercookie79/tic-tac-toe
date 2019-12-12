
const gamegreeting =("welcome hacker");

console.log(gamegreeting);

const startGame = "Commence Hacking!!!"
console.log(startGame);




const  successfulHacks = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
];

let currentPlayer = 'hacker1';
// function startHack(){
// const currentPlayer = 'hacker1';
// }
// const $cells = $('.cell');
// console.log( $cells );
//const   hackerOne ='X';

function switchPlayer(){
  if (currentPlayer ==='hacker1'){
    currentPlayer ='hacker2';
  } else {
    currentPlayer ='hacker1'
  }

}; // end of switchPlayer

// const hacker1 =
$('.cell').on('click', function(){


    // console.log('testclick!', $(this).attr('id')  );

    // '$(this)' is jQuery's way of giving you access
    // to the element that actually got clicked, inside
    // this handler function
    //$('.cell')is the same as document.getElementsByClassName.
    //console.log('current player1', currentPlayer);
    if ($(this).hasClass('disabled')){
      alert('Input Violation! ACCESSS DENIED!');
    }
    else if (currentPlayer === 'hacker1') {
      $(this).html('X');
      $(this).addClass('disabled');

    } else {
      $(this).html('O');
      $(this).addClass('disabled');

    }
    switchPlayer()

    // check if someone has won, as a result of this move
    if( $('#0').html() === "X" &&
        $('#1').html() === "X" &&
        $('#2').html() === "X"
      ){
        alert("Hack SUCCESSFUL");
        return;

    }else if ($('#3').html() === "X" &&
              $('#4').html() === "X" &&
              $('#5').html() === "X"
            ){
        alert("Hack SUCCESSFUL");
        return

    }else if ($('#6').html() === "X" &&
              $('#7').html() === "X" &&
              $('#8').html() === "X"
            ){
              alert("Hack SUCCESSFUL");
              return
    }else if ($('#0').html() === "X" &&
              $('#3').html() === "X" &&
              $('#6').html() === "X"
            ){
              alert("Hack SUCCESSFUL");
              return
    }else if ($('#1').html() === "X" &&
              $('#4').html() === "X" &&
              $('#7').html() === "X"
            ){
              alert("Hack SUCCESSFUL");
              return
    }else if ($('#2').html() === "X" &&
              $('#5').html() === "X" &&
              $('#8').html() === "X"
            ){
              alert("Hack SUCCESSFUL");
              return
    }else if ($('#0').html() === "X" &&
              $('#4').html() === "X" &&
              $('#8').html() === "X"
    ){
      alert("Hack SUCCESSFUL");
      return
    }else if ($('#6').html() === "X" &&
              $('#4').html() === "X" &&
              $('#2').html() === "X"
    ){
      alert("Hack SUCCESSFUL");
      return
    }

// check if "O"has won.

    if( $('#0').html() === "O" &&
        $('#1').html() === "O" &&
        $('#2').html() === "O"
      ){
        alert("Hack SUCCESSFUL");
        return
    }else if
       ($('#3').html() === "O" &&
        $('#4').html() === "O" &&
        $('#5').html() === "O"
      ){
        alert("Hack SUCCESSFUL");
        return
    }else if
       ($('#6').html() === "O" &&
        $('#7').html() === "O" &&
        $('#8').html() === "O"
      ){
        alert("Hack SUCCESSFUL");
        return
      }else if
         ($('#0').html() === "O" &&
          $('#3').html() === "O" &&
          $('#6').html() === "O"
        ){
          alert("Hack SUCCESSFUL");
          return
      }else if
          ($('#1').html() === "O" &&
           $('#4').html() === "O" &&
           $('#7').html() === "O"
        ){
          alert("Hack SUCCESSFUL");
          return
      }else if
          ($('#2').html() === "O" &&
           $('#5').html() === "O" &&
           $('#8').html() === "O"
        ){
          alert("Hack SUCCESSFUL");
          return
      }else if
         ($('#0').html() === "O" &&
          $('#4').html() === "O" &&
          $('#8').html() === "O"
      ){
        alert("Hack SUCCESSFUL");
        return
      }else if
         ($('#6').html() === "O" &&
          $('#4').html() === "O" &&
          $('#2').html() === "O"
      ){
        alert("Hack SUCCESSFUL");
        return

        switchPlayer();
        console.log('win!');
      } // end of else statements

  // Checking if draw
  // get grid
  const grid = $('.cell');
  console.log( grid );

  // create an array representing contents of the grid
  //check if there are any free spaces on grid
  let gridContents = [];
  for (var i = 0; i < grid.length; i++) {
    gridContents.push(grid[i].innerHTML)
  }

  // check if gridContents contains any blank spaces
  if ( ! gridContents.includes('') ) {
    console.log('its a draw!');
  }









}); // End of click function

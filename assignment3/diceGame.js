let playerInfo = {
    printPlayer1 : function() {
        console.log(`Player1 : ${this.name}`);
        console.log(`Your number : ${this.randNumber}`)
        console.log(`Your result : ${this.compareResult}`)
    }, 
    printPlayer2 : function() {
        console.log(`Player2 : ${this.name}`);
        console.log(`Your number : ${this.randNumber}`)
        console.log(`Your result : ${this.compareResult}`)
    }
};

// Create player object & Insert player's name
let player1 = Object.create(playerInfo);
let player2 = Object.create(playerInfo);

player1.name = 'Pppp';
player2.name = 'Mdf';

// insert round
let round = 4;
  

// random number for player1 & 2
let randomNumberForPlayer1 = Math.floor(Math.random() * 6) + 1;
player1.randNumber=randomNumberForPlayer1;

let randomNumberForPlayer2 = Math.floor(Math.random() * 6) + 1;
player2.randNumber=randomNumberForPlayer2;


player1.printPlayer1(); 
console.log(player1);
console.log("     VS");
player2.printPlayer2();
console.log(player2);


// Compare random number of player1 and 2
if (player1.randNumber == player2.randNumber) {
    console.log(" -------------");
    console.log("Result : Draw!"); 
    console.log(" -------------");
   
}
else if (player1.randNumber < player2.randNumber) {
     console.log(" -------------");
     console.log("Result : " + player2.name + " WINS!");
     console.log(" -------------");
}
else {
    console.log(" -------------");
    console.log("Result : " + player1.name + " WINS!");
    console.log(" -------------");
}





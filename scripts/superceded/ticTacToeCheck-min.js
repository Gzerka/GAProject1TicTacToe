var checkColumns=function(){for(var e=[],r=game.gameArray.length,a=function(e){for(var a=[],n=0;n<r;n++)a[n]=game.gameArray[n][e];return a},n=0;n<r;n++)game.columnArray[n]=a(n)},checkDiagonals=function(){var e=function(){for(var e=[],r=0;r<game.gameArray.length;r++)e[r]=game.gameArray[r][r];return e},r=function(){for(var e=game.gameArray.length,r=[],a=0;a<e;a++)r[a]=game.gameArray[a][e-a-1];return r},a=e(),n=r();game.diagonalArray=[a,n]},gameWinner=function(e){"X"===e?(console.log(e+" : is the winner"),game.player1Score+=1,game.gameRounds+=1,$("div.player1").text("Player 1: "+game.player1Score),$("div.rounds").text("Round: "+game.gameRounds),$("#winnerText").text("PLAYER 1 WINS")):"O"===e?(console.log(e+" : is the winner"),game.player2Score+=1,game.gameRounds+=1,$("div.player2").text("Player 2: "+game.player2Score),$("div.rounds").text("Round: "+game.gameRounds),$("#winnerText").text("PLAYER 2 WINS")):" "===e&&$("#winnerText").text("DRAW!!! Press Game Reset")},checkForWinner=function(e){checkColumns(),checkDiagonals();for(var r=function(r){return r===e},a=0;a<game.gameSize;a++)if(game.gameArray[a].every(r)||game.columnArray[a].every(r))return gameWinner(e),game.winner=1,!0;for(var a=0;a<2;a++)if(game.diagonalArray[a].every(r))return gameWinner(e),game.winner=1,!0;return 0===game.count&&(console.log("hello its here"),$("#winnerText").text("DRAW!!! Press Game Reset")),!1};
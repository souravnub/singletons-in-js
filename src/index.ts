import { gameManager } from "./store";

function main() {
    const gameId = gameManager.newGame();

    gameManager.assignPlayer(gameId, { p1: "sourav", p2: "dheeraj" });

    setInterval(() => {
        gameManager.addMove(gameId, "e24d");
        gameManager.addMove(gameId, "1233");

        console.log(gameManager.games);
    }, 3000);
}

main();

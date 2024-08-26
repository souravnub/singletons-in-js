interface Game {
    id: string;
    p1: string | undefined;
    p2: string | undefined;
    moves: string[];
}

export class GameManager {
    games: Game[] = [];

    // singleton pattern
    private constructor() {
        this.games = [];
    }

    static getInstance() {
        const gameManager = new GameManager();
        return gameManager;
    }

    getGame(id: string) {
        return this.games.find((game) => game.id === id);
    }

    newGame(): string {
        const newGame: Game = {
            id: Math.random().toString(),
            p1: undefined,
            p2: undefined,
            moves: [],
        };
        this.games.push(newGame);
        return newGame.id;
    }

    assignPlayer(
        gameId: string,
        playersObj: Partial<{ p1: string; p2: string }>
    ) {
        const foundGame = this.games.find((game) => game.id === gameId);

        if (!foundGame) {
            throw new Error("Game not found");
        }

        this.games = this.games.map((game) => {
            if (game.id === gameId) {
                return { ...game, p1: playersObj.p1, p2: playersObj.p2 };
            }
            return game;
        });
    }

    getMoves(gameId: string) {
        return this.games.find((game) => game.id === gameId)?.moves;
    }

    addMove(gameId: string, move: string) {
        this.games = this.games.map((game) => {
            if (game.id === gameId) {
                return { ...game, moves: [...game.moves, move] };
            }
            return game;
        });
    }
}

export const gameManager = GameManager.getInstance();

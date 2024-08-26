# Singleton patterns in JS

This repo aims at documenting my understanding of things while learning **statefull backends**.

## Repo structure

The repo have two branches:

-   **main**: Contains the final code
-   **problems**: Contains proceeding commits on what the problem is

Note: The repo mainly focuses on the `store.ts` file because it contains the singleton pattern logic.

### Problems with commits
1. `implementation 1: export static method and private constructor`
    - Here a private constructor was created to avoid creation of new GameManager class instances.
    - Cretaed a static `getInstance()` method to access the sole instance outside of the class.
    **Problem**: The instance can still be recreated by calling the `getInstance()` method twice.
        ```ts
            export const gameManager = GameManager.getInstance();
            export const gameManager2 = GameManager.getInstance();
        ``` 
        In the above code we are able to create the instance twice .Therefore, not following *singleton approach*.
    **Solution**: `implementation 2: check if instance exists`
    <br/>
    `implementation 2: check if instance exists` makes sure that if the instance exists then it is returned else a new instance is created and returned.
        ```ts
        private static instance: GameManager;

        private constructor() {
            this.games = [];
        }

        static getInstance() {
            // If there is no instance create one
            if (!this.instance) {
                this.instance = new GameManager();
            }

            // return the instance, new one or old one.
            return this.instance;
        }
        ```
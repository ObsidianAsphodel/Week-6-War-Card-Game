
//Most of this code was written at 3AM
class GameManager
{
    constructor
    ()
    {
        this.players = [];
    }
    start()
    {
        this.players.push(new Player(this.players[0]));
        this.players.push(new Player(this.players[1]));

        this.players[0].name = prompt("Enter player one's name: ");
        console.log(this.players[0].name);
        this.players[0].points = 0;
        console.log(this.players[0] + " points: " + this.players[0].points);
        this.players[1].name = prompt("Enter player two's name: ");
        console.log(this.players[1].name);
        this.players[1].points = 0;
        console.log(this.players[1] + " points: " + this.players[1].points);

        const newDeck = new Deck();
        newDeck.createDeck();

        this.players[0].playerCards = newDeck.cards.slice(0,26);
        this.players[0].hasCards = true;
        this.players[1].playerCards = newDeck.cards.slice(26,52);
        this.players[1].hasCards = true;
        
        while(this.players[0].hasCards && this.players[1].hasCards)
        {
            this.pickACard();
        }
        this.comparePoints();
    }
    pickACard()
    {
        if(this.players[0].playerCards.length <= 0)
        {
            this.players[0].hasCards = false;
        }
        if(this.players[1].playerCards.length <= 0)
        {
            this.players[1].hasCards = false;
        }
        else {
            let selection = Math.floor(Math.random() * this.players[0].playerCards.length)
            let player1Choice = this.players[0].playerCards[selection];
            console.log(player1Choice);
            let selection2 = Math.floor(Math.random() * this.players[1].playerCards.length)
            let player2Choice = this.players[1].playerCards[selection2];
            console.log(player2Choice);
            this.compareCards(player1Choice, player2Choice);
        }
    }
    compareCards(player1Choice, player2Choice)
    {   
        console.log(this.players[0].playerCards, "Player 1 Cards");
        console.log(this.players[1].playerCards, "Player 2 Cards");
        if(player1Choice.values > player2Choice.values)
        {
            this.players[0].points++;
            console.log(this.players[0].name + " wins this round!");
            console.log(this.players[0].points);
        }
        if(player2Choice.values > player1Choice.values)
        {
            this.players[1].points++;
            console.log(this.players[1].name + " wins this round!");
            console.log(this.players[1].points);
        }
        if(player1Choice.values == player2Choice.values)
        {
            console.log("Tie! No points are given to either player");
        }
        this.removeCards();
        this.pickACard();
    }
    removeCards(selection,selection2)
    {
        this.players[0].playerCards.splice(selection, 1);
        this.players[1].playerCards.splice(selection2,1);
    }
    comparePoints()
    {
        if(this.players[0].points > this.players[1].points)
        {
            alert(this.players[0].name + " wins with " + this.players[0].points + " points!");
        }
        if(this.players[1].points > this.players[0].points)
        {
            alert(this.players[1].name + " wins with " + this.players[1].points + " points!");
        }
        //Just in case both cpus have the same total of points at the end.
        if(this.players[0].points == this.players[1].points)
        {
            alert("There was a tie!");
        }
    }
}
class Card
{
    constructor
    (suits, ranks, values)
    {
        this.suits = suits;
        this.ranks = ranks;
        this.values = values;
    }
}
class Deck
{
    constructor()
    {
        this.cards = [];
    }

    createDeck()
    {
        let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
        let ranks = ["Ace","2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "King", "Queen"];
        let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13];
        for(let i = 0; i < suits.length; i++)
        {
            for (let j = 0; j < ranks.length; j++)
            {
                this.cards.push(new Card(suits[i], ranks[j], value[j]));
            }
        }
    }
}
class Player
{
    constructor
    (name, points, hasCards)
    {
        this.playerCards = [];
        this.playerName = name;
        this.points = points;
        this.hasCards = hasCards;
    }

}
let newGameManager = new GameManager;
newGameManager.start();
//New game starts
//A new deck is created
//The deck array is shuffled
//Players are given 26 cards
//Whichever player has the higher card gets the point. A tie results in no points given to either player
//A new round repeats this process
//After all the cards have been played, display the score.


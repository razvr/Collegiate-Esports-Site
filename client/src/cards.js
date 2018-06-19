

//console.log("hello!");

suits = [
    "spades",
    "hearts",
    "clubs",
    "diamonds",
];

values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
]

result = [];

// loop through 13 cards 4 times (52)
function logCards(){
   // let count = 0;
    for (i = 0; i < suits.length; i++){
        for ( v = 0; v < values.length; v++){ 
           // count = count + 1;
            //console.log( count + ": " + values[v] + " of " + suits[i] );
           result.push( values[v] + " of " + suits[i] );
        } 
    }
    result;

    //  pick a rannum
    //  select rannum in result
    //  console.log selection

    

    let rannum = Math.floor(Math.random( 51 ));
    result[rannum];

    for (i in newResult){
        console.log(newResult);
    }

}
logCards();

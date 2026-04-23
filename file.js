let card0 = document.getElementById("card0");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");
let card10 = document.getElementById("card10");
let card11 = document.getElementById("card11");
let result = document.getElementById("match");
let emojis = ["🍎","🍎","🍇","🍇","🍓","🍓","🍍","🍍","🥝","🥝","🌸","🌸"];
let card;
let match = 0;
let counter = []
// let firstCard;
// let secondCard;
// var chosen;

let box = [card0, card1, card2, card3, card4, card5, card6,
    card7, card8, card9, card10, card11];

    
// for(i = box.length-1; i>0; i--)
//     {
//         let randomNum = Math.floor(Math.random()*(i+1));
//         let temp = box[i];
//         box[i] = box[randomNum];
//         box[randomNum] = temp; 
//     }
let cardEmojis = {
    card0: "🍎", card1: "🍎",
    card2: "🍇", card3: "🍇",
    card4: "🍓", card5: "🍓",
    card6: "🍍", card7: "🍍",
    card8: "🥝", card9: "🥝",
    card10: "🌸", card11: "🌸"
};


//  function cardClicked(){
//     card0.addEventListener("click", function(){
//         card0.innerHTML = "🍎";
//         chosen = "🍎";
//         card0.style.visibility = "visible";
//     })
//     card1.addEventListener("click", function(){
//         card1.innerHTML = "🍎";
//         chosen = "🍎";
//     })
//     card2.addEventListener("click", function(){
//         card2.innerHTML = "🍇";
//         chosen = "🍇";
//     })
//     card3.addEventListener("click", function(){
//         card3.innerHTML = "🍇";
//         chosen = "🍇";
//     })
//     card4.addEventListener("click", function(){
//         card4.innerHTML = "🍓";
//         chosen = "🍓";
//     })
//     card5.addEventListener("click", function(){
//         card5.innerHTML = "🍓";
//         chosen = "🍓";
//     })
//     card6.addEventListener("click", function(){
//         card6.innerHTML = "🍍";
//         chosen = "🍍";
//     })
//     card7.addEventListener("click", function(){
//         card7.innerHTML = "🍍";
//         chosen = "🍍";
//     })
//     card8.addEventListener("click", function(){
//         card8.innerHTML = "🥝";
//         chosen = "🥝";
//     })
//     card9.addEventListener("click", function(){
//         card9.innerHTML = "🥝";
//         chosen = "🥝";
//     })
//     card10.addEventListener("click", function(){
//         card10.innerHTML = "🌸";
//         chosen = "🌸";
//     })
//     card11.addEventListener("click", function(){
//         card11.innerHTML = "🌸";
//         chosen = "🌸";
//     })
//  }    
// cardClicked();

box.forEach(function(card){
    card.addEventListener("click", function(){
        flipCards(card);
    })
})

function flipCards(card)
{
    if(counter.includes(card) || counter.length>=2) return;
    card.style.visibility = "visible";
    card.innerHTML = cardEmojis[card.id];
    counter.push(card);
    checkMatch();    
}


function checkMatch(){
    if(counter.length==2)
        {
            if(counter[0].innerHTML==counter[1].innerHTML)
                {
                    match++;
                    result.innerHTML = "Matches:"+match;
                    counter=[];
                }
                else{
                    setTimeout(function()
                    {
                        counter[0].style.visibility ="hidden" ;
                        counter[1].style.visibility = "hidden";
                        counter[0].innerHTML = "";
                        counter[1].innerHTML = "";
                        counter=[];
                    }, 1000 )
                }
            }
        }
        
        
        
 // if(counter.includes(card) || counter.length>=2)return;
        
// The Flow Should Be
// When you click a card:

// Show the emoji

// If no card is stored yet → save as first card

// If one card is already saved → save as second card

// Compare them:

// Same emoji → keep them open + increase match

// Different emoji → hide both

// Then:

// Clear memory and wait for next click
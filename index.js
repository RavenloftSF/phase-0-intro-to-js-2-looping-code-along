function writeCards( namesArray ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful surprise gift!` )
    }  
    return thankYouCards
    }
    writeCards(["Charlie", "Samip", "Ali","Guadalupe", "Ollie", "Aki"])
    console.log(writeCards(["Charlie", "Samip", "Ali", "Guadalupe", "Ollie", "Aki"]))


function countDown (){
    let number = 10
    while (number > -1){
    console.log (number--)}}
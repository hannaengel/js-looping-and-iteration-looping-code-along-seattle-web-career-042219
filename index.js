
function writeCards(array, event){
    const a = []
    for (let i = 0; i < array.length; i++) {
    let  message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    a.push(message);
    }
    return a;
}
function countdown(num){
    let countdown = num 
    while (countdown > -1) {
        console.log(countdown--);
    }
}

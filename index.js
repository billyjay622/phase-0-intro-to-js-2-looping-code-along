function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
function countDown () {
    let i = 10 ;
	while(i >= 0){
		console.log(i)
		i--;
	}
}	
start(10)



 


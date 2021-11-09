// Code your solutions in this file
function writeCards(nameArray, gift){
    let msgArray=[];
    for (let i=0; i<nameArray.length; i++){
        msgArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${gift} gift!`);
    }
    return msgArray;
}

function countDown(number){
    while(number>=0){
        console.log(number);
        number--;
    }

}
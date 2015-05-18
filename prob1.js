var valor = 1000;
var total = 0;
for(var i = 1; i < valor; i++){
    if ((i % 3 === 0) || (i % 5 === 0)){
        console.log(total);
        console.log(i);
            total += i;
                    
    }
    else{}
}

console.log(total);

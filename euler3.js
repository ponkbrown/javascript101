
var euler3 = function(n){
    var i = 2;
    while((i*i)<n){
        while(n % i === 0){
            n = n / i;
        }
        i = i + 1;
    }
    return n;
    }
    
console.log(euler3(600851475143));
/* batalle mucho con este problema, realmente no le entendi del todo, lo solucione mejor con python, y despues
traduje el codigo a javascript */

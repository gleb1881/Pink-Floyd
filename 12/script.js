//alert("AAAHello");


alert("a");

function guess() {
    var a = prompt("Ведите число");
    
    if (a > 5) {
        alert("Число должно быть меньше");
        return guess();
    } 
    else if (a == 5) {
        return alert("Угадали");
    } 
    else {
        alert("Число должно быть больше");
        return guess();
    }
}

guess();

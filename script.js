document.querySelector('#btn').addEventListener('click', ()=>{
    prod = parseInt(document.getElementById("prod").value);
    quant = parseInt(document.getElementById("quant").value);
    price = parseInt(document.getElementById("price").value);
    

    for (var i = 0; i < 4; i++){
        total = price*quant 
    }

    for (var i = 0; i < 4; i++){
        total2 = total/3
    }

    document.write('The total purchase is: $' +total+ '<br>');
    document.write('The division betwen emails is $'+total2+ 'for each');

});
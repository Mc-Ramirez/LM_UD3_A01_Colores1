function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

var letras = ["#FF5733","#FCFF33","#86FF33","#33FF52","#33CAFF","#3390FF","#3349FF","#6E33FF","#BE33FF","#FF33F9"];
var numero = (0);  


function cambiaColor(x){
    numero = Math.floor((Math.random()*10));
    document.getElementById(x).style.backgroundColor = letras[numero];
    
    if (document.getElementById('caja1').style.backgroundColor == document.getElementById('caja2').style.backgroundColor && 
    document.getElementById('caja2').style.backgroundColor == document.getElementById('caja3').style.backgroundColor &&
    document.getElementById('caja3').style.backgroundColor == document.getElementById('caja4').style.backgroundColor &&
    document.getElementById('caja4').style.backgroundColor == document.getElementById('caja5').style.backgroundColor &&
    document.getElementById('caja5').style.backgroundColor == document.getElementById('caja6').style.backgroundColor && 
    document.getElementById('caja6').style.backgroundColor == document.getElementById('caja7').style.backgroundColor &&
    document.getElementById('caja7').style.backgroundColor == document.getElementById('caja8').style.backgroundColor &&
    document.getElementById('caja8').style.backgroundColor == document.getElementById('caja9').style.backgroundColor &&
    document.getElementById('caja9').style.backgroundColor == document.getElementById('caja10').style.backgroundColor &&
    document.getElementById('caja10').style.backgroundColor == document.getElementById('caja1').style.backgroundColor){
        alert("Error");
    }
}   

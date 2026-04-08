function meuSwitch(){
    let dia;
    let data = new Date().getDay();

dia = data == 0? "Domingo":
    dia = data == 1? "Segunda-feira":
    dia = data == 2? "Terça-feira":
    dia = data == 3? "Quarta-feira":
    dia = data == 4? "Quinta-feira":
    dia = data == 5? "Sexta-feira":
    "Sabado": 
document.getElementById("demo").innerHTML = "Hoje é " + dia;
}
 
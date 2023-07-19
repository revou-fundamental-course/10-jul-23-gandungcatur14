var TinggiInput = document.querySelector(".Tinggi-input-field");
var BeratInput = document.querySelector(".Berat-input-field");
var usiaInput = document.querySelector("usia-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
let demo1 = "Hasil";  
let demo2 = "Berat Badan Berlebih"; 
var BMI, Tinggi, Berat, Hasil;

calculateButton.addEventListener("click", () =>{

    document.getElementById("demo1").innerHTML = "Hasil";
    document.getElementById("demo2").innerHTML = "Berat Badan Lebih";
    demo_paragraph = document.getElementById( 'demo1' );
    demo_paragraph.style.fontSize = "150%" ;
    demo_paragraph = document.getElementById( 'demo2' );
    demo_paragraph.style.fontSize = "100%" ;
});

calculateButton.addEventListener("click", () =>{

    Tinggi = TinggiInput.value/100;
    Berat = BeratInput.value;
    BMI = Berat/(Tinggi**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Kekurangan Berat Badan";      
    }else if((BMI >= 18.5) && (BMI <= 24.9)){
        statement.innerText = "Normal (Ideal)";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Kelebihan Berat Badan";
    }else{
        statement.innerText = "Kegemukan (Obesitas)";
    }
});
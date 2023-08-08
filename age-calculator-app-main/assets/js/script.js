let currentDate = new Date();

/* SEPARANDO POR DIA, MES Y AÑO */
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

let dayInput, monthInput, yearInput;
function validarDatos(){
    /*  OBTENEMOS LOS VALORES DE LOS INPUTS */
    let day= document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    /*  MENSAJE DE ERROR */
    let erroryear= document.getElementById("erroryear");
    let errormonth= document.getElementById("errormonth");
    let errorday= document.getElementById("errorday");

    /* Validando Year*/
    if(year === ""){
        erroryear.textContent = "This field is required.";
        return false;
    }else if(year > 2023){
        erroryear.textContent = "Must be a valid year";
        return false;
    }else{
        erroryear.textContent = "";
    }

    /* Validando Month*/
    if(month == ""){
        errormonth.textContent = "This field is required.";
        return false;
    }else if(month > 13){
        errormonth.textContent = "Must be a valid month";
        return false;
    }else{
        errormonth.textContent = "";
    }

    /* Validando Day*/
    if(day == ""){
        errorday.textContent = "This field is required.";
        return false;

    }else if(day > 32){
        errorday.textContent = "Must be a valid day";
        return false;
    }else{
        errorday.textContent = "";
    }
    day = dayInput;
    month = monthInput;
    year = yearInput;
    return true;
}

function Calculadora(){

    validarDatos();
    

    /* OBTENEMOS EL VALOR DE  LOS GUIONES */
    let yearSpanElement = document.getElementById("resultYears");
    let monthSpanElement = document.getElementById("resultMonths");
    let daySpanElement =document.getElementById("resultDays");

    let totalyears = currentYear - yearInput;
    let totalmonths = currentMonth + (12 - monthInput);
    let totaldays = currentDay -  dayInput;

    // Verifica si el mes es menor que el mes de nacimiento 
    if (currentMonth < monthInput){
        totalyears = totalyears - 1;
    }
    
    yearSpanElement.textContent = totalyears;
    monthSpanElement.textContent =totalmonths;
    daySpanElement.textContent =totaldays;

}

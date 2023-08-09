let currentDate = new Date();

/* SEPARANDO POR DIA, MES Y AÑO */
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth()+1;
let currentYear = currentDate.getFullYear();

let dayInput, monthInput, yearInput;

//Esta funcion validara si la fecha ingresada por el usuario es valida o no
function validarFecha(dia, mes, año){
    let date = new Date(año, mes-1,dia);
    console.log(date);

    console.log(date.getFullYear(), año);
    console.log(date.getMonth()+1, mes);
    console.log(date.getDate(), dia);
    if (isNaN(date)){
        console.log("Tiene campos vacios")
    }

    if (date.getFullYear() === año && date.getMonth()+1 === mes && date.getDate() === dia){
        console.log("La fecha es valida");
        return true;
        
    }else{
        console.log("La fecha es invalida");
        return false;
    }
}
function validarDatos(){
    console.log(currentDay,currentMonth,currentYear);
    /*  OBTENEMOS LOS VALORES DE LOS INPUTS */
    let day= parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    if (validarFecha(day, month, year) == true){
        console.log("Holsa");
    };
    /*  MENSAJE DE ERROR 
    let erroryear= document.getElementById("erroryear");
    let errormonth= document.getElementById("errormonth");
    let errorday= document.getElementById("errorday");

    let errormenssaje = "This field is required.";
    validarFecha(day,month,year);
    /* Validando Year
    if(year === "" || month == "" || day == ""){
        erroryear.textContent = errormenssaje;
        errormonth.textContent = errormenssaje;
        errorday.textContent = errormenssaje;
        console.log("Datos vacios");
        return false;

    }else if (year >= currentYear && month >= currentMonth && day >= currentDay){
        console.log("La fecha es mayor o igual a la actual");
        alert("¡La fecha ingresada no debe ser mayor o igual a la fecha actual!");
        return false;
    }else{
        erroryear.textContent = "";
        errormonth.textContent = "";
        errorday.textContent = "";
    }
    // validar si la fecha es valida o no
    let date = new Date(year, month-1,day);

    console.log(date.getFullYear(), year);
    console.log(date.getMonth(), (month-1));
    console.log(date.getDay(), day);

    if (date.getFullYear() == year && date.getMonth() == month - 1 && date.getDay() == day){
        
        erroryear.textContent = "";
        errormonth.textContent = "";
        errorday.textContent = "";
        console.log("La fecha es valida");
    }else{
        console.log("La fecha es invalida");
        erroryear.textContent = "Must be a valid year";
        errormonth.textContent = "Must be a valid month";
        errorday.textContent = "Must be a valid day";
        return false;
    }
    
    dayInput = day;
    monthInput = month;
    yearInput = year;
    console.log("day");
    return true;*/
}

function Calculadora(){
    validarDatos();
    /*if (validarDatos() == true){
    console.log(dayInput)

    /* OBTENEMOS EL VALOR DE  LOS GUIONES 
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
}*/
}

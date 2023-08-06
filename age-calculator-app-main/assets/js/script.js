let currentDate = new Date();

/* SEPARANDO POR DIA, MES Y AÑO */
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();


function obtenerDatos(){
    /*  OBTENEMOS LOS VALORES DE LOS INPUTS */
    let dayElement = document.getElementById("day").value;
    let monthElement = document.getElementById("month").value;
    let yearElement = document.getElementById("year").value;

    /* OBTENEMOS EL VALOR DE  LOS GUIONES */
    let yearSpanElement = document.getElementById("resultYears");
    let monthSpanElement = document.getElementById("resultMonths");
    let daySpanElement =document.getElementById("resultDays");

    /*  MENSAJE DE ERROR */
    let erroryear= document.getElementById("erroryear");
    let errormonth= document.getElementById("errormonth");
    let errorday= document.getElementById("errorday");

    if (dayElement != "" && monthElement != "" && yearElement != ""){
        let totalyears = currentYear - valoryear;
        let totalmonths = currentMonth + (12 - valormonth);
        let totaldays =currentDay -  valorday;

        if (currentMonth < valormonth){
            totalyears = totalyears - 1;
        }

        yearSpanElement.textContent = totalyears;
        monthSpanElement.textContent =totalmonths;
        daySpanElement.textContent =totaldays;

        erroryear.style.display = "none";
        errormonth.style.display = "none";
        errorday.style.display = "none";
        return true;
    }else{
        erroryear.style.display = "inline";
        errormonth.style.display = "inline";
        errorday.style.display = "inline";
        return false;
    }
}

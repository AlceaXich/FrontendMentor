let currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();


function obtenerDatos(){
    let dayElement = document.getElementById("day");
    let monthElement = document.getElementById("month");
    let yearElement = document.getElementById("year");

    let yearSpanElement = document.getElementById("resultYears");
    let monthSpanElement = document.getElementById("resultMonths");
    let daySpanElement =document.getElementById("resultDays");

    let valorday = dayElement.value;
    let valormonth = monthElement.value;
    let valoryear = yearElement.value;
    
    var errorInput = document.getElementById("errorinput");

    if (valorday != "" && valormonth != "" && valoryear != ""){
        let totalyears = currentYear - valoryear;
        let totalmonths = currentMonth + (12 - valormonth);
        let totaldays =currentDay -  valorday;

        if (currentMonth < valormonth){
            totalyears = totalyears - 1;
        }

        yearSpanElement.textContent = totalyears;
        monthSpanElement.textContent =totalmonths;
        daySpanElement.textContent =totaldays;

        errorInput.style.display = "none"
        return true;
    }else{
        errorInput.style.display = "inline";
        return false;
    }
}

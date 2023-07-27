let currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

function obtenerDatos(){
    let dayElement = document.getElementById("day");
    let monthElement = document.getElementById("month");
    let yearElement = document.getElementById("year");

    let yearSpanElement = document.getElementById("resultYears");

    let valorday = dayElement.value;
    let valormonth = monthElement.value;
    let valoryear = yearElement.value;

    let totalyears = currentYear - valoryear;
    if (currentMonth < valormonth){
        totalyears = totalyears - 1;
    }
    yearSpanElement.textContent = totalyears;

    console.log("El valoe de day ingresado es: " + valorday);
    console.log("El valoe de month ingresado es: " + valormonth);
    console.log("El valoe de year ingresado es: " + valoryear); 
}

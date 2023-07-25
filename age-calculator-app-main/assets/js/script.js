let currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

function obtenerDatos(){
    let dayElement = document.getElementById("day");
    let monthElement = document.getElementById("month");
    let yearElement = document.getElementById("year");
    let daySpanElement = document.getElementById("resultYears");

    let valorday = dayElement.value;
    let valormonth = monthElement.value;
    let valoryear = yearElement.value;

    daySpanElement.textContent = valoryear - currentYear;

    console.log("El valoe de day ingresado es: " + valorday);
    console.log("El valoe de month ingresado es: " + valormonth);
    console.log("El valoe de year ingresado es: " + valoryear); 
}

const dates = new Date();

const day = dates.getDate();
const month = dates.getMonth()+1;
const year = dates.getFullYear();

const daysinput = document.getElementById('days');
const monthinput = document.getElementById('months');
const yearinput = document.getElementById('years');
const submitbutton = document.getElementById('submit');
const warnings = document.querySelectorAll('label')
const dayoutput = document.getElementById('day-output');
const monthoutput = document.getElementById('month-output');
const yearoutput = document.getElementById('year-output');
const daywarning = document.getElementById('warning-days');
const monthwarning = document.getElementById('warning-months');
const yearwarning = document.getElementById('warning-years');
const inputwarning = document.querySelectorAll('input');
console.log(day);
daywarning.style.color = 'red';
daywarning.style.fontSize = '9px';
monthwarning.style.color = 'red';
monthwarning.style.fontSize = '9px';
yearwarning.style.color = 'red';
yearwarning.style.fontSize = '9px';

function emptyinput(){
    for (i = 0; i < warnings.length ;i++){
        if (daysinput.value === "" || monthinput.value === "" || yearinput.value === ""){
            warnings[i].style.color = 'red';
            daywarning.innerHTML = 'This field is required';
            monthwarning.innerHTML = 'This field is required';
            yearwarning.innerHTML = 'This field is required';
        }
    }
   
}
function dayemptyinput(){
    if(daysinput.value === ""){
        warnings[0].style.color = 'red';
        daywarning.innerHTML = 'This field is required';
    }else if(daysinput.value > 31){
        warnings[0].style.color = 'red';
        daywarning.innerHTML = 'please enter a valid date';
        }
    else {
        daywarning.innerHTML = "";
        warnings[0].style.color = 'blue';
    }
}
function monthemptyinput(){
    if(monthinput.value === "" ){
        warnings[1].style.color = 'red';
        monthwarning.innerHTML = 'This field is required';
    } else if(monthinput.value > 12){
        warnings[1].style.color = 'red';
        monthwarning.innerHTML = 'please enter a valid month';
        }
    else {
        monthwarning.innerHTML = "";
        warnings[1].style.color = 'blue';
}
}
function yearemptyinput(){
    if(yearinput.value === ""){
        warnings[2].style.color = 'red';
        yearwarning.innerHTML = 'This field is required';
    }else if(yearinput.value > year){
        warnings[2].style.color = 'red';
        yearwarning.innerHTML = 'please enter a valid year';
        }
    else {
        yearwarning.innerHTML = "";
        warnings[2].style.color = 'blue';
    }
}
function getyear(){
    if (daysinput.value === "" || monthinput.value === "" || yearinput.value === ""){
        return
    }else if(daysinput.value === "" || yearinput.value > year){
    return
    }
    yearoutput.innerHTML= Math.abs(yearinput.value - year);
    return
}
function getmonth(){
    if (daysinput.value === "" || monthinput.value === "" || yearinput.value === ""){
        return
    }else if(monthinput.value === "" || monthinput.value > 12){
    return
    }
    monthoutput.innerHTML= Math.abs(monthinput.value - month);
    return
}
function getday(){
    if (daysinput.value === "" || monthinput.value === "" || yearinput.value === ""){
        return
    }else if(yearinput.value === "" || daysinput.value > 31){
    return
    }
    // for(k = ;)?
    dayoutput.innerHTML= Math.abs(daysinput.value - day);
    return
}
submitbutton.addEventListener('click', () => {
  emptyinput();
  dayemptyinput();
  monthemptyinput();
  yearemptyinput();
  if (daysinput.value === "" || monthinput.value === "" || yearinput.value === "" ||
      daysinput.value > 31 || monthinput.value > 12 || yearinput.value > year) {
    // Reset input fields and output areas:
    daysinput.value = "";
    monthinput.value = "";
    yearinput.value = "";
    dayoutput.innerHTML = "--";
    monthoutput.innerHTML = "--";
    yearoutput.innerHTML = "--";
  } else {
    getyear();
    getmonth();
    getday();
  }
});
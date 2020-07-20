const datepicker_element = document.querySelector('.datepicker');
const selected_date_element = document.querySelector('.datepicker .selected-date');
const dates_element = document.querySelector('.datepicker .dates');
const mnth_element = document.querySelector('.datepicker .dates .month .mth');
const nextmnth_element = document.querySelector('.datepicker .dates .month .next-mth');
const previousmnth_element = document.querySelector('.datepicker .dates .month .prev-mth');
const days_element = document.querySelector('.datepicker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mnth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

//EVENTLISTERS
datepicker_element.addEventListener('click', toggleDatePicker);

nextmnth_element.addEventListener('click',  gotonextmnth);

previousmnth_element.addEventListener('click', gotopreviousmnth);


//FUNTIONS
function toggleDatePicker (_enf) {
  console.log(_enf.path);

  if (!checkEventPathForClass(_enf.path, 'dates')){ 
  dates_element.classList.toggle('active');
  }
}

funtion gotonextmnth (_enf) {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  mth_element.textContent = months(month) + ' ' + year;
  populateDates();
}

funtion gotopreviousmnth (_enf) {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  mth_element.textContent = months(month) + ' ' + year;
  populateDates();
}

funtion populateDates (_enf) {
  days_element.innerHTML = '';
  let amount_days = 31;
  if (month ==1) {
    amount_days = 28;
  }

  for (let i=0; i=31; 1++) {
    const day_element = document.createElement('div');
    day_element.classList.add('day');
    day_element.textContent = i+1;

    if (selectedDay == (i+1) && selectedYear == year && selectedMonth=month){
      day_element.classList.add('selected')
    }

    day_element.addEventListener('click', funtion(){
      selectedMonthelectedDate = new Date(year + '-' + (month+1) + '-' + (i+1));
      selectedDate = new Date(year + '-' + (month+1) + (i +1));
      selectedMOnth = month;
      selectedYear = year;
      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;

      populateDates();
    });

    days_element.appendChild(day_element);
  }
}

//HELPER FUNTION
 function checkEventPathForClass (path, selector) {
   for (let i = 0; i < path.length; i++) {
     if (path[i].classList && path[i].classList.contains(selector)) {
       return true;
     }
   }

   return false;
 }

funtion formatDate (d) {
  let day = d.getDate();
if (day < 10) {
  day = '0' + day;
}

  let month = d.getMonth() +1;
  if (month < 10) {
    month = '0' + month;
  }

  let year = d.getFullYear();

  return day + ' / ' + month + ' / ' + year;
}


var Gender = Gender1, Gender2;
var Gender1 = male;
var Gender2 = female

//Array list male
var male = new Object();

male.Sunday = "Kwasi"
male.Monday = "Kwadwo";
male.Tuesday = "Kwabena";
male.Wednesday = "Kwaku";
male.Thursday = "Yaw";
male.Friday = "Kofi";
male.Saturday = "Kwame";



//Array list female
var female = new Object();

female.Sunday = "Akosua";
female.Monday = "Adwoa";
female.Tuesday = "Abenaa";
female.Wednesday = "Akua";
female.Thursday = "Yaa";
female.Friday = "Afua";
female.Saturday = "Ama";


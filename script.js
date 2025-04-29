//Getting current day,month and year for validation
const today=new Date();
let todays_year=today.getFullYear();
let todays_day=today.getDate();
let todays_month=today.getMonth()+1;

//Day value validation
function validateDay()
{
    let dayInput=document.getElementById("day");
    let dayPrompt=document.getElementById("day-error");
    let monthInput = document.getElementById("month");
    let yearInput = document.getElementById("year");

    let day=dayInput.value.trim();
    let month = monthInput.value.trim();
    let year = yearInput.value.trim();
    if(dayInput.value.trim()=="")
    {
        dayInput.classList.add("invalid");
        dayPrompt.innerText="";
        return;
    }

    let maxDay = 31;

    //Check if month and year inputs are valid
    if (!monthInput.classList.contains("invalid") && !yearInput.classList.contains("invalid")) {

        //If the entered year and month are the current year and month
        if (year == todays_year && month == todays_month) {
            maxDay = todays_day;
        }
        else {
            //Otherwise, set maxDay based on the month
            switch (parseInt(month)) {
                case 4: case 6: case 9: case 11:
                    maxDay = 30;
                    break;
                case 2:
                    //Check for leap year
                    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                        maxDay = 29;
                    } else {
                        maxDay = 28;
                    }
                    break;
                default:
                    maxDay = 31;
            }
        }
    }
    //Otherwise, if month is set and valid(incase year was not set or invalid),then set maxDay based on the month
    else if(!monthInput.classList.contains("invalid")) {
        switch (parseInt(month)) {
            case 4: case 6: case 9: case 11:
                maxDay = 30;
                break;
            case 2:
                //Check for leap year
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                    maxDay = 29;
                } else {
                    maxDay = 28;
                }
                break;
            default:
                maxDay = 31;
        }
    }


    //If day is invalid(out of limit)
    if(day<1 || day > maxDay)
    {
        dayInput.classList.add("invalid");
        dayPrompt.innerText="Invalid day value";
        return;
    }
    else
    {
        dayInput.classList.remove("invalid");
        dayPrompt.innerText="";
    }

}

//Year Verification
function validateYear()
{
    let yearInput=document.getElementById("year");
    let yearPrompt=document.getElementById("year-error");
    let year=yearInput.value.trim();
    if(yearInput.value.trim()=="")
    {
        yearInput.classList.add("invalid");
        yearPrompt.innerText="";
        return;
    }
    if(year<1 || year > todays_year)
    {
        yearInput.classList.add("invalid");
        yearPrompt.innerText="Invalid year value";
        return;
    }
    else
    {
        yearInput.classList.remove("invalid");
        yearPrompt.innerText="";
    }
}

//Month Validation
function validateMonth()
{
    let monthInput=document.getElementById("month");
    let monthPrompt=document.getElementById("month-error");
    let month=monthInput.value.trim();
    let yearInput = document.getElementById("year");
    let year = yearInput.value.trim();


    if(monthInput.value.trim()=="")
    {
        monthInput.classList.add("invalid");
        monthPrompt.innerText="";
        return;
    }
    //Finding valid max limit
    let maxLimit=12;
    //Check If year value is valid and is equal to the current year.
    if (!yearInput.classList.contains("invalid") && year == todays_year) {
        maxLimit = todays_month; //Max limit will be current month
    }

    //If month value is invalid
    if(month<1 || month > maxLimit)
    {
        monthInput.classList.add("invalid");
        monthPrompt.innerText="Invalid month value";
        return;
    }
    else
    {
        monthInput.classList.remove("invalid");
        monthPrompt.innerText="";
    }

}

//Setting limit on year input(html)
document.getElementById('year').setAttribute('max', todays_year);

//Calculate age for verification
function checkAge(event)
{   
    event.preventDefault();  

    //Getting the birthday
    let day=document.getElementById('day').value;
    let month=document.getElementById('month').value;
    let year=document.getElementById('year').value;

    //Getting age the year
    let age_in_year=todays_year - year;
   if(age_in_year!=0)
   {
    if(month>todays_month)
    {
        age_in_year-=1;
    }
    else if(month==todays_month)
    {
        if(day>todays_day)
        {
            age_in_year-=1;
        }
    }
    }
    if(age_in_year<15)
    {
        alert("RESTRICED!!You are under age")
    }
    else{
        window.location.href="https://www.google.com"
    }
}

//If any of the field is invalid btn will be disabled 
function hasInvalidInputs() {
    let inputs = document.querySelectorAll('input');
    let submitButton=document.getElementById("go-btn");
    let checkBtn=false;
   
    for (let input of inputs) {
        if (input.classList.contains('invalid')) {
            
            checkBtn=true;
        }
    }
    if(checkBtn==true)
    {
        submitButton.disabled=true;
    }
    else{
        submitButton.disabled=false;
    }
    
}
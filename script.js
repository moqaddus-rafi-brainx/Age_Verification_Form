//For setting a limit on year input
const today=new Date();
todays_year=today.getFullYear();
document.getElementById('year').setAttribute('max', todays_year);

function checkAge(event)
{   
    event.preventDefault();  
    console.log("Inside")

    //Getting the birthday
    let day=document.getElementById('day').value;
    let month=document.getElementById('month').value;
    let year=document.getElementById('year').value;

    //Getting todays date
    todays_day=today.getDate();
    todays_month=today.getMonth()+1;
    console.log("Inside")
    //Getting the year
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